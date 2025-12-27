#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toolsPath = path.join(__dirname, '../src/data/tools.json');

const REQUIRED_REF = '?ref=riseofmachine.com';

try {
  const data = JSON.parse(fs.readFileSync(toolsPath, 'utf-8'));

  if (!data.tools || !Array.isArray(data.tools)) {
    console.error('❌ Invalid tools.json structure');
    process.exit(1);
  }

  const urlMap = new Map(); // url -> array of {title, category, slug}
  const issues = {
    missing_url: [],
    missing_protocol: [],
    missing_ref: [],
    invalid_structure: [],
  };
  let totalTools = 0;

  // Iterate through all categories and tools
  data.tools.forEach((category) => {
    if (category.content && Array.isArray(category.content)) {
      category.content.forEach((tool) => {
        totalTools++;
        const url = tool.url?.trim();

        const toolInfo = {
          title: tool.title,
          category: category.category,
          slug: tool.slug,
        };

        // Check 1: Missing URL
        if (!url) {
          issues.missing_url.push(toolInfo);
          return;
        }

        // Check 2: Missing HTTP/HTTPS protocol
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
          issues.missing_protocol.push({ ...toolInfo, url });
        }

        // Check 3: Missing ?ref=riseofmachine.com
        if (!url.includes(REQUIRED_REF)) {
          issues.missing_ref.push({ ...toolInfo, url });
        }

        // Track duplicates
        if (!urlMap.has(url)) {
          urlMap.set(url, []);
        }
        urlMap.get(url).push(toolInfo);
      });
    }
  });

  // Find duplicates
  const duplicates = Array.from(urlMap.entries())
    .filter(([, tools]) => tools.length > 1)
    .sort((a, b) => b[1].length - a[1].length); // Sort by count descending

  // Also validate split category files if they exist
  let splitToolsChecked = 0;
  const toolsDir = path.join(__dirname, '../src/data/tools');
  if (fs.existsSync(toolsDir)) {
    const files = fs.readdirSync(toolsDir).filter(f => f.endsWith('.json'));

    files.forEach(file => {
      const filepath = path.join(toolsDir, file);
      const categoryData = JSON.parse(fs.readFileSync(filepath, 'utf-8'));
      const categoryName = file.replace('.json', '');

      if (!Array.isArray(categoryData)) {
        issues.invalid_structure.push({ category: categoryName, data: categoryData });
        return;
      }

      categoryData.forEach(tool => {
        splitToolsChecked++;

        const toolInfo = {
          title: tool.title,
          category: categoryName,
          slug: tool.slug,
          url: tool.url
        };

        // Same validation as main tools.json
        if (!tool.url) {
          issues.missing_url.push(toolInfo);
        } else {
          if (!tool.url.startsWith('http://') && !tool.url.startsWith('https://')) {
            issues.missing_protocol.push(toolInfo);
          }
          if (!tool.url.includes(REQUIRED_REF)) {
            issues.missing_ref.push(toolInfo);
          }
        }
      });
    });
  }

  console.log(`\n📊 Data Validation Report`);
  console.log(`${'='.repeat(70)}`);
  console.log(`Total tools processed: ${totalTools}${splitToolsChecked > 0 ? ` (+ ${splitToolsChecked} split)` : ''}`);
  console.log(`Unique URLs: ${urlMap.size}\n`);

  let hasIssues = false;

  // Report missing URLs
  if (issues.missing_url.length > 0) {
    hasIssues = true;
    console.log(`❌ Missing URLs (${issues.missing_url.length}):`);
    issues.missing_url.forEach((tool, i) => {
      console.log(`   ${i + 1}. "${tool.title}" (slug: ${tool.slug}, category: ${tool.category})`);
    });
    console.log();
  }

  // Report missing protocol
  if (issues.missing_protocol.length > 0) {
    hasIssues = true;
    console.log(`❌ Missing HTTP/HTTPS (${issues.missing_protocol.length}):`);
    issues.missing_protocol.forEach((tool, i) => {
      console.log(`   ${i + 1}. "${tool.title}" → ${tool.url}`);
    });
    console.log();
  }

  // Report missing ref parameter
  if (issues.missing_ref.length > 0) {
    hasIssues = true;
    console.log(`⚠️  Missing ${REQUIRED_REF} (${issues.missing_ref.length}):`);
    issues.missing_ref.forEach((tool, i) => {
      console.log(`   ${i + 1}. "${tool.title}" → ${tool.url}`);
    });
    console.log();
  }

  // Report duplicates
  if (duplicates.length > 0) {
    hasIssues = true;
    console.log(`⚠️  Duplicate URLs (${duplicates.length}):`);
    duplicates.forEach(([url, tools], index) => {
      console.log(`   ${index + 1}. ${url}`);
      console.log(`      Count: ${tools.length} tools`);
      tools.forEach((tool, i) => {
        console.log(`      ${i + 1}. "${tool.title}" (slug: ${tool.slug}, category: ${tool.category})`);
      });
    });
    console.log();
  }

  // Report invalid structure
  if (issues.invalid_structure.length > 0) {
    hasIssues = true;
    console.log(`❌ Invalid Structure in Split Files (${issues.invalid_structure.length}):`);
    issues.invalid_structure.forEach((issue, i) => {
      console.log(`   ${i + 1}. Category: "${issue.category}" - Expected Array, got ${typeof issue.data}`);
    });
    console.log();
  }

  console.log(`${'='.repeat(70)}`);

  if (!hasIssues) {
    console.log(`✅ All checks passed!\n`);
    process.exit(0);
  }

  const issueCount = issues.missing_url.length + issues.missing_protocol.length +
    issues.missing_ref.length + issues.invalid_structure.length + duplicates.length;
  console.log(`Summary: ${issueCount} issue(s) found\n`);

  process.exit(1);
} catch (error) {
  console.error('❌ Error reading tools.json:', error.message);
  process.exit(1);
}

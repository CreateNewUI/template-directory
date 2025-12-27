import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import type { ToolsConfig, Category, Tool } from '../src/types/index.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function slugify(text: string): string {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')     // Replace spaces with -
        .replace(/[^\w-]+/g, '')     // Remove all non-word chars
        .replace(/--+/g, '-')       // Replace multiple - with single -
        .replace(/^-+/, '')         // Trim - from start of text
        .replace(/-+$/, '');        // Trim - from end of text
}

const toolsPath = path.join(__dirname, '../src/data/tools.json');

try {
    // Process monolithic tools.json
    const data: ToolsConfig = JSON.parse(fs.readFileSync(toolsPath, 'utf-8'));
    let modified = false;

    data.tools.forEach((category: Category) => {
        // 1. Generate missing slugs
        category.content.forEach((tool: Tool) => {
            if (!tool.slug) {
                tool.slug = slugify(tool.title);
                console.log(`Generated slug for ${tool.title}: ${tool.slug}`);
                modified = true;
            }
        });

        // 2. Sort tools alphabetically by title
        const originalOrder = [...category.content];
        category.content.sort((a, b) => a.title.localeCompare(b.title));

        const orderChanged = JSON.stringify(originalOrder) !== JSON.stringify(category.content);
        if (orderChanged) {
            console.log(`Sorted tools in category: ${category.category}`);
            modified = true;
        }
    });

    if (modified) {
        fs.writeFileSync(toolsPath, JSON.stringify(data, null, 2));
        console.log('✅ Updated tools.json (slugs & sorting)');
    } else {
        console.log('✅ tools.json already up to date (slugs & sorting)');
    }

} catch (error: any) {
    console.error('❌ Error processing slugs:', error.message);
}

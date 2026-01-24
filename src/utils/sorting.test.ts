import { describe, it, expect } from 'vitest';
import { sortTools, toolComparators, mulberry32, seededShuffle } from './sorting';
import type { Tool } from '../types';

const createTool = (title: string, dateAdded?: string): Tool => ({
    title,
    body: `Description for ${title}`,
    url: `https://example.com/${title.toLowerCase()}`,
    'date-added': dateAdded || '2024-01-01',
});

describe('toolComparators', () => {
    const tools: Tool[] = [
        createTool('Zebra', '2024-03-01'),
        createTool('Apple', '2024-01-15'),
        createTool('Mango', '2024-02-20'),
    ];

    it('nameAsc sorts alphabetically A-Z', () => {
        const sorted = [...tools].sort(toolComparators.nameAsc);
        expect(sorted.map(t => t.title)).toEqual(['Apple', 'Mango', 'Zebra']);
    });

    it('nameDesc sorts alphabetically Z-A', () => {
        const sorted = [...tools].sort(toolComparators.nameDesc);
        expect(sorted.map(t => t.title)).toEqual(['Zebra', 'Mango', 'Apple']);
    });

    it('dateNewest sorts by date descending', () => {
        const sorted = [...tools].sort(toolComparators.dateNewest);
        expect(sorted.map(t => t.title)).toEqual(['Zebra', 'Mango', 'Apple']);
    });

    it('dateOldest sorts by date ascending', () => {
        const sorted = [...tools].sort(toolComparators.dateOldest);
        expect(sorted.map(t => t.title)).toEqual(['Apple', 'Mango', 'Zebra']);
    });
});

describe('sortTools', () => {
    const tools: Tool[] = [
        createTool('Beta'),
        createTool('Alpha'),
        createTool('Gamma'),
    ];

    it('returns a new array', () => {
        const result = sortTools(tools, 'nameAsc');
        expect(result).not.toBe(tools);
    });

    it('does not mutate the original array', () => {
        const originalOrder = tools.map(t => t.title);
        sortTools(tools, 'nameDesc');
        expect(tools.map(t => t.title)).toEqual(originalOrder);
    });
});

describe('mulberry32', () => {
    it('produces deterministic results with same seed', () => {
        const rng1 = mulberry32(12345);
        const rng2 = mulberry32(12345);
        
        expect(rng1()).toBe(rng2());
        expect(rng1()).toBe(rng2());
        expect(rng1()).toBe(rng2());
    });

    it('produces different results with different seeds', () => {
        const rng1 = mulberry32(12345);
        const rng2 = mulberry32(54321);
        
        expect(rng1()).not.toBe(rng2());
    });

    it('produces values between 0 and 1', () => {
        const rng = mulberry32(42);
        for (let i = 0; i < 100; i++) {
            const value = rng();
            expect(value).toBeGreaterThanOrEqual(0);
            expect(value).toBeLessThan(1);
        }
    });
});

describe('seededShuffle', () => {
    const items = ['a', 'b', 'c', 'd', 'e'];

    it('returns a new array', () => {
        const result = seededShuffle(items, 42);
        expect(result).not.toBe(items);
    });

    it('does not mutate the original array', () => {
        const original = [...items];
        seededShuffle(items, 42);
        expect(items).toEqual(original);
    });

    it('produces same result with same seed', () => {
        const result1 = seededShuffle(items, 12345);
        const result2 = seededShuffle(items, 12345);
        expect(result1).toEqual(result2);
    });

    it('produces different results with different seeds', () => {
        const result1 = seededShuffle(items, 12345);
        const result2 = seededShuffle(items, 54321);
        expect(result1).not.toEqual(result2);
    });

    it('contains all original items', () => {
        const result = seededShuffle(items, 42);
        expect(result.sort()).toEqual([...items].sort());
    });
});

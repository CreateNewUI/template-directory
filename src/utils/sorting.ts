import type { Tool } from '../types';

/**
 * Sorting comparators for tool arrays
 */
export const toolComparators = {
    nameAsc: (a: Tool, b: Tool): number => a.title.localeCompare(b.title),
    nameDesc: (a: Tool, b: Tool): number => b.title.localeCompare(a.title),
    dateNewest: (a: Tool, b: Tool): number =>
        new Date(b['date-added'] || 0).getTime() - new Date(a['date-added'] || 0).getTime(),
    dateOldest: (a: Tool, b: Tool): number =>
        new Date(a['date-added'] || 0).getTime() - new Date(b['date-added'] || 0).getTime(),
} as const;

export type SortKey = keyof typeof toolComparators | 'random';

/**
 * Sort an array of tools by the specified key
 * @param tools - Array of tools to sort
 * @param sortKey - Sort key (nameAsc, nameDesc, dateNewest, dateOldest)
 * @returns Sorted array (does not mutate original)
 */
export function sortTools(tools: Tool[], sortKey: keyof typeof toolComparators): Tool[] {
    const comparator = toolComparators[sortKey];
    return [...tools].sort(comparator);
}

/**
 * Mulberry32 PRNG - deterministic random number generator
 * @param seed - Seed value
 * @returns Function that returns random numbers between 0 and 1
 */
export function mulberry32(seed: number): () => number {
    return function (): number {
        let a = seed;
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        seed = a;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

/**
 * Shuffle an array using a seeded random number generator
 * @param arr - Array to shuffle
 * @param seed - Random seed for deterministic shuffling
 * @returns New shuffled array (does not mutate original)
 */
export function seededShuffle<T>(arr: T[], seed: number): T[] {
    const rnd = mulberry32(seed || 1);
    const result: T[] = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(rnd() * (i + 1));
        const temp: T = result[i] as T;
        result[i] = result[j] as T;
        result[j] = temp;
    }
    return result;
}

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { isRecentlyAdded, parseDate } from './dates';

describe('isRecentlyAdded', () => {
    beforeEach(() => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date('2024-06-15'));
    });

    it('returns false for undefined date', () => {
        expect(isRecentlyAdded(undefined)).toBe(false);
    });

    it('returns true for date added today', () => {
        expect(isRecentlyAdded('2024-06-15')).toBe(true);
    });

    it('returns true for date within 30 days', () => {
        expect(isRecentlyAdded('2024-06-01')).toBe(true);
        expect(isRecentlyAdded('2024-05-20')).toBe(true);
    });

    it('returns false for date older than 30 days', () => {
        expect(isRecentlyAdded('2024-05-01')).toBe(false);
        expect(isRecentlyAdded('2024-01-01')).toBe(false);
    });

    it('respects custom days parameter', () => {
        expect(isRecentlyAdded('2024-06-10', 7)).toBe(true);
        expect(isRecentlyAdded('2024-06-01', 7)).toBe(false);
    });

    it('accepts Date objects', () => {
        expect(isRecentlyAdded(new Date('2024-06-10'))).toBe(true);
        expect(isRecentlyAdded(new Date('2024-01-01'))).toBe(false);
    });
});

describe('parseDate', () => {
    it('returns null for undefined', () => {
        expect(parseDate(undefined)).toBe(null);
    });

    it('returns null for invalid date string', () => {
        expect(parseDate('not-a-date')).toBe(null);
        expect(parseDate('')).toBe(null);
    });

    it('returns Date object for valid ISO string', () => {
        const result = parseDate('2024-06-15');
        expect(result).toBeInstanceOf(Date);
        expect(result?.toISOString().startsWith('2024-06-15')).toBe(true);
    });

    it('handles full ISO datetime strings', () => {
        const result = parseDate('2024-06-15T12:30:00Z');
        expect(result).toBeInstanceOf(Date);
    });
});

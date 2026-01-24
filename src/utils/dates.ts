/**
 * Date utility functions
 */

const MS_PER_DAY = 1000 * 60 * 60 * 24;

/**
 * Check if a date is within the specified number of days from today
 * @param dateAdded - ISO date string or Date object
 * @param days - Number of days to check (default: 30)
 * @returns true if the date is within the specified days
 */
export function isRecentlyAdded(dateAdded: string | Date | undefined, days: number = 30): boolean {
    if (!dateAdded) return false;

    const addedDate = typeof dateAdded === 'string' ? new Date(dateAdded) : dateAdded;
    const today = new Date();
    const differenceInTime = today.getTime() - addedDate.getTime();
    const differenceInDays = differenceInTime / MS_PER_DAY;

    return differenceInDays <= days;
}

/**
 * Parse a date string safely
 * @param dateString - ISO date string
 * @returns Date object or null if invalid
 */
export function parseDate(dateString: string | undefined): Date | null {
    if (!dateString) return null;
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? null : date;
}

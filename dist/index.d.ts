export declare function logDuration(startTime: number, label: string): number;
export declare function getFormattedDuration(durationInMs: number): string;
export declare function calculateAverage(numbers: number[]): number;
export default class TimeTracker {
    private durationArray;
    private totalItems;
    constructor(totalItemsCount: number);
    logProcess(startTime: number, itemName: string, currentCount: number): void;
}

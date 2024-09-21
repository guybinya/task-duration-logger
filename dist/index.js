"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logDuration = logDuration;
exports.getFormattedDuration = getFormattedDuration;
exports.calculateAverage = calculateAverage;
function logDuration(startTime, label) {
    const durationInMs = Date.now() - startTime;
    const formattedDuration = getFormattedDuration(durationInMs);
    console.log(`${label} | Duration: ${formattedDuration}`);
    return durationInMs;
}
function getFormattedDuration(durationInMs) {
    const hours = Math.floor(durationInMs / 3600000);
    const minutes = Math.floor((durationInMs % 3600000) / 60000);
    const seconds = Math.floor((durationInMs % 60000) / 1000);
    const formattedMinutes = hours > 0 ? String(minutes).padStart(2, '0') : minutes;
    const formattedSeconds = String(seconds).padStart(2, '0');
    return hours > 0
        ? `${hours}:${formattedMinutes}:${formattedSeconds}`
        : `${minutes}:${formattedSeconds}`;
}
function calculateAverage(numbers) {
    if (numbers.length === 0)
        return 0;
    const total = numbers.reduce((sum, num) => sum + num, 0);
    return total / numbers.length;
}
class TimeTracker {
    constructor(totalItemsCount) {
        this.durationArray = [];
        this.totalItems = totalItemsCount;
    }
    logProcess(startTime, itemName, currentCount) {
        const msDuration = logDuration(startTime, `Finished with ${itemName}`);
        this.durationArray.push(msDuration);
        const avgDuration = calculateAverage(this.durationArray);
        const itemsLeft = this.totalItems - currentCount;
        const estimatedDuration = getFormattedDuration(avgDuration * itemsLeft);
        console.log(`Total avg of ${(avgDuration / 1000).toFixed(1)}s per item\n` +
            `*Estimated time till finished: ${estimatedDuration}*`);
    }
}
exports.default = TimeTracker;

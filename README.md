# Task Duration Logger

This lightweight utility is designed to help you accurately estimate the remaining time for completing long-running tasks.

## Installation

You can install this package using npm:

```bash
npm install task-duration-logger
```

## Usage

### Importing the Package

```typescript
import { TimeTracker } from 'task-duration-logger';
```

### Example Usage

```typescript
// Initialize with the total number of items to track
const tracker = new TimeTracker(10);

// Simulate processing of an item
const startTime = Date.now();

// Log the duration of the process for a single item
tracker.logProcess(startTime, 'Sample Task', 1);
```

### Available Functions

#### `logDuration(startTime: number, label: string): number`

Logs the duration of a process and returns the time in milliseconds.

- `startTime`: The start time of the process (in milliseconds, typically `Date.now()`).
- `label`: A label to describe the task.

#### `getFormattedDuration(durationInMs: number): string`

Formats a duration in milliseconds into a readable string (`HH:MM:SS` or `MM:SS`).

- `durationInMs`: The duration in milliseconds.

#### `calculateAverage(numbers: number[]): number`

Calculates the average value of an array of numbers.

- `numbers`: An array of numbers (e.g., durations).

### Class: `TimeTracker`

#### Constructor: `new TimeTracker(totalItems: number)`

Creates an instance of `TimeTracker` to log task durations and estimate the time left for completion.

- `totalItems`: The total number of tasks to be tracked.

#### Method: `logProcess(startTime: number, itemName: string, currentCount: number): void`

Logs the duration of a specific task and estimates the remaining time based on the average duration of past tasks.

- `startTime`: The start time of the current task (in milliseconds).
- `itemName`: The name of the task or item being processed.
- `currentCount`: The current count of items that have been processed.

## Example Use Cases

### Batch Processing Time Estimation
When processing a large number of files or tasks, you can use the package to track the duration of each task and estimate how long it will take to process the entire batch. This is useful for providing progress updates and managing expectations on long-running jobs.
### API Request Monitoring
In scenarios where multiple API requests are sent in sequence, the package can log the time each request takes and estimate how long the remaining requests will take to complete. This helps in monitoring performance bottlenecks and optimizing request handling.
### Automated Task Tracking 
Use the package in a task automation system to track and log the time it takes for each automation step to complete. By calculating the average duration, you can estimate the time required for the remaining automation tasks, improving scheduling and system efficiency.

## License

This package is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

## Contributing

Feel free to open issues or submit pull requests to improve this package. Contributions are welcome!

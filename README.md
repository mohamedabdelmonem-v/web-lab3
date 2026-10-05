# University Course Management System

## File Organization

### models.js
Contains the Student class definition.

### database.js
Simulates asynchronous database access using setTimeout and callbacks.

### analytics.js
Contains helper functions:

- calculateClassAverage()
- findTopStudent()
- filterStudents()

### main.js
Application entry point.
Fetches data, creates Student instances, and generates reports.

---

## Concepts Used

- ES6 Classes
- Object.defineProperty()
- Callbacks
- setTimeout
- Array Methods
  - map()
  - filter()
  - reduce()
  - some()
- ES6 Modules
  - import
  - export

---

## Challenges Faced

1. Making the Student ID immutable using Object.defineProperty().
2. Calculating averages with reduce().
3. Converting raw JSON data into Student class instances.
4. Implementing a higher-order filtering function.


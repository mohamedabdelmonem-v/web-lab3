// main.js
import Student from "./models.js";

import fetchStudents from "./database.js";


import {
    calculateClassAverage,
    findTopStudent,
    filterStudents
} from "./analytics.js";

// fetchStudents function takes a callback function as a parameter
fetchStudents(rawData => {

    console.log("Data received!\n");
    //convert the data into student objects
    const students = rawData.map(student =>
        new Student(
            student.id,
            student.name,
            student.courses
        )
    );
    console.log("Testing Immutability:");

    console.log("Original ID:", students[0].id);

    console.log("Attempting to change ID to 999...");
    students[0].id = 999;
   
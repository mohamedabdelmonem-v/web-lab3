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

    // test read only property
    console.log("Testing Immutability:");

    console.log("Original ID:", students[0].id);

    console.log("Attempting to change ID to 999...");
    students[0].id = 999;

    console.log(
        "Final ID:",
        students[0].id,
        "(Success: ID did not change)"
    );
 
    console.log("\n--- Analytics Report ---");
     
    // calculate the class average for course 101
    const avg101 =
        calculateClassAverage(
            students,
            101
        );

    console.log(
        "Class Average for Course 101:",
        avg101.toFixed(2)
    ); 

    // top student based on average grade
const topStudent =
        findTopStudent(students);

    console.log(
        `Top Student: ${topStudent.name} (Average: ${topStudent.getAverage()})`
    );

    // filter students who have taken course 102
    const course102Students =
        filterStudents(
            students,
            student =>
                student.courses.some(
                    course =>
                        course.courseId === 102
                )
        );
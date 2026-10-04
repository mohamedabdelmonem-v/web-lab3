// analytics.js

function calculateClassAverage(students, courseId) {
    // filter the students array to get the grades for the specified courseId 
const grades = students
        .map(student =>
            student.courses.find(
                course => course.courseId === courseId
            ) 
        )
  .filter(course => course);
// calculate the average grade for the specified courseId
    const total = grades.reduce(
        (sum, course) => sum + course.grade,
        0
    );

    return total / grades.length;
}   

function findTopStudent(students) {
// use the reduce method to find the student with the highest average grade
    return students.reduce((top, current) => { 

        return current.getAverage() > top.getAverage()
            ? current
            : top;

    });
}
// filterStudents function takes an array of students and a criteria function as parameters
function filterStudents(students, criteriaFn) {

    return students.filter(criteriaFn);
}
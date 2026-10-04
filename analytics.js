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

    const total = grades.reduce(
        (sum, course) => sum + course.grade,
        0
    );

    return total / grades.length;

}
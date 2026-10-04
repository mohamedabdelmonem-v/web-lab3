// models.js
// create a class for Student
class Student {
    // the constructor takes an id, name, and an array of courses
constructor(id, name, courses) {
// define the id property as read-only
        Object.defineProperty(this, "id", {
            value: id,
            writable: false,
            enumerable: true,
            configurable: false
        });

        this.name = name;
        this.courses = courses;
    }
// the addCourse method takes a courseId and a grade and adds it to the courses array
    addCourse(courseId, grade) {
        this.courses.push({ courseId, grade });
    } 
// the getAverage method returns the average grade of all courses
    getAverage() {
        const total = this.courses.reduce(
            (sum, course) => sum + course.grade,
            0
        );

        return total / this.courses.length;
    }
}
export default Student;
// # Exercises 
// ## Student constructor function
// * Create a constructor function for Student objects with:
//   * Properties:
//     * firstName
//     * lastName
//     * birthYear
//     * academy 
//     * grades - array of numbers
//   * Methods:
//     * getAge() - returns age of student
//     * getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
//     * getGradesAverage() - returns the average of the student grades
// * Create an array with 3 students
// ## Student signup
// * Create a form with first name, last name, birth year and academy
// * Create a button for signing up
// * The button should create a new Student object and add it in the array of students


function Student(firstName, lastName, birthYear, academy, grades = []){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;

    this.getAge = function(){
        this.date = new Date();
        this.corentYear = date.getFullYear();
        return console.log(corentYear - birthYear);
    }

}
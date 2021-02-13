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



function Student(firstName, lastName, birthYear, academy, grades = []){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades=[];

    this.getAge = function(){
        let date = new Date();
        let corentYear = date.getFullYear();
        return console.log(corentYear - birthYear);
    }

    this.getInfo = function(){
        return console.log(`This is ${firstName} ${lastName} form academy ${academy}`);
    }
    
    this.gradeAvg = function(){
        let sum;
        for (let i = 0 ; i <= this.grades.length; i++ ){
            // debugger;
           Number(sum =+ grades[i]);
           // console.log(sum)
        }
        return (avg = sum / 4);
    }// pravam nekoja greshka
}

let student1 = new Student("Robert","Gjorgjievski",1992, "SEDC","[4,5,6]");
// student1.getAge();
// student1.getInfo();
// console.log(student1.gradeAvg());


// ## Student signup
// * Create a form with first name, last name, birth year and academy
// * Create a button for signing up
// * The button should create a new Student object and add it in the array of students

function SingUp(firstName,lastName,bYear,academy){
    this.firstName = firstName;
    this.lastName = lastName;
    this.bYear = bYear;
    this.academy = academy;

}
let firstName = document.getElementById("fName");
let lastName = document.getElementById("lName");
let birthYear = document.getElementById("birthYear");
let academy = document.getElementById("academy");
let btn = document.getElementById("btn");





btn.addEventListener('click', function(){
    arrStudents =[];
    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let birthYear = document.getElementById("birthYear").value;
    let academy = document.getElementById("academy").value;


   let newStudent= new SingUp (firstName,lastName,birthYear,academy);
   console.log(newStudent);
    arrStudents.push(newStudent);
    console.log(arrStudents);
})
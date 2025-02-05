/*
COMPLETE THE FOLLOWING TASKS WITHOUT MODIFYING ANY OF THE CODE IN THE HTML OR CSS FILE.

You should only write code in the JavaScript functions below, 
as well as update the `studentInformation` object with your personal information.

Each function is annotated with a comment explaining what it should do.

By the end of the lab, all tests in the report should be passing.
*/

const studentInformation = {
  name: "Kian Ranjbar",
  grade: "Junior",
  advisor: "Not Available",
  major: "Computer Science",
  graduationYear: "2024",
  imageUrl: "https://wallpaperaccess.com/full/1428481.jpg",
}

let semester = "Spring Semester"

const studentData = {
  "Spring Semester": [
    { code: "LIT 101", name: "English Literature 101", semester: "Spring 2021", credits: 5, grade: "B+" },
    { code: "CS 50", name: "Intro to Computer Science", semester: "Spring 2021", credits: 5, grade: "A-" },
    { code: "WD 140", name: "Modern Web Development", semester: "Spring 2021", credits: 5, grade: "A+" },
    { code: "JS 2.0", name: "Serverside JavaScript", semester: "Spring 2021", credits: 10, grade: "A-" },
  ],
  "Fall Semester": [
    { code: "Math 600", name: "Differential Equations", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "CS 10", name: "Python Programming", semester: "Fall 2020", credits: 5, grade: "A" },
    { code: "History 99", name: "History of Computers", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "MD 00", name: "Meditation and Mindfullness", semester: "Fall 2020", credits: 5, grade: "A+" },
  ],
  "Winter Term": [
    { code: "PHYS ED", name: "Physical Activity", semester: "Winter 2020", credits: 5, grade: "A-" },
    { code: "GEN ED", name: "General Education Requirement", semester: "Winter 2020", credits: 5, grade: "A+" },
  ],
}

const gpaPointsLookup = {
  "A+": 4.0,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  "D-": 0.7,
  F: 0.0,
}

/**
 * QUERY SELECTORS VARIABLES GO HERE
 */
const dropdownEl = document.querySelector(".dropdown")
// ADD more query selectors here
let studentNameSpan = document.querySelector("#student-name");
let studentAdvisorSpan = document.querySelector("#student-advisor");
let studentMajorSpan = document.querySelector("#student-major");
let studentGradeLevelSpan = document.querySelector("#student-grade-level");
let studentGraduationYearSpan = document.querySelector("#student-graduation-year");
let studentImageImg = document.querySelector("#student-image");
let semesterDropdownDiv = document.querySelector(".semester-dropdown");
let semesterDropdownH2 = document.querySelector(".dropdown-button");
let semesterDropdownSpan = document.querySelector(".dropdown-label");
let fallSemesterSpan = document.querySelector("#fall-semester");
let springSemesterSpan = document.querySelector("#spring-semester");
let winterTermSpan = document.querySelector("#winter-term");
let reportCardTableDiv = document.querySelector("#report-card-table");
// Supposed to use var and maybe const for some of the variables
// STILL NEED TO ADD MORE, COME BACK TO SEE WHICH ONES I NEED


/**
 * SOLUTIONS FOR STUDENT INFO DOM UPDATES
 */

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String} studentName - the name of the student
 */
function updateStudentName(studentName) {
  studentNameSpan.innerHTML = studentName;
}

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String|Number} studentGradeLevel - the grade level of the student
 */
function updateStudentGradeLevel(studentGradeLevel) {
  studentGradeLevelSpan.innerHTML = studentGradeLevel;
}

/**
 * Modify the report card to display the correct advisor from the lookup table above.
 *
 * @param {String} studentAdvisor - the advisor of the student
 */
function updateStudentAdvisor(studentAdvisor) {
  studentAdvisorSpan.innerHTML = studentAdvisor;
}

/**
 * Modify the report card to display the correct major from the lookup table above.
 *
 * @param {String} studentMajor - the major of the student
 */
function updateMajor(studentMajor) {
  studentMajorSpan.innerHTML = studentMajor;
}

/**
 * Modify the report card to display the correct graduation year from the lookup table above
 *
 * @param {Number} graduationyear - the year the student graduates
 */
function updateStudentGraduationYear(graduationYear) {
  studentGraduationYearSpan.innerHTML = graduationYear;
}

/**
 * Modify the img element using `setAttribute` so that that the src attribute
 * stores the link to your image.
 *
 * @param {String} url - a link to an image
 */
function updateStudentImage(imageUrl) {
  studentImageImg.setAttribute('src', imageUrl);
  // maybe can also try line below if above doesn't work...
}

/**
 * This function should run as soon as the page loads and update the correct student info
 */
function populateStudentInfo(studentInformationObject) {
  updateStudentName(studentInformationObject.name)
  updateStudentGradeLevel(studentInformationObject.grade)
  updateStudentAdvisor(studentInformationObject.advisor)
  updateMajor(studentInformationObject.major)
  updateStudentGraduationYear(studentInformationObject.graduationYear)
  updateStudentImage(studentInformationObject.imageUrl)
}

/**
 * SOLUTION FOR INNER HTML DOM UPDATES
 */

/**
 * This function should add a headers row to the report card table
 */
function addReportCardHeaders(reportCardTableElement) {
  // update the code here
  reportCardTableElement.innerHTML += `
  <div class="table-row table-header">
    <h4 class="code-col">Code</h4>
    <h4 class="name-col">Name</h4>
    <h4 class="sem-col">Semester</h4>
    <h4 class="cred-col">Credits</h4>
    <h4 class="lett-col">Letter</h4>
    <h4 class="pts-col">Points</h4>
  </div>
`
}

/**
 * This function should take in a single course and create a row with the
 * course code, course name, course semester, course credits, course letter grade, and course points columns.
 *
 * @param {Object} course
 * @param {Number} rowNum
 */
function addCourseRowToReportCard(reportCardTableElement, course, rowNum) {
  // update the code here with information about the course passed to this function

  reportCardTableElement.innerHTML += `
  <div class="table-row course-row row-${rowNum + 1} ${rowNum % 2 === 1 ? "odd" : "even"}">
    <h4 class="code-col">${course.code}</h4>
    <h4 class="name-col">${course.name}</h4>
    <h4 class="sem-col">${course.semester}</h4>
    <h4 class="cred-col"><span class="credit">${course.credits}</span> credits</h4>
    <h4 class="lett-col">${course.grade}</h4>
    <h4 id="gpa-${rowNum + 1}" class="pts-col">${gpaPointsLookup[course.grade]}</h4>
  </div>
  `
}

/**
 * This function should add HTML for the totals row in the report card.
 */
function addTotalsRow(reportCardTableElement) {
  // Compute Total credits using "cred-col"?
  // Compute Total points using "pts-col"?

  reportCardTableElement.innerHTML += `
  <div class="table-row totals even">
    <h4 class="code-col"></h4>
    <h4 class="name-col"></h4>
    <h4 class="sem-col">Totals:</h4>
    <h4 id="total-credits" class="cred-col"> ${addUpStudentCredits(reportCardTableElement)} credits </h4>
    <h4 class="lett-col"></h4>
    <h4 id="total-pts" class="pts-col">${addUpStudentPoints(reportCardTableElement)}</h4>
  </div>    
`
}

/**
 * This function should add HTML for the final row in the report card.
 */
function addGpaRow(reportCardTableElement) {
  reportCardTableElement.innerHTML += `
  <div class="table-row gpa odd">
    <h4 class="code-col"></h4>
    <h4 class="name-col"></h4>
    <h4 class="sem-col">GPA:</h4>
    <h4 class="cred-col"></h4>
    <h4 class="lett-col"></h4>
    <h4 id="gpa" class="pts-col"> tbd</h4>               
  </div>   
  `
}

/**
 * This is the primary function used to update the report card when the semester changes
 *
 * It should call the other functions responsible for creating the necessary HTML
 *
 */
function updateReportCard(reportCardTableElement, currentSemester) {
  // update the dropdown label
  updateDropdownLabel()
  // reset the report card table's inner html to an empty string
  if (reportCardTableElement) reportCardTableElement.innerHTML = ``

  // add your code here
  // now add the adders
  addReportCardHeaders(reportCardTableElement);
  // now add the rows
  const listOfSemester = studentData[currentSemester]
  listOfSemester.forEach((course, i) => addCourseRowToReportCard(reportCardTableElement, course, i))

  // call 2 functions 
  addTotalsRow(reportCardTableElement);
  addGpaRow(reportCardTableElement);
  calculateSemesterGpa(reportCardTableElement);


}

/**
 * SOLUTION FOR DROPDOWN EVENT HANDLERS
 */

/**
 * These two functions should be used to toggle the dropdown.
 *
 * If the dropdown classList contains the "closed" class, the 'openDropdown' function should remove it.
 * If the dropdown classList doesn't contain the "closed" class, 'closeDropdown' function should add it.
 */
function closeDropdown(dropdownElement) {
  // code goes here
  dropdownElement.classList.add("closed")
  console.log("Was supposed to HIDE the dropdown");
}

function openDropdown(dropdownElement) {
  // code goes here
  console.log("Entered to modify dropdown")
  if (dropdownElement.classList.contains("closed")) {
    // THIS IS NOT WORKING!! NOT SHOWING THE MENU, MAYBE SOMETHING WRONG WITH ME UPDATING REPORT CARD AFTER? NOT SURE
    dropdownElement.classList.remove("closed");
    console.log("Was supposed to SHOW the dropdown"); 
  }
  else {
    closeDropdown(dropdownElement);
  }
}

/**
 * This function should update the inner html of the dropdown label to be the current
 * value stored in the `semester` variable.
 *
 * 
 */
// I ADDED these 2 PARAMETERS
function updateDropdownLabel() {
  // code goes here
  semesterDropdownSpan.innerHTML = semester;
  
}

/**
 * This function should add the proper event listeners to the correct DOM elements
 * responsible for managing the state of the dropdown menu.
 *
 */
function addEventListeners(
  dropdownElement,
  dropdownButtonElement,
  reportCardTableElement,
  fallSemesterElement,
  springSemesterElement,
  winterTermElement
) {
  // Add an event listener for the dropdown button that calls the openDropdown function with the correct DOM element
  dropdownButtonElement.addEventListener('click', () => {modifyDropdownAndCallURC(dropdownElement, reportCardTableElement)});
  // Add 3 event listeners - one for the fall semester option, the spring semester option, and the winter term option

  fallSemesterElement.addEventListener('click', () => updateSemesterCallURCandCD("Fall Semester", reportCardTableElement, dropdownElement));
  springSemesterElement.addEventListener('click', () => updateSemesterCallURCandCD("Spring Semester", reportCardTableElement, dropdownElement));
  winterTermElement.addEventListener('click', () => updateSemesterCallURCandCD("Winter Term", reportCardTableElement, dropdownElement));

  // DEBUGGING WITH THIS NEXT LINE
  // document.querySelector('.btn').addEventListener("click", () => console.log("clicked"));

  // Each callback function one should update the `semester` variable,
  // call the `updateReportCard` function, and close the dropdown
}

function modifyDropdownAndCallURC(
  dropdownElement,
  reportCardTableElement
) {
  console.log("Entered modify first", semester);
  openDropdown(dropdownElement);
  // LINE below didn't make a difference if in the code or if commented out. Now I need help.
  // updateReportCard(reportCardTableElement, semester);
}

function updateSemesterCallURCandCD(
  newSemester,
  reportCardTableElement,
  dropdownElement
) {
  console.log("Entered", newSemester);
  semester = newSemester;
  updateReportCard(reportCardTableElement, semester);
  closeDropdown(dropdownElement);
}

/***************
   CALCULATIONS
****************/

/**
 * Use query selectors on the `reportCardTableElement` element
 * to access the credits the student has earned for each course.
 * Add them up and display the total in the proper location.
 *
 * It may be useful to check for the existence of certain elements
 * before updating the DOM.
 *
 */
function addUpStudentCredits(reportCardTableElement) {
  let total = 0
  let listOfCredits = reportCardTableElement.querySelectorAll(".credit");
  listOfCredits.forEach(item => {total += parseInt(item.innerHTML)});
  return total 
}

/**
 * Use query selectors on the `reportCardTableElement` element
 * to access the letter grades for each course and convert them to GPA points using
 * the `pointsLookup` object.
 *
 * That English Literature grade is keeping us from all A's! Let's see if we can't update that to an A-
 * since we definitely deserve it after a hard semester of work.
 *
 * Then perform a quick calculation and update the report card with the total points and
 * cumulative grade point average for the semester.
 *
 */

function addUpStudentPoints(reportCardTableElement) {
  let total = 0;
  // let listOfLetters = reportCardTableElement.querySelectorAll("#gpa- .pts-col");
  // listOfLetters.forEach(item => {total += parseInt(item.innerHTML)});
  return total;

}

function calculateSemesterGpa(reportCardTableElement) {
  // code goes here
  let gpaElement = reportCardTableElement.querySelector("#gpa");
  gpaElement = "Point Sum Needed"
}

window.onload = function () {
  // execute your functions here to make sure they run as soon as the page loads
  populateStudentInfo(studentInformation);
  updateReportCard(reportCardTableDiv, semester);
  addEventListeners(semesterDropdownDiv, semesterDropdownH2, reportCardTableDiv, fallSemesterSpan, springSemesterSpan, winterTermSpan)
}

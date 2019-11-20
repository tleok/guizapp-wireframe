'use strict';

//Create a array containing the questions as objects
const STATES = [
    { //Question 1
    question: "What is the Capitol of Wisconsin?", 
    allAnswers: ["Richmond", "Olympia", "Charleston", "Madison", "Cheyenne"],
    answer: "Madison"
    },
    { //Question 2
    question: "What is the Capitol of Alabama?", 
    allAnswers: ["Montgomery", "Anchorage", "Phoenix", "Little Rock", "Sacramento"],
    answer: "Montgomery"
    },
    { //Question 3
    question: "What is the Capitol of South Dakota?", 
    allAnswers: ["Pierre", "Nashville", "Austin", "Salt Lake City", "Montpelier"],
    answer: "Pierre"
    },
    { //Question 4
    question: "What is the Capitol of Delaware?", 
    allAnswers: ["Denver", "Hartford", "Dover", "Tallahassee", "Atlanta"],
    answer: "Dover"
    },
    { //Question 5
    question: "What is the Capitol of Oregon?", 
    allAnswers: ["Oklahoma City", "Salem", "Harrisburg", "Providence", "Columbia"],
    answer: "Salem"
    },
    { //Question 6
    question: "What is the Capitol of Illinois?", 
    allAnswers: ["Honolulu", "Boise", "Springfield", "Indianapolis", "Des Moines"],
    answer: "Springfield"
    },
    { //Question 7
    question: "What is the Capitol of North Dakota?", 
    allAnswers: ["Santa Fe", "Albany", "Raleigh", "Bismark", "Columbus"],
    answer: "Bismark"
    },
    { //Question 8
    question: "What is the Capitol of Maine?", 
    allAnswers: ["Topeka", "Frankfort", "Baton Rouge", "Augusta", "Annapolis"],
    answer: "Augusta"
    },
    { //Question 9
    question: "What is the Capitol of Nevada?", 
    allAnswers: ["Helena", "Lincoln", "Carson City", "Concord", "Trenton"],
    answer: "Carson City"
    },
    { //Question 10
    question: "What is the Capitol of Mississippi?", 
    allAnswers: ["Boston", "Lansing", "St. Paul", "Jackson", "Jefferson City"],
    answer: "Jackson"
    },
];
//---------------Array-END----------------

//Array to store the Score
const USERRESPONSES = [];
let currentQuestionIndex = 0;
//---------let questionComponents = STATES[currentQuestionIndex];

//function 'userSubmitClick' takes the start, submit, and next question clicks
function userSubmitClick() {
  $('#js-submission-form').on('click', '.js-submit-btn', event => {
    event.preventDefault();
    console.log('`userSubmitClick` ran');
    generateTheQuestion();
    incrementQuestionIndex();
    });
}
//This function generates the question
function generateTheQuestion() {
  console.log("`generateTheQuestion` ran");
  renderQuestion();
}
//Change the Question text to the current Question and invoke the answers
function renderQuestion(){
  console.log("`renderQuestion` ran")
  $('.js-theQuestion').text(STATES[currentQuestionIndex].question);
  renderAnswers();
}
function renderAnswers(){
  console.log("`renderAnswers` ran")
$('.js-theQuestion').text(STATES[currentQuestionIndex].question);
console.log(currentQuestionIndex);
}
//Increment the Questions to move through the questions
function incrementQuestionIndex(){
  currentQuestionIndex++;
  $('.js-currentQuestionNumber').text(currentQuestionIndex);
}
//Increment the Answers
function incrementAnswerIndex(){
  currentAnswerIndex++;
  STATES[currentQuestionIndex].allAnswers.forEach(function)
}
//Render Function onReady
function quizApp() {
  //generateTheQuestion();
  userSubmitClick();
}

$(quizApp);


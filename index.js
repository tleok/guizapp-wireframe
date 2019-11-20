'use strict';

//Create a array containing the questions as objects
const STATES = [
    { //Question 1
    question: "What is the Capital of Wisconsin?", 
    allAnswers: ["Richmond", "Olympia", "Charleston", "Madison", "Cheyenne"],
    answer: "Madison"
    },
    { //Question 2
    question: "What is the Capital of Alabama?", 
    allAnswers: ["Montgomery", "Anchorage", "Phoenix", "Little Rock", "Sacramento"],
    answer: "Montgomery"
    },
    { //Question 3
    question: "What is the Capital of South Dakota?", 
    allAnswers: ["Pierre", "Nashville", "Austin", "Salt Lake City", "Montpelier"],
    answer: "Pierre"
    },
    { //Question 4
    question: "What is the Capital of Delaware?", 
    allAnswers: ["Denver", "Hartford", "Dover", "Tallahassee", "Atlanta"],
    answer: "Dover"
    },
    { //Question 5
    question: "What is the Capital of Oregon?", 
    allAnswers: ["Oklahoma City", "Salem", "Harrisburg", "Providence", "Columbia"],
    answer: "Salem"
    },
    { //Question 6
    question: "What is the Capital of Illinois?", 
    allAnswers: ["Honolulu", "Boise", "Springfield", "Indianapolis", "Des Moines"],
    answer: "Springfield"
    },
    { //Question 7
    question: "What is the Capital of North Dakota?", 
    allAnswers: ["Santa Fe", "Albany", "Raleigh", "Bismark", "Columbus"],
    answer: "Bismark"
    },
    { //Question 8
    question: "What is the Capital of Maine?", 
    allAnswers: ["Topeka", "Frankfort", "Baton Rouge", "Augusta", "Annapolis"],
    answer: "Augusta"
    },
    { //Question 9
    question: "What is the Capital of Nevada?", 
    allAnswers: ["Helena", "Lincoln", "Carson City", "Concord", "Trenton"],
    answer: "Carson City"
    },
    { //Question 10
    question: "What is the Capital of Mississippi?", 
    allAnswers: ["Boston", "Lansing", "St. Paul", "Jackson", "Jefferson City"],
    answer: "Jackson"
    },
];
//---------------Array-END----------------

//Array to store the Score
const USERRESPONSES = [];
let currentQuestionIndex = 0;
let questionComponents = STATES[currentQuestionIndex];
//Declare Variable for the Answers
let answerIndex = 0;
//Testing the display of the question
console.log(questionComponents.question);
//testing the display of the Answers
console.log(questionComponents.allAnswers[answerIndex]);
//Step through the incrementing of the currentQuestionIndex

//function 'nextQuestion' that steps us through the STORE objects and increments the current place holder variable
  //This function needs to be initiated by the click of the user
  //This function maybe has a if statement to clarify the item clicked
    //In this if statement i will need to verify
function userClick() {
  $('#js-submission-form').on('click', '.js-submit-btn', event => {
    event.preventDefault();
    console.log('`userClick` ran');
    generateTheQuestion();
    incrementQuestionIndex();
    });
}

//This function generates the question
function generateTheQuestion() {
  console.log("`generateTheQuestion` ran");
  renderQuestion();
}
function renderQuestion(){
  console.log("`renderQuestionder` ran")
$('.js-theQuestion').text(questionComponents.question);
}
function incrementQuestionIndex(){
  currentQuestionIndex++;
  $('.js-currentQuestionNumber').text(currentQuestionIndex);
}
//Increment the Answers

//Render Function onReady
function quizApp() {
  //generateTheQuestion();
  userClick();
}

$(quizApp);










//----------------NOT-MINE----------------
// this generates the question and checks first to see if we are finished if not displays
function generateQuestion() {
  if (questionNumber < STORE.length) {
    return createThing(questionNumber);
  } else {
    $('.questionBox').hide();
    finalScore();
    $('.questionNumber').text(10);
  }//----------------NOT-MINE----------------
}
//----------------NOT-MINE----------------
//This function increments the allAnswers to add a button to each
//creates html for question form
function createThing(questionIndex) {
  let formMaker = $(`<form>
    <fieldset>
      <legend class="questionText">${STORE[questionIndex].question}</legend>
    </fieldset>
  </form>`)

  let fieldSelector = $(formMaker).find('fieldset');

  STORE[questionIndex].answers.forEach(function (answerValue, answerIndex) {
    $(`<label class="sizeMe" for="${answerIndex}">
        <input class="radio" type="radio" id="${answerIndex}" value="${answerValue}" name="answer" required>
        <span>${answerValue}</span>
      </label>
      `).appendTo(fieldSelector);
  });
  $(`<button type="submit" class="submitButton button"> Submit</button > `).appendTo(fieldSelector);
  return formMaker;
}//----------------NOT-MINE----------------


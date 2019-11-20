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
let quizStarted = false;
let isSubmittingAnswer = false;
//---------let questionComponents = STATES[currentQuestionIndex];

//function 'userStart' takes the start, submit, and next question
//assigns the click event handler on the start button
function initEventHandlers() {
  $('#js-submission-form').on('click', '.js-btn', event => {
    event.preventDefault();
    console.log('`userStart` ran');
    if(quizStarted === false){
      quizStarted = true;
      isSubmittingAnswer = true;
      showNextQuestion();
    } else if(isSubmittingAnswer === true){
        isSubmittingAnswer = false;
        showSummary();
    } else{
        if(currentQuestionIndex === STATES.length -1){
          //Show Final Summary
        } else{
          isSubmittingAnswer = true;
          showNextQuestion();
        }
    }
    });
}
//Show the Next question
function showNextQuestion() {
  renderQuestion();
  incrementQuestionIndex();
}
//show the Summary
function showSummary() {
  renderQuestion();
  incrementQuestionIndex();
}
//Show the Final Summary
function showFinalSummary() {
  generateTheQuestion();
  incrementQuestionIndex();
}
//Change the Question text to the current Question and invoke the answers
function renderQuestion(){
  console.log("`renderQuestion` ran")
  let questionComponents = STATES[currentQuestionIndex];
  $('.js-theQuestion').text(questionComponents.question);
  renderAnswers();
}
//Increment the Answers
function renderAnswers(){
  console.log("`renderAnswers` ran")
  STATES[currentQuestionIndex].allAnswers.forEach(function(answerValue, answerIndex){
    //$('.js-answers-list').children().remove();
    $(`<div class="answerContainer js-answerContainer" for="${answerIndex}">
        <input class="radio js-radio" type="radio" id="${answerIndex}" value="${answerValue}" name="answer" required>
        <span>${answerValue}</span>
       </div>`).appendTo('.js-answers-list');
  })
  $('.js-btn').text('Submit');
}
// function renderSummary
function renderSummary(){
  console.log("`renderSummary` ran")
  $('.js-answers-list').children().remove();
  $('.js-theQuestion').text(questionComponents.question);
  renderResult();
  $('.js-btn').text('Submit');
}
//function renderResult
function renderResult(){
  console.log("`renderSummary` ran")
  $('.js-answers-list').children().remove()
  let choice = $('input:checked');
  let currentAnswer = choice.val();
  let correctAnswer = STATES[currentQuestionIndex].answer;
  if (currentAnswer === correctAnswer) {
    rightAnswer();
  } else {
    wrongAnswer();
  }
  $('.js-btn').text('Next Question');
}
//Right Answer display
function rightAnswer() {
  $('.js-theQuestion').html(`<h3>Your answer is correct!</h3>`);
  incrementScore();
}
//wrong Answer display
function wrongAnswer() {
  $('.response').html(`<h3>Sorry that's the wrong answer...keep practicing.</h3>`);
}
//push the score to the array and to the display
function incrementScore() {
  USERRESPONSES.push(true);
  $('.js-currentScore').text(USERRESPONSES.length);
}

//Increment the Questions to move through the questions
function incrementQuestionIndex(){
  currentQuestionIndex++;
  $('.js-currentQuestionNumber').text(currentQuestionIndex);
}


//Render Function onReady
function quizApp() {
  initEventHandlers();
}

$(quizApp);

//-------------------------------------------------------------------
//-------------------------------------------------------------------
//-------------------------------------------------------------------
//function 'userNext' takes the start, submit, and next question
// function userNext() {
//   $('.js-btn-container').on('click', '.js-next-btn', event => {
//     event.preventDefault();
//     console.log('`userNext` ran');
//     $('.js-btn').hide();
//     generateTheQuestion();
//     incrementQuestionIndex();
//     });
// }
//function 'userSubmit' only submits when one is selected and creates the submit button
// function userSubmit() {
//   $('.js-btn-container').on('click', function(event) {
//     event.preventDefault();
//     console.log('`userSubmit` ran');
//     $('.js-submit-btn').hide();
//     $('.js-answers-list').children().remove();
//     let choice = $('input:checked');
//     let currentAnswer = choice.val();
//     let correctAnswer = STATES[currentQuestionIndex].answer;
//     if (currentAnswer === correctAnswer) {
//       rightAnswer();
//     } else {
//       wrongAnswer();
//     }
//     });
// }



//Not Sure where to put this yet ----
//$('.js-answers-list').children().remove();
//But it works to remove the items, i think it needs to go into the clicks.





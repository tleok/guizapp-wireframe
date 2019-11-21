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
  console.log("`renderQuestion` ran")
  let questionComponents = STATES[currentQuestionIndex];
  $('.js-theQuestion').text(questionComponents.question);
  //renderAnswers();
  STATES[currentQuestionIndex].allAnswers.forEach(function(answerValue, answerIndex){
    $(`<div class="answerContainer js-answerContainer" for="${answerIndex}">
          <input class="radio js-radio" type="radio" id="${answerIndex}" value="${answerValue}" name="answer" required>
          <span>${answerValue}</span>
        </div>`).appendTo('.js-answers-list');
  })
  $('.js-btn').text('Submit');
  $('.js-currentQuestionNumber').text(currentQuestionIndex +1);
}
function renderAnswers(){
  console.log("`renderAnswers` ran")

}
//show the Summary
function showSummary(){
  console.log("`showSummary` ran")
  $('.js-answers-list').children().remove()
  let questionComponents = STATES[currentQuestionIndex];
  let currentAnswer = $("input[type=radio][name=answer]:checked").val();
  let correctAnswer = questionComponents.answer;
  if (currentAnswer === undefined){
      console.log("Please Select Something")  
      console.log(currentAnswer);
      event.preventDefault();
      console.log(correctAnswer)
  } else if (currentAnswer === correctAnswer) {
    $('.js-theQuestion').text('Your answer is correct!');
    USERRESPONSES.push(true);
    $('.js-currentScore').text(USERRESPONSES.length);
        //Increment the currentIndex
        currentQuestionIndex++;
  } else {
    $('.response').html('Sorry that`s the wrong answer...keep practicing.');
        //Increment the currentIndex
        currentQuestionIndex++;
  }
  $('.js-btn').text('Next Question');

}
//--------------------------------------------------------------------------
//Show the Final Summary
function showFinalSummary() {
  generateTheQuestion();
}

//-----------------------
//Render Function onReady
//-----------------------
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





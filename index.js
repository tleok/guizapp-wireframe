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
let selectedAnswer = "";
let quizFinished = false;

//function 'userStart' takes the start, submit, and next question
//assigns the click event handler on the start button
function initEventHandlers() {
  $('#js-submission-form').on('submit', event => {
    event.preventDefault();
    console.log('`ButtonClicked` ran');
    if (quizFinished){
      window.location.reload();
    }
    if(quizStarted === false){
      quizStarted = true;
      isSubmittingAnswer = true;
      showNextQuestion();
    console.log('Quiz Started');
    } else if(isSubmittingAnswer === true){
        isSubmittingAnswer = false;
        showSummary();
        console.log('Show Summary');
        if(currentQuestionIndex === STATES.length){
          $('.js-btn').text('See Final Results');
        }
    } else{
        if(currentQuestionIndex === STATES.length){
          showFinalSummary();
          console.log('Showing Quiz Results');
          quizFinished = true;
        } else{
          isSubmittingAnswer = true;
          showNextQuestion();
          console.log('Showing Question ',currentQuestionIndex +1);
        }
    }
    });
    $( ".js-answers-list" ).on( "click", "input", function() { 
      selectedAnswer = $(".js-answers-list input:checked" ).val();
      console.log('User Selected ', selectedAnswer)
    });
}
//Show the Next question
function showNextQuestion() {
  console.log("`renderQuestion` ran")
  let questionComponents = STATES[currentQuestionIndex];
  $('.js-theQuestion').text(questionComponents.question);
  STATES[currentQuestionIndex].allAnswers.forEach(function(answerValue, answerIndex){
    //change div to a plain li
    $(`<div class="answerContainer js-answerContainer" for="${answerIndex}">
          <input class="radio js-radio" type="radio" id="${answerIndex}" value="${answerValue}" name="answer" required>
          <span>${answerValue}</span>
        </div>`).appendTo('.js-answers-list');
  })
  $('.js-btn').text('Submit');
  $('.js-currentQuestionNumber').text(currentQuestionIndex +1);
}
//show the Summary
function showSummary(){
  console.log("`showSummary` ran")
  $('.js-answers-list').children().remove()
  let questionComponents = STATES[currentQuestionIndex];
  let correctAnswer = questionComponents.answer;
  if (selectedAnswer === undefined){
      console.log("Please Select Something")  
      console.log(selectedAnswer);
      console.log(correctAnswer)
  } else if (selectedAnswer === correctAnswer) {
    $('.js-theQuestion').text('Your answer is correct!');
    USERRESPONSES.push(true);
    $('.js-currentScore').text(USERRESPONSES.length);
        //Increment the currentIndex
        currentQuestionIndex++;
        console.log("Here in correct")  
        $('.js-btn').text('Next Question');
  } else {
    $('.js-theQuestion').text('Sorry that`s the wrong answer...keep practicing.');
        //Increment the currentIndex
        currentQuestionIndex++;
        console.log("Here in wrong")
        console.log(selectedAnswer);  
        $('.js-btn').text('Next Question');
  }
}
//--------------------------------------------------------------------------
//Show the Final Summary
function showFinalSummary() {
  //initalize the finalscore
  let finalScore = USERRESPONSES.length;
  $('.js-theQuestion').text('Lets See how you did...')
  if(USERRESPONSES.length >= 8){
  $(`<div>
      <span>Great Work</span>
      <span>${finalScore}/10</span>
     </div>`).appendTo('.js-answers-list');
  } else if (USERRESPONSES.length >=5){
    //only use single quotes or double quotes. Decide Now
    //DOnt spend days trying to reverse engineer what they do. do what you know how to do. Look over material if you need.
    //Also either use ; or dont it doesnt look good to have inconsstencies
    //also make sure the code looks clean like the divs need to line up and everything needs proper indenting
    //also make sure you are consistent with spaces or no spaces lik after a function (){} or () {} not both
    //Quotes need to be meaningful. Dont just add them for debuging. Also NO console.logs.
    $(`<div>
      <span>Good Effort</span>
      <span>${finalScore}/10</span>
    </div>`).appendTo('.js-answers-list');
  } else {
    $(`<div>
    <span>Keep Practicing</span>
    <span>${finalScore}/10</span>
  </div>`).appendTo('.js-answers-list');
  }
  $('.js-btn').text('Restart Quiz');
}

//-----------------------
//Render Function onReady
//-----------------------
function quizApp() {
  initEventHandlers();
}

$(quizApp);


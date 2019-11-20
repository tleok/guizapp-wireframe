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

//function 'userSubmitClick' takes the start, submit, and next question
function userStart() {
  $('#js-submission-form').on('click', '.js-start-btn', event => {
    event.preventDefault();
    console.log('`userStart` ran');
    $('.js-start-btn').hide();
    generateTheQuestion();
    incrementQuestionIndex();
    });
}
//function 'userSubmit' only submits when one is selected and creates the submit button
function userSubmit() {
  $('.js-btn-container').on('submit', function(event) {
    event.preventDefault();
    console.log('`userSubmit` ran');
    //$('.js-submit-btn').hide();
    //$('.js-answers-list').children().remove();
    let choice = $('input:checked');
    let currentAnswer = choice.val();
    let correctAnswer = STATES[currentQuestionIndex].answer;
    if (currentAnswer === correctAnswer) {
      rightAnswer();
    } else {
      wrongAnswer();
    }
    });
}
//Right Answer display
function rightAnswer() {
  $('.js-theQuestion').html(
    `<h3>Your answer is correct!</h3>
    <button type="submit" class="next-btn js-next-btn" >Next Question</button>`
  );
  incrementScore();
}
//wrong Answer display
function wrongAnswer() {
  $('.response').html(
    `<h3>That's the wrong answer...</h3>
    <button type="submit" class="next-btn js-next-btn" >Next Question</button>`
  );
}
//push the score to the array and to the display
function incrementScore() {
  USERRESPONSES.push(true);
  $('.js-currentScor').text(USERRESPONSES.length);
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
//Not Sure where to put this yet ----
//$('.js-answers-list').children().remove();
//But it works to remove the items, i think it needs to go into the clicks.

//Increment the Questions to move through the questions
function incrementQuestionIndex(){
  currentQuestionIndex++;
  $('.js-currentQuestionNumber').text(currentQuestionIndex);
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
  $(`<button type="submit" class="submit-btn js-submit-btn" >Submit</button>`).appendTo('.js-btn-container');
}
//Render Function onReady
function quizApp() {
  userStart();
  userSubmit();
}

$(quizApp);


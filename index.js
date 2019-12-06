'use strict'

const STATES = [
    {
    question: 'What is the Capitol of Wisconsin?', 
    allAnswers: ['Richmond', 'Olympia', 'Charleston', 'Madison', 'Cheyenne'],
    answer: 'Madison'
    },
    {
    question: 'What is the Capitol of Alabama?', 
    allAnswers: ['Montgomery', 'Anchorage', 'Phoenix', 'Little Rock', 'Sacramento'],
    answer: 'Montgomery'
    },
    {
    question: 'What is the Capitol of South Dakota?', 
    allAnswers: ['Pierre', 'Nashville', 'Austin', 'Salt Lake City', 'Montpelier'],
    answer: 'Pierre'
    },
    {
    question: 'What is the Capitol of Delaware?', 
    allAnswers: ['Denver', 'Hartford', 'Dover', 'Tallahassee', 'Atlanta'],
    answer: 'Dover'
    },
    {
    question: 'What is the Capitol of Oregon?', 
    allAnswers: ['Oklahoma City', 'Salem', 'Harrisburg', 'Providence', 'Columbia'],
    answer: 'Salem'
    },
    {
    question: 'What is the Capitol of Illinois?', 
    allAnswers: ['Honolulu', 'Boise', 'Springfield', 'Indianapolis', 'Des Moines'],
    answer: 'Springfield'
    },
    {
    question: 'What is the Capitol of North Dakota?', 
    allAnswers: ['Santa Fe', 'Albany', 'Raleigh', 'Bismark', 'Columbus'],
    answer: 'Bismark'
    },
    {
    question: 'What is the Capitol of Maine?', 
    allAnswers: ['Topeka', 'Frankfort', 'Baton Rouge', 'Augusta', 'Annapolis'],
    answer: 'Augusta'
    },
    {
    question: 'What is the Capitol of Nevada?', 
    allAnswers: ['Helena', 'Lincoln', 'Carson City', 'Concord', 'Trenton'],
    answer: 'Carson City'
    },
    {
    question: 'What is the Capitol of Mississippi?', 
    allAnswers: ['Boston', 'Lansing', 'St. Paul', 'Jackson', 'Jefferson City'],
    answer: 'Jackson'
    },
]

const USERRESPONSES = []
let currentQuestionIndex = 0
let quizStarted = false
let isSubmittingAnswer = false
let selectedAnswer = ''
let quizFinished = false

function initEventHandlers(){
  $('#js-submission-form').on('submit', event =>{
    event.preventDefault()
    if (quizFinished){
      window.location.reload()
    }
    if(quizStarted === false){
      quizStarted = true;
      isSubmittingAnswer = true
      showNextQuestion()
    } else if(isSubmittingAnswer === true){
        isSubmittingAnswer = false
        showSummary()
        if(currentQuestionIndex === STATES.length){
          $('.js-btn').text('See Final Results')
        }
    } else{
        if(currentQuestionIndex === STATES.length){
          showFinalSummary()
          quizFinished = true
        } else{
          isSubmittingAnswer = true
          showNextQuestion()
        }
    }
    })
    $( '.js-answers-list' ).on( 'click', 'input', function(){ 
      selectedAnswer = $('.js-answers-list input:checked' ).val()
    })
}
//Show the Next question
function showNextQuestion(){
  console.log('`renderQuestion` ran')
  let questionComponents = STATES[currentQuestionIndex]
  $('.js-theQuestion').text(questionComponents.question)
  STATES[currentQuestionIndex].allAnswers.forEach(function(answerValue, answerIndex){
    $(`<div for='${answerIndex}'>
          <input class='radio js-radio' type='radio' id='${answerIndex}' value='${answerValue}' name='answer' required>
          <span>${answerValue}</span>
        </div>`).appendTo('.js-answers-list')
  })
  $('.js-btn').text('Submit')
  $('.js-currentQuestionNumber').text(currentQuestionIndex +1)
}

function showSummary(){
  console.log('`showSummary` ran')
  $('.js-answers-list').children().remove()
  let questionComponents = STATES[currentQuestionIndex]
  let correctAnswer = questionComponents.answer;
  if (selectedAnswer === correctAnswer) {
    $('.js-theQuestion').text('Your answer is correct!')
    USERRESPONSES.push(true);
    $('.js-currentScore').text(USERRESPONSES.length)
    currentQuestionIndex++;
    $('.js-btn').text('Next Question')
    $('.js-image').html(
      `<img src="stock_photos/lots_of_pins.jpg" alt="a map of the USA with lots of pins in different places" class="images" width="200px">`)
  } else {
    $('.js-theQuestion').text('Sorry that`s the wrong answer...keep practicing.')
        currentQuestionIndex++;
        $('.js-btn').text('Next Question')
  }
}

function showFinalSummary(){
  let finalScore = USERRESPONSES.length;
  $('.js-theQuestion').text('Lets See how you did...')
  if(USERRESPONSES.length >= 8){
  $(`<div>
      <span>Great Work</span>
      <span>${finalScore}/10</span>
     </div>`).appendTo('.js-answers-list')
  } else if (USERRESPONSES.length >=5){
    $(`<div>
      <span>Good Effort</span>
      <span>${finalScore}/10</span>
    </div>`).appendTo('.js-answers-list')
  } else {
    $(`<div>
    <span>Keep Practicing</span>
    <span>${finalScore}/10</span>
  </div>`).appendTo('.js-answers-list')
  }
  $('.js-btn').text('Restart Quiz')
}

function quizApp(){
  initEventHandlers()
}

$(quizApp)


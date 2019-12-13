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
      return
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
  $( '.js-answers-list' ).on( 'click', 'li', function(){ 
    //Apply the Same thing from lines 92 to 96 to the changing of color and border to the li als make sure that you actually need line 96
    //finish going through and make sure there are no console.logs
    //also make sure all the comments are removed.
    //add the things needed for the otherpart and resubmit then submit this one too.
    $('.js-answers-list > li > input').each(function(){
      $(this).removeAttr('checked')
    })
    $(this).children('input').attr('checked', true)
    selectedAnswer = $('.js-answers-list input:checked' ).val()
  })
}
function showNextQuestion(){
  let questionComponents = STATES[currentQuestionIndex]
  $('.js-theQuestion > p').text(questionComponents.question)
  $('.js-theQuestion > img').remove()
  STATES[currentQuestionIndex].allAnswers.forEach(function(answerValue, answerIndex){
    $(`<li for='${answerIndex}'>
          <input class='radio js-radio' type='radio' id='${answerIndex}' value='${answerValue}' name='answer' required>
          <span>${answerValue}</span>
       </li>`).appendTo('.js-answers-list')
  })
  $('.js-btn').text('Submit')
  $('.js-currentQuestionNumber').text(currentQuestionIndex +1)
}

function showSummary(){
  $('.js-answers-list').children().remove()
  let questionComponents = STATES[currentQuestionIndex]
  let correctAnswer = questionComponents.answer;
  if (selectedAnswer === correctAnswer) {
    $('.js-theQuestion > p').text('Your answer is correct!')
    USERRESPONSES.push(true);
    $('.js-currentScore').text(USERRESPONSES.length)
    currentQuestionIndex++;
    $('.js-btn').text('Next Question')
    $(`<img src="stock_photos/lots_of_pins.jpg" alt="a map of the USA with lots of pins in different places" class="images js-images">`).insertAfter('.js-theQuestion > p')
  } else {
      $('.js-theQuestion > p').text('Sorry that`s the wrong answer...keep practicing.')
      currentQuestionIndex++;
      $('.js-btn').text('Next Question')
      $(`<img src="stock_photos/lots_of_maps.jpg" alt="a pile of paper maps" class="images js-images">`).insertAfter('.js-theQuestion > p')
  }
}

function showFinalSummary(){
  let finalScore = USERRESPONSES.length;
  $('.js-theQuestion > p').text('Lets See how you did...')
  $('.js-theQuestion > img').attr('src', 'stock_photos/some_pins.jpg')
  $('.js-theQuestion > img').attr('alt', 'a US map with some pins in it showing different places')
  if(USERRESPONSES.length >= 8){
    $(`<div>
        <p>${finalScore}/10</p>
        <p>Great Work</p>
      </div>`).appendTo('.js-theQuestion')
  } else if (USERRESPONSES.length >=5){
      $(`<div>
          <p>${finalScore}/10</p>
          <p>Good Effort</p>
        </div>`).appendTo('.js-theQuestion')
  } else {
      $(`<div>
          <p>${finalScore}/10</p>
          <p>Keep Practicing</p>
        </div>`).appendTo('.js-theQuestion')
    }
  $('.js-btn').text('Restart Quiz')
}

function quizApp(){
  initEventHandlers()
}

$(quizApp)


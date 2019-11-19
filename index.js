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

//Array to store the Score
const USERRESPONSES = [];
let currentQuestionIndex = 0;
let questionComponents = STATES[currentQuestionIndex];

console.log(questionComponents.question);
//Here I will start the new psudocode to be exicuted properly, I like the stuff I have before this  but not really the stuff I have after this.

//function 'nextQuestion' that steps us through the STORE objects and increments the current place holder variable
  //This function needs to be initiated by the click of the user
  //This function maybe has a if statement to clarify the item clicked
    //In this if statement i will need to verify
function nextQuestion() {
  $('#submission-form').on('click', '.submit-btn', event => {
    event.preventDefault();
    console.log('`nextQuestion` ran');
    generateTheQuestion();
    currentQuestionIndex++;
    console.log(questionComponents.question);
    });
}

//This function generates the question
function generateTheQuestion(theQuestion) {
  console.log("Generate the Question");
  console.log(currentQuestionIndex);
  console.log(questionComponents.question);
}

//This function increments the allAnswers to add a button to each


//------------------------------------------------------------------------------
//Function 'generateQuestion' that creates the HTML elements for the question
function generateQuestion(currentQuestion) {
    /*return    `
    <p>${questionComponents.question}</p>
            <li data-item-id="${currentQuestion.question}">
                <div class="answer-selection">
                    <button class="check-box">-
                    </button>
                    <span class="capitol">${currentQuestion.allAnswers}</span>
                </div>
            </li>`;*///Use a foreach array method to assign a button to each answer
            console.log(questionComponents.question)
  }

//Check answer
/*function checkAnswer(rightAnswer) {
    console.log(`Checking "${rightAnswer}" from STATES`);
    const questionIndex = STATES.findIndex(question => question.question === questionIndex);
    STATES.//invoke the change of the boolean to true or leave  it false
  };
*/

//Function 'userClicks' that takest users click and verifies if it is the right answer.
    //This function maybe has a if statement to clarify the item clicked
        //In this if statement i will need to verify if it is clicking a radio button to decide the answer then invoke the correct -
        //answer function that will change the variable that is a global variable for right or wrong answers and also invoke the result page
function handleStart() {
  $('#submission-form').on('click', '.submit-btn', event => {
    event.preventDefault();
    console.log('`handleSubmit` ran');
    });
}
//Render Function onReady
function quizApp() {
    //generateQuestion();
    nextQuestion();
}

$(quizApp);
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

//Function 'generateQuestion' that creates the HTML elements for the question
function generateQuestion(que) {
    return `
    <p>${que.question}</p>
    <form id="submission-form">
        <ul class="answers-list">
            <li>
                <div class="answer-selection">
                    <button class="check-box">-
                    </button>
                    <span class="capitol">${que.allAnswers}</span>
                </div>
            </li>
        </ul>
            <button type="button" class="submit-btn" >Submit</button>
    </form>`;
  }

//Function to check if the user got the answer correct

//function 'nextQuestion' that steps us through the STORE objects and increments the current place holder variable

//Function 'userClicks' that takest users click and verifies if it is the right answer.

//Render Function onReady
function quizApp() {
    generateQuestion();
}

$(quizApp);
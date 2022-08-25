var startButton = document.querySelector('#start');
var timer = document.querySelector('.timerCounter');
var question = document.querySelector('#question');
var highScores = document.querySelector('#high-scores');
var finalScoreText = document.querySelector('.finalScore');
var initials = document.querySelector('#initials')
var shuffledQuestions = randomizeQuestions();


var secondsLeft = 60;
var currentScore = 0;
var currentQuestion = 0;
var finalScore;

var questionsArray = [

    {
        question: 'Which of the following instructions is correct to change the background color of the page?',
        answersArray: [
            {choice: 'document.body.background = "red"', correct: false},
            {choice: 'document.body.color = "red"', correct: false},
            {choice: 'document.body.style.background = "red"', correct: true}, // Correct
            {choice: 'document.body.style.color = "red"', correct: false}
        ]
    },

    {
        question: 'How do you link an external Javascript file in HTML?',
        answersArray: [
            {choice: '<script src="filename.js"></script>', correct: true}, // Correct
            {choice: '<script rel="filename.js"></script>', correct: false},
            {choice: '<script url="filename.js"></script>', correct: false},
            {choice: '<script href="filename.js"></script>', correct: false}
        ]
    },

    {
        question: 'To get a value from user input, we use which box?',
        answersArray: [
            {choice: 'confirm', correct: false},
            {choice: 'prompt', correct: true}, //Correct
            {choice: 'alert', correct: false},
            {choice: 'None of the above', correct: false}
        ]
    },

    {
        question: 'What does JSON stand for?',
        answersArray: [
            {choice: 'JavaScript Oriented Notation', correct: false},
            {choice: 'JavaScript Oreo Notation', correct: false},
            {choice: 'JavaScript Online Notation', correct: false},
            {choice: 'JavaScript Object Notation', correct: true} // Correct
        ]
    }
]

// First, functions for the first page!
// The start button will need to take the user to the quiz.

function startQuiz() {
    console.log('Started');
    document.getElementById('home').style.display="none";
    document.getElementById('game').style.display='block';
    
    startTimer();
    getNewQuestion();
}
startButton.addEventListener('click', startQuiz)

function startTimer() {
    timer.textContent = secondsLeft;
    let timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 100)
}

var choiceOne = document.querySelector('#choice-1')
var choiceTwo = document.querySelector('#choice-2')
var choiceThree = document.querySelector('#choice-3')
var choiceFour = document.querySelector('#choice-4')

function getNewQuestion() {
    currentQuestion++;
    if (currentQuestion === shuffledQuestions.length) {
        secondsLeft = 0;
        endGame();
    }
    else {
        question.textContent = shuffledQuestions[currentQuestion].question;
        
        let choices = [choiceOne, choiceTwo, choiceThree, choiceFour];
        let i = 0;
        choices.forEach(element => {
            element.textContent = shuffledQuestions[currentQuestion].answersArray[i].choice;
            i++
        }, i);
    };
};






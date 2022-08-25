var startButton = document.querySelector('#start');
var timer = document.querySelector('.timerCounter');
var scoresButton = document.querySelector('#high-scores');
var question = document.querySelector('#question');
var choices = Array.from(document.querySelector('.choice-text'));
var finalScore = document.querySelector('.finalScore');
var initials = document.querySelector('#initials')

var currentQuestion = {};
var availableQuestions = [];
var acceptingAnswers= true;
var secondsLeft = 60;

const questionsArray = [

    {
        question: ''
        answersArray: {
            choice1: '',
            choice2: '',
            choice3: '',
            choice4: '',
            answer: ,
        }
    }

    {
        question: ''
        answersArray: {
            choice1: '',
            choice2: '',
            choice3: '',
            choice4: '',
            answer: ,
        }
    }

    {
        question: ''
        answersArray: {
            choice1: '',
            choice2: '',
            choice3: '',
            choice4: '',
            answer: ,
        }
    }

    {
        question: ''
        answersArray: {
            choice1: '',
            choice2: '',
            choice3: '',
            choice4: '',
            answer: ,
        }
    }

    
]

// First, functions for the first page!
// The start button will need to take the user to the quiz.
// The high scores button will need to take the user to HS page

function startQuiz() {
    document.getElementById('home').style.display="none";
    document.getElementById('game').style.display='block';

    // add start quiz function here
}

startButton.addEventListener('click', startQuiz)






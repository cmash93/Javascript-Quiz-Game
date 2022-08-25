var startButton = document.querySelector('#start');
var timer = document.querySelector('.timerCounter');
var question = document.querySelector('.question');
var choices = Array.from(document.querySelector('.choice-text'));
var highScores = document.querySelector('#high-scores');
var finalScoreText = document.querySelector('.finalScore');
var initials = document.querySelector('#initials')


var secondsLeft = 60;
var currentScore = 0;
var currentQuestion = -1;
var finalScore;


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

function getNewQuestion() {
    currentQuestion
}

// function selectAnswer() {

// }






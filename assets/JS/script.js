var startButton = document.querySelector('#start');
var timer = document.querySelector('.timerCounter');
var question = document.querySelector('#question');
var choiceEl = document.querySelectorAll('.choice-container')
var highScores = document.querySelector('#high-scores');
var finalScoreText = document.querySelector('.finalScore');
var initials = document.querySelector('#initials')

var secondsLeft = 60;
var currentScore = 0;
var currentQuestion = 0;
var finalScore;

function startQuiz() {
    console.log('Started');
    document.getElementById('home').style.display="none";
    document.getElementById('game').style.display='block';
    
    startTimer();
    displayQuestions();
}
startButton.addEventListener('click', startQuiz)

function startTimer() {
    timer.textContent = secondsLeft;
    let timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if (secondsLeft <= 0 || currentQuestion === questions.length) {
            clearInterval(timerInterval);
            // endGame();
        }
    }, 10000)
}

var choiceOne = document.querySelector('#choice-1')
var choiceTwo = document.querySelector('#choice-2')
var choiceThree = document.querySelector('#choice-3')
var choiceFour = document.querySelector('#choice-4')
let choices = [choiceOne, choiceTwo, choiceThree, choiceFour];

function displayQuestions() {
    if (currentQuestion < questions.length) {
        question.innerHTML = questions[currentQuestion].questionText;
    }
    
    for (let i = 0; i < questions[currentQuestion].multiChoice.length; i++) {
        choices.forEach(element => {
            element.textContent = questions[currentQuestion].multiChoice[i];
            i++;
            element.setAttribute('data-id', i)
            element.addEventListener('click', function(event) {
                event.stopPropagation();
                checkAnswer()
                console.log(element)
            });
        }, i);
    }
};

function checkAnswer(event) {
    if (choices.innerText === questions[currentQuestion].answer) {
        console.log(answer)
        currentScore = currentScore + 25
    }
    else {
        if(secondsLeft > 10) {
            secondsLeft = secondsLeft - 10;
        }
        else {
            secondsLeft = 0;
            // endQuiz()
        }
    }
    if (currentQuestion < questions.length) {
        currentQuestion++;
        displayQuestions();
    }
    else {
        // endQuiz()
    }
}
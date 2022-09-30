var startBtn = document.querySelector('#start')
var timer = document.querySelector(".timer");
var viewScoresBtn = document.querySelector("#high-scores")
var finalScoreEl = document.querySelector(".score");

var secondsLeft = 60;
var currentQuestion = 0;
var score = 0
var finalScore;

let questions = [
    {
      num: 1,
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet"
      ]
    },

    {
      num: 2,
      question: 'Which of the following instructions is correct to change the background color of the page?',
      answer: 'document.body.style.background = "red"',
      options: [
        'document.body.background = "red"', 
        'document.body.color = "red"', 
        'document.body.style.background = "red"', 
        'document.body.style.color = "red"'
      ]
    },
  
    {
      num: 3,
      question: 'How do you link an external Javascript file in HTML?',
      answer: '3',
      options: [
        '1', 
        '2', 
        '3', 
        '4'
      ]
    },
  
    {
      num: 4,
      question: 'Which of the following instructions is correct to change the background color of the page?',
      answer: 'prompt',
      options: [
        'confirm', 
        'prompt', 
        'alert', 
        'box'
      ]
    },
  
    {
      num: 5,
      question: 'What does JSON stand for?',
      answer: 'JavaScript Object Notation',
      options: [
        'JavaScript Oriented Notation', 
        'JavaScript Oreo Notation', 
        'JavaScript Online Notation', 
        'JavaScript Object Notation'
      ]
    },
  ];

function startQuiz() {
    console.log('Started')
    startTimer();
    showQuestions();
}
startBtn.addEventListener("click", startQuiz);


function startTimer() {
    timer.textContent = secondsLeft;

    let timerInterval = setInterval(function(){
        secondsLeft--;
        timer.textContent = secondsLeft;
        if (secondsLeft <= 0 || currentQuestion === questions.length){
            clearInterval(timerInterval);
            // captureScore();
        }
    }, 1000);
}


// getting questions and options from array

function showQuestions() {

    const questionsDiv = document.querySelector('.questions')

    if (currentQuestion <= questions.length) {
        let createdQuestion = document.createElement('p');
        createdQuestion.innerHTML = questions[currentQuestion].question;
        questionsDiv.append(createdQuestion)

        for (let i = 0; i < questions[currentQuestion].options.length; i++){
            let choiceBtn = document.createElement('button');
            choiceBtn.innerHTML = questions[currentQuestion].options[i]
            choiceBtn.setAttribute('data-id', i)
            console.log(choiceBtn.innerHTML)
            choiceBtn.addEventListener('click', function(event){
                if(choiceBtn.innerText === questions[currentQuestion].answer){
                    score += 20;
                }
                else {
                    secondsLeft = secondsLeft - 10;
                }

                createdQuestion.innerHTML = '';

                if (currentQuestion === questions.length){
                    return;
                }
                else {
                    currentQuestion++;
                    showQuestions();
                }
            })
            questionsDiv.append(choiceBtn)
        }
    }
}
console.log(questions[currentQuestion])
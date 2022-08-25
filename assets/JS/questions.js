var questionsArray = [

    {
        question: 'Which of the following instructions is correct to change the background color of the page?',
        answersArray: [
            {choice1: 'document.body.background = "red"', correct: false},
            {choice2: 'document.body.color = "red"', correct: false},
            {choice3: 'document.body.style.background = "red"', correct: true}, // Correct
            {choice4: 'document.body.style.color = "red"', correct: false}
        ]
    },

    {
        question: 'How do you link an external Javascript file in HTML?',
        answersArray: [
            {choice1: '<script src="filename.js"></script>', correct: true}, // Correct
            {choice2: '<script rel="filename.js"></script>', correct: false},
            {choice3: '<script url="filename.js"></script>', correct: false},
            {choice4: '<script href="filename.js"></script>', correct: false}
        ]
    },

    {
        question: 'To get a value from user input, we use which box?',
        answersArray: [
            {choice1: 'confirm', correct: false},
            {choice2: 'prompt', correct: true}, //Correct
            {choice3: 'alert', correct: false},
            {choice4: 'None of the above', correct: false}
        ]
    },

    {
        question: 'What does JSON stand for?',
        answersArray: [
            {choice1: 'JavaScript Oriented Notation', correct: false},
            {choice2: 'JavaScript Oreo Notation', correct: false},
            {choice3: 'JavaScript Online Notation', correct: false},
            {choice4: 'JavaScript Object Notation', correct: true} // Correct
        ]
    }
]

function getNewQuestion() {
    let questionsClone = questionsArray;
    for (let i = 0; i < questionsClone.length; i++) {

        let answersArray = questionsClone[i].answersArray;
        answersArray.sort(() => {
            return (Math.floor(Math.random() * 3) - 1);
        });
    }

    questionsArray = questionsArray.sort(() => {
        return (Math.floor(Math.random() * 3) - 1);
    });

    return questionsArray;
}
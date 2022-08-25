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

function randomizeQuestions() {
    let questionsClone = questionsArray;
    for (let i = 0; i < questionsClone.length; i++) {

        let answersArray = questionsClone[i].answersArray;
        answersArray.sort(() => {
            return (Math.floor(Math.random() * 3) - 1);
        });
    }

    questionsClone = questionsClone.sort(() => {
        return (Math.floor(Math.random() * 3) - 1);
    });

    return questionsClone;
}
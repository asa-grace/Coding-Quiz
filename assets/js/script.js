var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('container')
var startForm = document.getElementById('form-group')

startButton.addEventListener("click", startQuiz)

function startQuiz() {
    console.log('started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    
}

function selectAnswer() {

}

var questions = [
    {
        question: 'JavaScript arrays are used to store____?',
        answers: [
            { text: 'multiple values into a single variable', correct: true },
            { text: 'Multiple values in a single function', correct: false },
            { text: 'variables enclosed in {} ', correct: false },
            { text: 'Store boolean inside the <div> ', correct: false }
        ]
    },
    {
        question: 'The condition of an if/and statement is enclosed with____.',
        answers: [
            { text: ' "" ', correct: false },
            { text: ' {} ', correct: true },
            { text: ' <> ', correct: false },
            { text: ' () ', correct: false }
        ]
    },
    {
        question: 'Generate a random number using what syntax?',
        answers: [
            { text: 'Math.floor(Math.random())', correct: true },
            { text: 'Math.random(Math.floor())', correct: false },
            { text: '(Math.floor)(Math.random())', correct: false },
            { text: '(Math.random)(Math.floor())', correct: false }
        ]
    },
    {
        question: 'What would you use to call a function',
        answers: [
            { text: 'call', correct: false },
            { text: 'return', correct: true },
            { text: 'summon', correct: false },
            { text: 'bring forth please', correct: false }
        ]
    },
]


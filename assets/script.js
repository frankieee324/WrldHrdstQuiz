var myQuestions = document.getElementById("#questions")
var quizResults = document.getElementById("results")
var submitBttn = document.getElementById("submit")

function buildquiz() {}

function showResults(){}

buildquiz();

submitBttn.addEventListener('click', showResults)

var quizQuestions = [
    {
        question: "Commonly used data types do NOT include",
        answers: {
            a: "string",
            b: "booleans", 
            c: "alerts",
            d: "numbers",
        },
        correctAnswer: "a"
    },
    {
        question: "The condition in an if/else statements is enclosed with ____.",
        answers: {
            a: "quotes",
            b: "curly brackets",
            c: "parenthesis",
            d: "square brackets",
        },
        correctAnswer: "c"
    },
    {
        question: "Arrays in Javascript can be used to store ____.",
        answers:{
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above",
        },
        correctAnswer: "d"
    },
    {
        question: "String values must ge enclosed within ____ when being assigned to variables",
        answers:{
            a: "commas",
            b: "curly brackets",
            c: "quotes",
            d: "parenthesis",
        },
        correctAnswer: ""
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is",
        answers:{
            a: "Javascript",
            b: "terminal/bash",
            c: "for loops",
            d: "console log",
        },
        correctAnswer: ""

    },
]
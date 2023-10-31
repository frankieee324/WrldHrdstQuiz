 var startButton = document.querySelector("#startbutton")
var startcontainer = document.querySelector(".container")
var question= document.querySelector("#question")
// var fOption = document.querySelector("#option1")
// var sOption = document.querySelector("#option2")
// var tOption = document.querySelector("#option3")
// var fOption = document.querySelector("#option4")
var questiontext = document.querySelector("#questiontext")

var timeEl = document.querySelector("#time");
var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}
var currentIndex = 0;

var testQuestions = [
    {
        question: "Commonly used data types do NOT include:",
        choices: ["string, booleans, alerts, numbers"],
        correct: "1"

    },
    {
        text: "The condition in an if/else statement is enclosed with ___.",
        choices: ["quotes, curly brackets, parenthesis, square brackets"],
        correct: "1",

    },
    {
        text: "currentQuestion.choicess in JavaSript can be used to store ___.",
        choices: ["numbers and strings, other currentQuestion.choicess, booleans, all of the above"],
        correct: "1",
    }
]


startButton.addEventListener("click", (event) => {
    event.preventDefault()
    console.log({ target: event.target })
    event.target.setAttribute("hidden", "true")
    showQuestion()
})

function showQuestion() {
    var currentQuestion = questions[currentIndex]
    
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        const element = currentQuestion.choices[i];
        console.log(element)
    }
}

function clickanswer() {
    currentIndex++;
    showQuestion();
    
}

// fOption.addEventListener("click", clickanswer)
// sOption.addEventListener("click", clickanswer)
// tOption.addEventListener("click", clickanswer)
// fOption.addEventListener("click", clickanswer)

// questiontext.textContent= questions[currentIndex].text
//fOption.textContent= questions[currentIndex].choices[0]
//sOption.textContent= questions[currentIndex].choices[1]
//tOption.textContent= questions[currentIndex].choices[2]
//fOption.textContent= questions[currentIndex].choices[3]

function startButton(event){
question.style.display= "block"
startcontainer.style.display= "none"

//showQuestion()
//show choices
}
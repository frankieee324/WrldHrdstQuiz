# Note Taker



## Description

You have 30seconds to answer 10 code-related questions,
Every time you answer correctly, you earn 10pts, every time you answer incorrectly, the timer loses 5sec.
When the timer reaches 0, it is Game over. You then have the option to input your name into the High scoreboard and then play again.
The High score board is using Local Storage for Data persistence.

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

[Deployed Link](https://frankieee324.github.io/WrldHrdstQuiz/)

## Code
```javascript
scoreList.addEventListener("submit", function(event) {

  event.preventDefault();
  var name = document.getElementById("name");
  stores = storedScore.push(score + "pts -- " + name.value);
  localStorage.setItem("score", JSON.stringify(storedScore));
  scoreList.innerHTML = "";
  highScore();

});
```
In the code snippet above, you can see the function that I used to store the user’s Score whenever they hit the submit button.
I then call the highScore function that will update the board with the new data.



## Credits

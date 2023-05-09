var timer = document.getElementById("timer");
var score = 0;
const houseRecord = [];
const houseName = [];

// High Score Check. Gets the high score data if there is any from the localstorage and adds it to the modal. 
function HSCheck() {
  var tempscore = JSON.parse(localStorage.getItem("HighScores"));
  var tempname = JSON.parse(localStorage.getItem("Players"));
  for (i = 0; i < 10; i++) {
    if (tempscore == null || tempname == null) {
      houseRecord[i] = 5000;
      houseName[i] = "AAA";
    } else {
      houseRecord[i] = tempscore[i];
      houseName[i] = tempname[i];
    }
  }
  document.getElementById("HSL").innerHTML =
    "<li>1: " +
    houseName[0] +
    " " +
    houseRecord[0] +
    "</li><li>2: " +
    houseName[1] +
    " " +
    houseRecord[1] +
    "</li><li>3: " +
    houseName[2] +
    " " +
    houseRecord[2] +
    "</li><li>4: " +
    houseName[3] +
    " " +
    houseRecord[3] +
    "</li><li>5: " +
    houseName[4] +
    " " +
    houseRecord[4] +
    "</li><li>6: " +
    houseName[5] +
    " " +
    houseRecord[5] +
    "</li><li>7: " +
    houseName[6] +
    " " +
    houseRecord[6] +
    "</li><li>8: " +
    houseName[7] +
    " " +
    houseRecord[7] +
    "</li><li>9: " +
    houseName[8] +
    " " +
    houseRecord[8] +
    "</li><li>10: " +
    houseName[9] +
    " " +
    houseRecord[9] +
    "</li>";
}
HSCheck();

const questions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: `John 'Java' Script `,
      b: `Brendan Eich`,
      c: `John McAfee`,
      d: `Dennis Ritchie`,
    },
    correct: "b",
  },
  {
    question: `Which corporation commissioned the creation of JavaScript?`,
    answers: {
      a: `Netscape`,
      b: `Apple`,
      c: `Microsoft`,
      d: `Compaq`,
    },
    correct: "a",
  },
  {
    question: `Which corporation owns the "Javascript" trademark?`,
    answers: {
      a: `Apple`,
      b: `AOL`,
      c: `Oracle`,
      d: `Microsoft`,
    },
    correct: "c",
  },
  {
    question: `Why is it called javaScript?`,
    answers: {
      a: `After a merger between netScape and Sun, the company that would become Oracle, they renamed it to javaScript to
         reflect their intent to make a complimentary scripting language to go with Java.`,
      b: `Java was a popular language at the time, and netScape wanted to leech off their popularity.`,
      c: `It's just coincidence.`,
      d: `It's a recycled project for an earlier attempt to make a scripting language based on java.`,
    },
    correct: "a",
  },
  {
    question: `What is JavaScript?`,
    answers: {
      a: `A peer-to-peer file sharing protocall.`,
      b: `A type of slang internet addicts use.`,
      c: `The network layer communications protocol in the Internet protocol suite for relaying datagrams across network boundaries.`,
      d: `A programming language`,
    },
    correct: "d",
  },
  {
    question: `Which of the following is a primitive data type in JavaScript?`,
    answers: {
      a: `Object`,
      b: `Boolean`,
      c: `Function`,
      d: `Array`,
    },
    correct: "b",
  },
  {
    question: `What is the purpose of the "use strict" directive in JavaScript?`,
    answers: {
      a: `To enable strict mode, which enforces more stringent parsing and error handling rules.`,
      b: `To enable debugging mode, which allows for more detailed logging and error reporting.`,
      c: `To declare that the code should be executed in strict mode.`,
      d: `To disable certain features in JavaScript that are no longer recommended.`,
    },
    correct: "c",
  },
  {
    question: `What is the difference between "==" and "===" in JavaScript?`,
    answers: {
      a: `"==" compares values without regard to type, while "===" compares both value and type.`,
      b: `"==" compares values and types, while "===" compares only values.`,
      c: `"==" is used for assignment, while "===" is used for comparison.`,
      d: `There is no difference between "==" and "===", they are interchangeable.`,
    },
    correct: "a",
  },
  {
    question: `What is a closure in JavaScript?`,
    answers: {
      a: `A way to create private variables and methods in an object`,
      b: `A way to group related code and data into a single unit`,
      c: `A way to execute a block of code multiple times`,
      d: `A function that can access and manipulate variables in its outer scope, even after the outer function has returned`,
    },
    correct: "d",
  },
  {
    question: `What is an IIFE in JavaScript?`,
    answers: {
      a: `A type of loop used for iterating over arrays and objects`,
      b: `An object that contains key-value pairs, where the keys are strings and the values can be of any data type`,
      c: `A function that is immediately invoked upon creation`,
      d: `A method for concatenating strings`,
    },
    correct: "c",
  },
  {
    question: `What is a JavaScript injection exploit?`,
    answers: {
      a: `A virus that uses JavaScript to download itself to your computer when you visit unsafe websites using JavaScript.`,
      b: `A security vulnerability that allows an attacker to inject malicious code into a website.`,
      c: `A way to inject JavaScript code into your morning coffee.`,
      d: `A tool to inject extra features into your website.`,
    },
    correct: "b",
  },
  {
    question: `Which of the following is an example of a JavaScript injection exploit?`,
    answers: {
      a: `Cross-site scripting (XSS)`,
      b: `Code injection`,
      c: `SQL injection`,
      d: `All of the above`,
    },
    correct: "d",
  },
  {
    question: `What is the best way to prevent JavaScript injection exploits?`,
    answers: {
      a: `Use a strong password`,
      b: `Use a web application firewall`,
      c: `Never trust user input`,
      d: `Use an antivirus program`,
    },
    correct: "c",
  },
  {
    question: `What was the first version of JavaScript to support regular expressions?`,
    answers: {
      a: `JavaScript 1.0`,
      b: `JavaScript 1.2`,
      c: `JavaScript 1.5`,
      d: `JavaScript 2.0`,
    },
    correct: "b",
  },
  {
    question: `In his 2006 song "White & Nerdy", "Weird Al" Yankovic claimed to be fluent in JavaScript as well as one other language. Which language was that?`,
    answers: {
      a: `C++`,
      b: `Spanish`,
      c: `Python`,
      d: `Klingon`,
    },
    correct: "d",
  },
];
const Question = document.getElementById("Bigtext");
const userScore = document.getElementById("userscore");
const cardcontainer = document.getElementById("common");
const startbutton = document.getElementById("button");
const reset = document.getElementById("reset");

// Starts the quiz by running the timer and the quiz. 
startbutton.addEventListener("click", function (event) {
  event.preventDefault();
  ticker();
  document.getElementById("common").innerText = "";
  document.getElementById("buttonshouse").innerHTML = "";
  repaint();
});

async function ticker() {
  timeclock = 60;
  localStorage.setItem("score", 0);
  setInterval(function () {
    timeclock--;
  }, 1000);
  function updateclock() {
    if (timeclock >= 0) {
      timer.textContent = `Time: ${timeclock}`;
    }
    if (timeclock <= 0) {
      submit();
    }
  }
  setInterval(updateclock, 100);
}

// adds 100 to the score in localstorage 
async function updateScore(val) {
  var scoretemp = 0;
  if (localStorage.getItem("score") !== null) {
    var scoretemp = JSON.parse(localStorage.getItem("score"));
  }
  scoretemp += val * 1000;
  localStorage.setItem("score", scoretemp);
}

function penalty() {
  timeclock -= 10;
}

// Gets user answers
function waitForButtonClick(buttonClass) {
  return new Promise((resolve) => {
    const buttons = document.querySelectorAll(`.${buttonClass}`);
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        if (event.target.id == questions[j].correct) {
          updateScore(1);
          resolve("yes");
        } else {
          penalty();
          resolve("no");
        }
      });
    });
  });
}

// Generates the quiz by looping through the questions 
async function repaint() {
  for (j = 0; j < questions.length; j++) {
    Question.innerText = questions[j].question;
    // Updates the score display each loop
    userScore.innerText = "SCORE: " + JSON.parse(localStorage.getItem("score"));
    cardcontainer.innerHTML =
      `<div class='btn-group-vertical justify-content-center align-items-center'>
                                   <div class="d-flex justify-content-center pt-1"><button class="btn qans btn-arcade text-btn px-5" id="a" type="button">` +
      questions[j].answers.a +
      `</button></div><br>
                                   <div class="d-flex justify-content-center pt-1"><button class="btn qans btn-arcade text-btn px-5" id="b" type="button">` +
      questions[j].answers.b +
      `</button></div><br>
                                   <div class="d-flex justify-content-center pt-1"><button class="btn qans btn-arcade text-btn px-5" id="c" type="button">` +
      questions[j].answers.c +
      `</button></div><br>
                                   <div class="d-flex justify-content-center pt-1"><button class="btn qans btn-arcade text-btn px-5" id="d" type="button">` +
      questions[j].answers.d +
      `</button></div><br>
                                   </div>`;

    // Wait for a button to be clicked before continuing to the next question
    const result = await waitForButtonClick("qans");
    if (j + 1 == questions.length) {
      submit();
    }
  }
}

//Handles the modal 
var modal = document.getElementById("HSModal");
var trigger = document.getElementById("highscorebutton");
trigger.onclick = function () {
  modal.style.display = "block";
};
//clicking anywhere when the modal is active will dismiss it
window.onclick = function (event) {
  if (event.target == modal || modal.contains(event.target)) {
    modal.style.display = "none";
  }
};

function submit() {
  window.location.href = "./submit.html";
}

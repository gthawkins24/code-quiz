'use strict';

const highScoresButton = document.querySelector('#highScores');
const startButton = document.querySelector('#startButton');
const question = document.querySelector('#question');
const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const answer4 = document.querySelector('#answer4');
const answers = document.querySelector('.answers');
const timer = document.querySelector('#timer');
const solution = document.querySelector('#solution');
const finalScore = document.querySelector('#finalScore');
const initialEntryBox = document.querySelector('#initialEntryBox');
const initialsSubmit = document.querySelector('#submit');
const initials = document.querySelector('#initials');
const backButton = document.querySelector('#backButton');
const clearScores = document.querySelector('#clearScores');
const highScoresBox = document.querySelector('#highScoresBox');
const scoresList = document.querySelector("#scoresList");

let score = 0;
let time = 75;

const questions = {
    question1: 'Question 1: What is JavaScript?',
    answers1: ['JavaScript is a scripting language used to make the website interactive', 'JavaScript is an assembly language used to make the website interactive', 'JavaScript is a compiled language used to make the website interactive', 'None of the above'],

    question2: 'Question 2: Which of the following is correct about JavaScript?',
    answers2: ['JavaScript is an Object-Based language', 'JavaScript is an Assembly-language', 'JavaScript is an Object-Oriented language', 'JavaScript is a High-level language'],

    question3: 'Question 3: Among the given statements, which statement defines closures in JavaScript?',
    answers3: ['JavaScript is a function that is enclosed with references to its inner function scope', 'JavaScript is a function that is enclosed with references to its lexical environment', 'JavaScript is a function that is enclosed with the object to its inner function scope', 'None of the above'],

    question4: 'Question 4: Arrays in JavaScript are defined by which of the following statements?',
    answers4: ['It is an ordered list of values', 'It is an ordered list of objects', 'It is an ordered list of strings', 'It is an ordered list of functions'],

    question5: 'Question 5: Which of the following is a JavaScript data type?',
    answers5: ['Null type', 'Undefined type', 'Number type', 'All of the above'],

    question6: 'Question 6: Where is Client-side JavaScript code embedded within HTML documents?',
    answers6: ['A URL that uses the special javascript:code', 'A URL that uses the special javascript:protocol', 'A URL that uses the special javascript:encoding', 'A URL that uses the special javascript:stack'],

    question7: 'Question 7: Which of the following objects is the main entry point to all client-side JavaScript features and APIs?',
    answers7: ['Position', 'Window', 'Standard', 'Location']
}

const clearHighscores = function () {
    localStorage.removeItem("highscores");
    
    scoresList.innerHTML = "";
}

const displayHighScores = function() {
    let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

    highscores.sort(function (a, b) {
        return b.score - a.score;
    });

    highscores.forEach(function(score) {
        let scoreLi = document.createElement("li");
        scoreLi.textContent = `${score.initials}: ${score.score}`;

        scoresList.appendChild(scoreLi);
    });
}

highScoresButton.addEventListener('click', function() {
    introBox.style.display = "none";
    questionBox.style.display = "none";
    initialEntryBox.style.display = "none";
    highScoresBox.style.display = 'block';
    highScoresButton.removeEventListener('click', function() {
        introBox.style.display = "none";
        questionBox.style.display = "none";
        initialEntryBox.style.display = "none";
        highScoresBox.style.display = 'block';
    });
    displayHighScores();
});

const highScores = function() {
    initialEntryBox.style.display = "none";
    highScoresBox.style.display = 'block';

    let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

    let highScoresObject = {
        initials: initials.value, 
        score: score
    }

    highscores.push(highScoresObject);

    localStorage.setItem("highscores", JSON.stringify(highscores));

    displayHighScores();
};

const endGame = function() {
    time = 0;
    questionBox.style.display = "none";
    initialEntryBox.style.display = "block";

    finalScore.innerText = `Your final score is: ${score}`;

    submit.addEventListener('click', highScores);
}

const correctAnswer = function() {
    score = score + time;
    solution.innerText = `Correct! Score: ${score}`
}

const wrongAnswer = function() {
    time = time - 10;
    score = score - 10;
    solution.innerText = `Wrong! Score: ${score}`
}

const clockOperation = function() {
        timer.innerText = time;
        time--;

        const timerSet = setInterval(function() {
        if (time > 0) {
            timer.innerText = time;
            time--;
        } else {
            time = 0;
            timer.innerText = 0;
            clearInterval(timerSet);
            endGame();
        }
    }, 1000)
};
function question1() {

    answer1.removeEventListener('click', correctAnswer);
    answer1.removeEventListener('click', wrongAnswer);
    answer2.removeEventListener('click', correctAnswer);
    answer2.removeEventListener('click', wrongAnswer);
    answer3.removeEventListener('click', correctAnswer);
    answer3.removeEventListener('click', wrongAnswer);
    answer4.removeEventListener('click', correctAnswer);
    answer4.removeEventListener('click', wrongAnswer);


        const innerFunction = function() {

        introBox.style.display = "none";
        questionBox.style.display = "block";
        
        question.innerText = questions.question1;
        answer1.innerText = questions.answers1[0];
        answer2.innerText = questions.answers1[1];
        answer3.innerText = questions.answers1[2];
        answer4.innerText = questions.answers1[3];

        answer1.addEventListener('click', correctAnswer);
        answer2.addEventListener('click', wrongAnswer);
        answer3.addEventListener('click', wrongAnswer);
        answer4.addEventListener('click', wrongAnswer);

        answers.addEventListener('click', question2);
    };

    innerFunction();
};

const question2 = function() {
    answer1.removeEventListener('click', correctAnswer);
    answer1.removeEventListener('click', wrongAnswer);
    answer2.removeEventListener('click', correctAnswer);
    answer2.removeEventListener('click', wrongAnswer);
    answer3.removeEventListener('click', correctAnswer);
    answer3.removeEventListener('click', wrongAnswer);
    answer4.removeEventListener('click', correctAnswer);
    answer4.removeEventListener('click', wrongAnswer);

    answers.removeEventListener('click', question1);

        const innerFunction = function() {

        introBox.style.display = "none";
        questionBox.style.display = "block";
        
        question.innerText = questions.question2;
        answer1.innerText = questions.answers2[0];
        answer2.innerText = questions.answers2[1];
        answer3.innerText = questions.answers2[2];
        answer4.innerText = questions.answers2[3];

        answer1.addEventListener('click', correctAnswer);
        answer2.addEventListener('click', wrongAnswer);
        answer3.addEventListener('click', wrongAnswer);
        answer4.addEventListener('click', wrongAnswer);

        answers.addEventListener('click', question3);
        };
    innerFunction();
}

const question3 = function() {
    answer1.removeEventListener('click', correctAnswer);
    answer1.removeEventListener('click', wrongAnswer);
    answer2.removeEventListener('click', correctAnswer);
    answer2.removeEventListener('click', wrongAnswer);
    answer3.removeEventListener('click', correctAnswer);
    answer3.removeEventListener('click', wrongAnswer);
    answer4.removeEventListener('click', correctAnswer);
    answer4.removeEventListener('click', wrongAnswer);

    answers.removeEventListener('click', question2);

        const innerFunction = function() {

        introBox.style.display = "none";
        questionBox.style.display = "block";
        
        question.innerText = questions.question3;
        answer1.innerText = questions.answers3[0];
        answer2.innerText = questions.answers3[1];
        answer3.innerText = questions.answers3[2];
        answer4.innerText = questions.answers3[3];

        answer1.addEventListener('click', wrongAnswer);
        answer2.addEventListener('click', correctAnswer);
        answer3.addEventListener('click', wrongAnswer);
        answer4.addEventListener('click', wrongAnswer);

        answers.addEventListener('click', question4);
        };

    innerFunction();
}

const question4 = function() {
    answer1.removeEventListener('click', correctAnswer);
    answer1.removeEventListener('click', wrongAnswer);
    answer2.removeEventListener('click', correctAnswer);
    answer2.removeEventListener('click', wrongAnswer);
    answer3.removeEventListener('click', correctAnswer);
    answer3.removeEventListener('click', wrongAnswer);
    answer4.removeEventListener('click', correctAnswer);
    answer4.removeEventListener('click', wrongAnswer);

    answers.removeEventListener('click', question3);

        const innerFunction = function() {

        introBox.style.display = "none";
        questionBox.style.display = "block";
        
        question.innerText = questions.question4;
        answer1.innerText = questions.answers4[0];
        answer2.innerText = questions.answers4[1];
        answer3.innerText = questions.answers4[2];
        answer4.innerText = questions.answers4[3];

        answer1.addEventListener('click', correctAnswer);
        answer2.addEventListener('click', wrongAnswer);
        answer3.addEventListener('click', wrongAnswer);
        answer4.addEventListener('click', wrongAnswer);

        answers.addEventListener('click', question5);
        };

    innerFunction();
}

const question5 = function() {
    answer1.removeEventListener('click', correctAnswer);
    answer1.removeEventListener('click', wrongAnswer);
    answer2.removeEventListener('click', correctAnswer);
    answer2.removeEventListener('click', wrongAnswer);
    answer3.removeEventListener('click', correctAnswer);
    answer3.removeEventListener('click', wrongAnswer);
    answer4.removeEventListener('click', correctAnswer);
    answer4.removeEventListener('click', wrongAnswer);

    answers.removeEventListener('click', question4);

        const innerFunction = function() {

        introBox.style.display = "none";
        questionBox.style.display = "block";
        
        question.innerText = questions.question5;
        answer1.innerText = questions.answers5[0];
        answer2.innerText = questions.answers5[1];
        answer3.innerText = questions.answers5[2];
        answer4.innerText = questions.answers5[3];

        answer1.addEventListener('click', wrongAnswer);
        answer2.addEventListener('click', wrongAnswer);
        answer3.addEventListener('click', wrongAnswer);
        answer4.addEventListener('click', correctAnswer);

        answers.addEventListener('click', question6);
        };

    innerFunction();
}

const question6 = function() {
    answer1.removeEventListener('click', correctAnswer);
    answer1.removeEventListener('click', wrongAnswer);
    answer2.removeEventListener('click', correctAnswer);
    answer2.removeEventListener('click', wrongAnswer);
    answer3.removeEventListener('click', correctAnswer);
    answer3.removeEventListener('click', wrongAnswer);
    answer4.removeEventListener('click', correctAnswer);
    answer4.removeEventListener('click', wrongAnswer);

    answers.removeEventListener('click', question5);

        const innerFunction = function() {

        introBox.style.display = "none";
        questionBox.style.display = "block";
        
        question.innerText = questions.question6;
        answer1.innerText = questions.answers6[0];
        answer2.innerText = questions.answers6[1];
        answer3.innerText = questions.answers6[2];
        answer4.innerText = questions.answers6[3];

        answer1.addEventListener('click', wrongAnswer);
        answer2.addEventListener('click', correctAnswer);
        answer3.addEventListener('click', wrongAnswer);
        answer4.addEventListener('click', wrongAnswer);

        answers.addEventListener('click', question7);
        };

    innerFunction();
}

const question7 = function() {
    answer1.removeEventListener('click', correctAnswer);
    answer1.removeEventListener('click', wrongAnswer);
    answer2.removeEventListener('click', correctAnswer);
    answer2.removeEventListener('click', wrongAnswer);
    answer3.removeEventListener('click', correctAnswer);
    answer3.removeEventListener('click', wrongAnswer);
    answer4.removeEventListener('click', correctAnswer);
    answer4.removeEventListener('click', wrongAnswer);

    answers.removeEventListener('click', question6);

        const innerFunction = function() {

        introBox.style.display = "none";
        questionBox.style.display = "block";
        
        question.innerText = questions.question7;
        answer1.innerText = questions.answers7[0];
        answer2.innerText = questions.answers7[1];
        answer3.innerText = questions.answers7[2];
        answer4.innerText = questions.answers7[3];

        answer1.addEventListener('click', wrongAnswer);
        answer2.addEventListener('click', correctAnswer);
        answer3.addEventListener('click', wrongAnswer);
        answer4.addEventListener('click', wrongAnswer);

        answers.addEventListener('click', endGame);
        };

    innerFunction();
}

startButton.addEventListener('click', question1);
startButton.addEventListener('click', clockOperation);
clearScores.addEventListener('click', clearHighscores);
backButton.addEventListener('click', function() {
    introBox.style.display = "none";
    questionBox.style.display = "none";
    initialEntryBox.style.display = "block";
    highScoresBox.style.display = 'none';
});
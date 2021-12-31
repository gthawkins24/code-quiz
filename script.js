'use strict';

const highScoresButton = document.querySelector('#highScores');
const startButton = document.querySelector('#startButton');
const question = document.querySelector('#question');
const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const answer4 = document.querySelector('#answer4');
const answers = document.querySelector('.answers');

const questions = {
    question1: 'What is JavaScript?',
    answers1: ['JavaScript is a scripting language used to make the website interactive', 'JavaScript is an assembly language used to make the website interactive', 'JavaScript is a compiled language used to make the website interactive'],

    question2: 'Which of the following is correct about JavaScript?',
    answers2: ['JavaScript is an Object-Based language', 'JavaScript is an Assembly-language', 'JavaScript is an Object-Oriented language', 'JavaScript is a High-level language'],

    question3: 'Among the given statements, which statement defines closures in JavaScript?',
    answers3: ['JavaScript is a function that is enclosed with references to its inner function scope', 'JavaScript is a function that is enclosed with references to its lexical environment', 'JavaScript is a function that is enclosed with the object to its inner function scope', 'None of the above'],

    question4: 'Arrays in JavaScript are defined by which of the following statements?',
    answers4: ['It is an ordered list of values', 'It is an ordered list of objects', 'It is an ordered list of strings', 'It is an ordered list of functions'],

    question5: 'Which of the following is a JavaScript data type?',
    answers5: ['Null type', 'Undefined type', 'Number type', 'All of the above'],

    question6: 'Where is Client-side JavaScript code embedded within HTML documents?',
    answers6: ['A URL that uses the special javascript:code', 'A URL that uses the special javascript:protocol', 'A URL that uses the special javascript:encoding', 'A URL that uses the special javascript:stack'],

    question7: 'Which of the following objects is the main entry point to all client-side JavaScript features and APIs?',
    answers7: ['Position', 'Window', 'Standard', 'Location']
}

highScoresButton.addEventListener('click', function() {
    alert('You clicked me!');
});



const populateQuestions = function () {
    introBox.style.display = "none";
    questionBox.style.display = "block";
    
    question.innerText = questions.question1;
    answer1.innerText = questions.answers1[0];
    answer2.innerText = questions.answers1[1];
    answer3.innerText = questions.answers1[2];
    answer4.innerText = questions.answers1[3];
}

startButton.addEventListener('click', populateQuestions);

console.log(questions.question3);
console.log(questions.answers3);
console.log(questions.answers3[1]);

'use strict';

const highScoresButton = document.querySelector('#highScores');
const startButton = document.querySelector('#startButton');
const introBox = document.querySelector('#introBox');
const questionBox = document.querySelector('#question');
const answersBox = document.querySelector('#answers');

highScoresButton.addEventListener('click', function() {
    alert('You clicked me!');
});

startButton.addEventListener('click', function() {
    introBox.style.display = "none";
    questionBox.style.display = "block";
});
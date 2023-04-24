"use strict";
window.addEventListener("DOMContentLoaded", function () {
    var questionElement = document.getElementById("question");
    var answerElement = document.getElementById("answer");
    var submitButton = document.getElementById("submit");
    var feedbackElement = document.getElementById("feedback");
    var firstNumber = generateRandomNumber();
    var secondNumber = generateRandomNumber();
    var correctAnswer = firstNumber * secondNumber;
    questionElement.textContent = "".concat(firstNumber, " x ").concat(secondNumber, " = ?");
    submitButton.addEventListener("click", function () {
        var userAnswer = parseInt(answerElement.value);
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "正解！";
        }
        else {
            feedbackElement.textContent = "残念、不正解。";
        }
        firstNumber = generateRandomNumber();
        secondNumber = generateRandomNumber();
        correctAnswer = firstNumber * secondNumber;
        correctAnswer = firstNumber * secondNumber;
        questionElement.textContent = "".concat(firstNumber, " x ").concat(secondNumber, " = ?");
        answerElement.value = "";
    });
    function generateRandomNumber() {
        return Math.floor(Math.random() * 10) + 1;
    }
});

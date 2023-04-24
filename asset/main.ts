window.addEventListener("DOMContentLoaded", () => {
  const questionElement = document.getElementById("question") as HTMLElement;
  const answerElement = document.getElementById("answer") as HTMLInputElement;
  const submitButton = document.getElementById("submit") as HTMLButtonElement;
  const feedbackElement = document.getElementById("feedback") as HTMLElement;

  let firstNumber = generateRandomNumber();
  let secondNumber = generateRandomNumber();
  let correctAnswer = firstNumber * secondNumber;

  questionElement.textContent = `${firstNumber} x ${secondNumber} = ?`;

  submitButton.addEventListener("click", () => {
    const userAnswer = parseInt(answerElement.value);

    if (userAnswer === correctAnswer) {
      feedbackElement.textContent = "正解！";
    } else {
      feedbackElement.textContent = "残念、不正解。";
    }

    firstNumber = generateRandomNumber();
    secondNumber = generateRandomNumber();
    correctAnswer = firstNumber * secondNumber;
    correctAnswer = firstNumber * secondNumber;
    questionElement.textContent = `${firstNumber} x ${secondNumber} = ?`;
    answerElement.value = "";
  });

  function generateRandomNumber(): number {
    return Math.floor(Math.random() * 10) + 1;
  }
});

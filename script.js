const quizData = [
    {
        question: "What is 2+2?",
        answers: ["This quiz is really hard", "3", "11 and 1/2", "4"],
        answer: "4"
    },
    {
        question: "What goes up but never comes down?",
        answers: ["My urge to drop out of school", "My age", "My debt"],
        answer: "My age"
    },
    {
        question: "Is a tomato a fruit?",
        answers: ["True", "False", "Tomatoes contain seeds and grow from flowers, making them a fruit botanically. But in their culinary uses, tomatoes are considered vegetables."],
        answer: "Tomatoes contain seeds and grow from flowers, making them a fruit botanically. But in their culinary uses, tomatoes are considered vegetables."
    }
];
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;

  answersElement.innerHTML = "";
  question.answers.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    answersElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedButton.innerText === answer) {
    score++;
  }
  else {
    window.alert("Incorrect!")
  }
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quiz.innerHTML = `
    <h1>Quiz Completed!</h1>
    <p>Your score: ${score}/${quizData.length}</p>
  `;
}

showQuestion();
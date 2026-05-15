const correctAnswers = {
    q1: "praha",
    q2: "8"
};

let currentQuestion = 1;

function submitQuestion(questionNumber) {
    const questionName = "q" + questionNumber;
    const inputs = document.querySelectorAll(`input[name="${questionName}"]`);
    const correctAnswer = correctAnswers[questionName];

    inputs.forEach(input => {
        const label = input.parentElement;

        if (input.value === correctAnswer) {
            label.classList.add("correct");
        }

        if (input.checked && input.value !== correctAnswer) {
            label.classList.add("wrong");
        }

        input.disabled = true;
    });
}

function nextQuestion() {
    document.getElementById("question1").classList.remove("active");
    document.getElementById("question2").classList.add("active");
    currentQuestion = 2;
}

function previousQuestion() {
    document.getElementById("question2").classList.remove("active");
    document.getElementById("question1").classList.add("active");
    currentQuestion = 1;
}
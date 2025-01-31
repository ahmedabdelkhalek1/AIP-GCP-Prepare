document.addEventListener("DOMContentLoaded", function () {
    const categorySelect = document.getElementById("category-select");
    const showQuestionsButton = document.getElementById("show-questions");
    const questionsContainer = document.getElementById("questions-container");
    const categorySquaresContainer = document.getElementById("category-squares-container");

    // Function to display the number of questions in each category
    function displayCategorySquares() {
        categorySquaresContainer.innerHTML = ""; // Clear previous squares

        const categories = [...new Set(questions.map(q => q.category))]; // Get unique categories
        categories.forEach(category => {
            const square = document.createElement("div");
            square.className = "category-square";

            const count = questions.filter(q => q.category === category).length;
            square.textContent = `${category}: ${count}`;

            categorySquaresContainer.appendChild(square);
        });
    }

    // Function to display questions based on the selected category
    function displayQuestions(category) {
        questionsContainer.innerHTML = ""; // Clear previous questions

        const filteredQuestions = category === "all"
            ? questions
            : questions.filter(q => q.category === category);

        filteredQuestions.forEach(question => {
            const questionDiv = document.createElement("div");
            questionDiv.className = "question";

            const questionText = document.createElement("p");
            questionText.textContent = `Question ${question.question_number}: ${question.question}`;
            questionDiv.appendChild(questionText);

            const answersDiv = document.createElement("div");
            answersDiv.className = "answers";

            question.answers.forEach((answer, index) => {
                const answerDiv = document.createElement("div");
                answerDiv.className = "answer";

                if (answer.startsWith(question.correct_answer)) {
                    answerDiv.classList.add("correct-answer", "hidden");
                }

                answerDiv.textContent = answer;
                answersDiv.appendChild(answerDiv);
            });

            questionDiv.appendChild(answersDiv);

            const showAnswerButton = document.createElement("button");
            showAnswerButton.textContent = "Show Correct Answer";
            showAnswerButton.addEventListener("click", function () {
                const correctAnswerDiv = answersDiv.querySelector(".correct-answer");
                correctAnswerDiv.classList.remove("hidden");
            });

            questionDiv.appendChild(showAnswerButton);
            questionsContainer.appendChild(questionDiv);
        });
    }

    // Event listener for the "Show Questions" button
    showQuestionsButton.addEventListener("click", function () {
        const selectedCategory = categorySelect.value;
        displayQuestions(selectedCategory);
    });

    // Display category squares by default when the page loads
    displayCategorySquares();

    // Optionally, display all questions by default when the page loads
    displayQuestions("all");
});
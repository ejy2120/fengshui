// quizScore.js
var score = 0; // Global variable to keep track of correct answers
var attemptedQuestions = {}; // Track which questions have been attempted

// Function to mark a question as attempted
function markAttempted(questionId) {
  attemptedQuestions[questionId] = true;
}

// Function to check if a question has been attempted
function isAttempted(questionId) {
  return attemptedQuestions[questionId];
}

// Function to increase score only if it's the first correct attempt
function correctAnswer(questionId) {
  if (!isAttempted(questionId)) {
    score++; // Only increment if it's the first correct attempt
  }
  markAttempted(questionId); // Mark the question as attempted
}

// Function to retrieve the current score
function getScore() {
  return score;
}

// Function to reset the score and attempted questions (for testing or restarting the quiz)
function resetScore() {
  score = 0;
  attemptedQuestions = {}; // Reset attempted questions
}
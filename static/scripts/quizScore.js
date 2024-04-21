// quizScore.js
let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0; // Get score from localStorage or default to 0
let attemptedQuestions = JSON.parse(localStorage.getItem('attemptedQuestions')) || {}; // Get attempted questions from localStorage or default to empty object

// Function to mark a question as attempted
function markAttempted(questionId) {
  attemptedQuestions[questionId] = true;
  localStorage.setItem('attemptedQuestions', JSON.stringify(attemptedQuestions)); // Update attempted questions in localStorage
}

// Function to check if a question has been attempted
function isAttempted(questionId) {
  return attemptedQuestions[questionId];
}

// Function to increase score only if it's the first correct attempt
function correctAnswer(questionId) {
  if (!isAttempted(questionId)) { // This question has not yet been attempted
    score++; // Only increment if it's the FIRST correct attempt
    localStorage.setItem('score', score); // Update score in localStorage
  }
  markAttempted(questionId); // Mark the question as attempted
}

// Function to retrieve the current score
function getScore() {
  if (Object.keys(attemptedQuestions).length === 0) {
    // Reset the score to 0 if there are no attempted questions
    score = 0;
    localStorage.setItem('score', score); // Update score in localStorage
  }
  return score;
}

// Function to reset the score and attempted questions (for testing or restarting the quiz)
function resetScore() {
  score = 0;
  localStorage.setItem('score', 0); // Update score in localStorage
  attemptedQuestions = {}; // Reset attempted questions
  localStorage.setItem('attemptedQuestions', JSON.stringify(attemptedQuestions)); // Update attempted questions in localStorage
}

$(document).ready(function () {
  var questionId = "quiz4"; // Unique identifier for this quiz question

  $("#select-polyester").click(function () {
    markAttempted(questionId); // Mark this question as attempted
    $("#polyester-rug").css("border", "3px solid #e06666ff");
    $("#polyester-rug").css("border-radius", "20px");
    $("#feedback-message")
      .html(
        "Choose a rug made of <span class='red-text'><b>natural material</b></span> to align with the earth element."
      )
      .css("background-color", "#F7DAD2")
      .css("width", "100%")
      .css("margin-left", "30px")
      .show();
    $("#try-again-button").show();
    $("#next-question-button").hide();
    // Disable other select options
    $("#select-cotton, #select-fiber").prop("disabled", true);
  });

  $("#select-cotton").click(function () {
    markAttempted(questionId); // Mark this question as attempted
    $("#cotton-rug").css("border", "3px solid #e06666ff");
    $("#cotton-rug").css("border-radius", "20px");
    $("#feedback-message")
      .html(
        "Choose a rug with a <span class='red-text'><b>balanced/soft shape</b></span> to align with the earth element."
      )
      .css("background-color", "#F7DAD2")
      .css("width", "100%")
      .css("margin-left", "30px")
      .show();
    $("#try-again-button").show();
    $("#next-question-button").hide();
    // Disable other select options
    $("#select-polyester, #select-fiber").prop("disabled", true);
  });

  $("#select-fiber").click(function () {
    if (!isAttempted(questionId)) {
      // Check if it's the first correct attempt
      correctAnswer(questionId); // Increment the score
    }
    $("#fiber-rug").css("border", "3px solid #83a29d");
    $("#fiber-rug").css("border-radius", "20px");
    $("#feedback-message")
      .html(
        "Correct! This rug is made of <span class='green-text'><b>natural material</b></span> and has a <span class='green-text'><b>balanced shape</b></span>, which promotes the earth element’s <span class='green-text'><b>stability</b></span>."
      )
      .css("background-color", "#DDEEEA")
      .css("width", "100%")
      .css("margin-left", "30px")
      .show();
    $("#try-again-button").hide();
    $("#next-question-button").show();
    // Disable other select options
    $("#select-polyester, #select-cotton").prop("disabled", true);
  });

  $("#try-again-button").click(function () {
    // Reset styles and enable all select options
    $(".rug-select").css("border", "none");
    $(".rug-select").prop("disabled", false);
    $("#feedback-message").hide();
    $("#try-again-button").hide();
    $("#next-question-button").hide();
  });
});

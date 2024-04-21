$(document).ready(function () {
  let originalText = $(".text-bubble3").text();
  let originalBackgroundColor = $(".text-bubble3").css("background-color");

  let bedDraggable = true;
  const questionId = "quiz3"; // Unique identifier for this quiz question

  // Make the bed image draggable
  $(".draggable").draggable({
    revert: "invalid",
    cursor: "move",
    containment: "document",
    zIndex: 1000,
  });

  // Make the correct and incorrect divs droppable
  $(".correct-div, .incorrect-div").droppable({
    accept: ".draggable", // Only accept draggable items
    drop: function (event, ui) {
      var droppable = $(this);
      console.log("Dropped on: ", droppable.attr("class"));

      if (droppable.hasClass("correct-div")) {
        $("#next-concept-button").show();

        $("#try-again-button").hide();

        correctAnswer(questionId); // Increase the score
        
        // If dropped into the correct div, show a good message
        $(".text-bubble3").html(
          "Correct! The mirror will <span class='green-text'>reflect natural light from the window</span>, which <span class='green-text'>amplifies the positive <i>chi</i></span> in the room!"
        );

        $(".text-bubble3").css("background-color", "#DDEEEA");

        $(".green-text").css({ color: "#19676B", "font-weight": "bold" });

        $(
          "img[src='{{ url_for('static', filename='images/com-selfcheck.png') }}']"
        ).attr(
          "src",
          "{{ url_for('static', filename='images/com-selfcheck-right.png') }}"
        );
      } else if (droppable.hasClass("incorrect-div")) {
        markAttempted(questionId); // Mark this question as attempted
        $("#next-concept-button").hide();

        $("#try-again-button").show();

        // If dropped into the incorrect div, show a bad message
        $(".text-bubble3").html(
          "Try again! <span class='red-text'>Facing the door</span>, the mirror will <span class='red-text'>reflect positive chi out</span> of the room."
        );

        $(".text-bubble3").css("background-color", "#F7DAD2");

        $(".red-text").css({ color: "#E06666", "font-weight": "bold" });

        bedDraggable = false; // Disable draggable behavior so user cannot drag bed to correct location right after
        $(".draggable").draggable("disable"); // Disable draggable behavior
      }
    },
  });

  $("#try-again-button").click(function () {
    $(".draggable").css({ top: 0, left: 0 });
    $("#try-again-button").hide();
    $("#next-concept-button").hide();
    $(".text-bubble3").text("");

    $(".text-bubble3").text(originalText).css({
      "background-color": originalBackgroundColor,
    });

    bedDraggable = true; // Enable draggable behavior
    $(".draggable").draggable("enable"); // Enable draggable behavior
  });

  $("#next-concept-button").click(function () {
    window.location.href = "/quiz4";
  });
});

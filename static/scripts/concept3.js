$(document).ready(function () {
  // Define the correct and wrong positions
  var correctPosition = $(".chi-op2");
  var wrongPosition = $(".wrong-position");

  // Store the original text and background color
  var originalText = $(".text-bubble3").text();
  var originalBackgroundColor = $(".text-bubble3").css("background-color");
  var originalMarginTop = $(".text-bubble3").css("margin-top");

  // Make the mirror image draggable
  $("#mirror").draggable({
    revert: "invalid",
    cursor: "move",
    containment: "#chi-room",
    zIndex: 1000,
  });

  // Define droppable areas
  correctPosition.droppable({
    drop: function (event, ui) {
      $(this).addClass("correct-drop");
      $("#next-concept-button").show();
      $("#try-again-button").hide();
      $(".text-bubble3").html(
        "Great! The mirror will <span class='green-text'> amplify the natural light and views</span> that the window offers, boosting positive chi."
      );
      $(".text-bubble3").css({
        "background-color": "#DDEEEA",
        "margin-top": "-20%",
      });
      $(".green-text").css({
        color: "#19676B",
        "font-weight": "bold",
      });
    },
  });

  wrongPosition.droppable({
    drop: function (event, ui) {
      $(this).addClass("incorrect-drop");
      $("#try-again-button").show();
      $("#next-concept-button").hide();
      $(".text-bubble3").html(
        "Though the mirror reflects beautiful art it <span class='red-text'>emits positive chi</span> from the room."
      );
      $(".text-bubble3").css({
        "background-color": "#F7DAD2",
        "margin-top": "-20%",
      });
      $(".red-text").css({
        color: "#E06666",
        "font-weight": "bold",
      });
    },
  });

  // Reset button functionality
  $("#try-again-button").click(function () {
    $(".droppable").removeClass("correct-drop incorrect-drop");
    $("#mirror").css({ top: 0, left: 0 });
    $(this).hide();

    // Restore the original text, color, background color, and margin top
    $(".text-bubble3").text(originalText).css({
      "background-color": originalBackgroundColor,
      "margin-top": originalMarginTop,
    });
  });

  // Next concept button functionality
  $("#next-concept-button").click(function () {
    window.location.href = "/concept4";
  });
});

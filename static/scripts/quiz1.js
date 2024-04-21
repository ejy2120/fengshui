$(document).ready(function() {
    let originalText = $(".text-bubble3").text();
    let originalBackgroundColor = $(".text-bubble3").css("background-color");

    let bedDraggable = true;
    const questionId = "quiz1"; // Unique ID for this question

    // Make the bed image draggable
    $(".draggable").draggable({
        revert: "invalid",
        cursor: "move",
        containment: "document",
        zIndex: 1000
      });
  
    // Make the correct and incorrect divs droppable
    $(".correct-div, .incorrect-div1, .incorrect-div2").droppable({
      accept: ".draggable", // Only accept draggable items
      drop: function(event, ui) {
        var droppable = $(this);
        console.log("Dropped on: ", droppable.attr("class"));
  
        if (droppable.hasClass("correct-div")) {
            $("#next-question-button").show();

            $("#try-again-button").hide();
            
            correctAnswer(questionId); // Increase the score
            console.log(score);

            // If dropped into the correct div, show a good message
            $(".text-bubble3").html("Well done! You placed the bed in the command position. The bed has a <span class='green-text'><b>sweeping view of the door/room</b></span> but is <span class='green-text'><b>not in direct line</b></span> of the door.");

            $(".text-bubble3").css("background-color", "#DDEEEA");

            $(".green-text").css({ color: "#19676B", "font-weight": "bold" });

        } else if (droppable.hasClass("incorrect-div1")) {
            markAttempted(questionId); // Mark this question as attempted; do not increment score 

            $("#next-question-button").hide();

            $("#try-again-button").show();

            // If dropped into the incorrect div, show a bad message
            $(".text-bubble3").html("Try again! For the bed to be in command position, it should not be in <span class='red-text'>coffin position</span> nor be <span class='red-text'>directly in line</span> with the door.");

            $(".text-bubble3").css("background-color", "#F7DAD2");

            $(".red-text").css({ color: "#E06666", "font-weight": "bold" });

            bedDraggable = false; // Disable draggable behavior so user cannot drag bed to correct location right after
            $(".draggable").draggable("disable"); // Disable draggable behavior
        }
        else if (droppable.hasClass("incorrect-div2")) {
            markAttempted(questionId); // Mark this question as attempted; do not increment score 

            $("#next-question-button").hide();

            $("#try-again-button").show();

            // If dropped into the incorrect div, show a bad message
            $(".text-bubble3").html("Try again! Make sure that there is <span class='red-text'>equal access on both sides</span> of the bed (for symmetry later). Right now, you can only enter from the left side.");

            $(".text-bubble3").css("background-color", "#F7DAD2");

            $(".red-text").css({ color: "#E06666", "font-weight": "bold" });

            bedDraggable = false; // Disable draggable behavior so user cannot drag bed to correct location right after
            $(".draggable").draggable("disable"); // Disable draggable behavior
        }
      }
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
    
    $("#next-question-button").click(function () {
        window.location.href = "/quiz2";
    });

    
  });

  
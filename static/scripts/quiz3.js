$(document).ready(function() {
    let originalText = $(".text-bubble3").text();
    let originalBackgroundColor = $(".text-bubble3").css("background-color");

    let bedDraggable = true;

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
            $(this).addClass("correct-drop");

            $("#next-question-button").show();

            $("#try-again-button").hide();

            // If dropped into the correct div, show a good message
            $(".text-bubble3").html("Correct! The mirror will reflect <span class='green-text'>natural light</span> that's coming in from the window, emanating it throughout the room.");

            $(".text-bubble3").css("background-color", "#DDEEEA");

            $(".green-text").css({ color: "#19676B", "font-weight": "bold" });

            $("img[src='{{ url_for('static', filename='images/com-selfcheck.png') }}']").attr("src", "{{ url_for('static', filename='images/com-selfcheck-right.png') }}");

        } 
        else if (droppable.hasClass("incorrect-div1")) {
            $(this).addClass("incorrect-drop");

            $("#next-question-button").hide();

            $("#try-again-button").show();

            // If dropped into the incorrect div, show a bad message
            $(".text-bubble3").html("Try again! Facing the door, the mirror will reflect and bounce positive chi <span class='red-text'><b>out</b></span> of the room. Place the mirror in a less volatile position where it can <span class='red-text'>amplify</span> positive chi - like natural light, a pretty view, etc.");

            $(".text-bubble3").css("background-color", "#F7DAD2");

            $(".red-text").css({ color: "#E06666", "font-weight": "bold" });

            bedDraggable = false; // Disable draggable behavior so user cannot drag bed to correct location right after
            $(".draggable").draggable("disable"); // Disable draggable behavior
        }
      }
    });

    $("#try-again-button").click(function () {
        $(".correct-div").removeClass("correct-drop");
        $(".incorrect-div1").removeClass("incorrect-drop");
        $(".incorrect-div2").removeClass("incorrect-drop");
    
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
        window.location.href = "/quiz4";
    });

    
  });

  
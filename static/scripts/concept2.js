$(document).ready(function () {
  var correctItems = ["sym-table.png", "sym-dresser.png"];
  var droppedItems = [];
  // Store the original text
  var originalText = $(".text-bubble2").text();
  var originalBackgroundColor = $(".text-bubble2").css("background-color");

  $(".draggable").draggable({
    revert: "invalid",
    cursor: "move",
    containment: "document",
    zIndex: 1000,
  });

  $(".droppable").droppable({
    drop: function (event, ui) {
      var droppedItem = ui.draggable.attr("src");
      var $droppable = $(this);

      droppedItems.push(getFileName(droppedItem));

      console.log("Dropped Items:", droppedItems);

      if (droppedItems.length === 2) {
        var droppedItemsStr = droppedItems.sort().join();
        var correctItemsStr = correctItems.sort().join();

        console.log("Dropped Items String:", droppedItemsStr);
        console.log("Correct Items String:", correctItemsStr);

        if (droppedItemsStr === correctItemsStr) {
          console.log("Correct items matched");
          $(".droppable").addClass("correct-drop");
          $("#next-concept-button").show();
          $("#try-again-button").hide();
          $(".text-bubble2").html(
            "Great! Two <span class='green-text'>complementary</span> items ensures symmetry."
          );
          $(".text-bubble2").css({
            "background-color": "#DDEEEA",
          });
          $(".green-text").css({
            color: "#19676B",
            "font-weight": "bold",
          });
        } else {
          console.log("Incorrect items matched");
          $(".droppable").addClass("incorrect-drop");
          $("#next-concept-button").hide();
          $("#try-again-button").show();
          $(".text-bubble2").html(
            "Do not  <span class='red-text'>mix objects</span> – this disrupts symmetry and harmony."
          );
          $(".text-bubble2").css({
            "background-color": "#F7DAD2",
          });
          $(".red-text").css({
            color: "#E06666",
            "font-weight": "bold",
          });
        }
      }
    },
  });

  $("#try-again-button").click(function () {
    $(".droppable").removeClass("correct-drop incorrect-drop");
    $(".draggable").css({ top: 0, left: 0 });
    $("#try-again-button").hide();
    $("#next-concept-button").hide();
    droppedItems = [];
    $(".text-bubble2").text("");

    // Restore the original text, color, and background color
    $(".text-bubble2").text(originalText).css({
      "background-color": originalBackgroundColor,
    });
  });

  $("#next-concept-button").click(function () {
    window.location.href = "/concept3";
  });
  function getFileName(path) {
    return path.substring(path.lastIndexOf("/") + 1);
  }
});

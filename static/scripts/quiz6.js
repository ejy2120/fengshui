// Ensure jQuery is loaded and ready
$(document).ready(function () {
    // Make the desk image draggable
    $("#desk").draggable({
        revert: "invalid", // Reverts the position if dropped in a non-droppable area
    });

    // Make the correct div droppable
    $(".correct-div").droppable({
        accept: "#desk", // Accepts only the desk image
        drop: function (event, ui) {
            $("#feedback-message").html("Yes! This desk is in the <span class='green-text'><b>command position</b></span> and has a <span class='green-text'><b>sweeping view</b></span> of the room and door.")
                            .css('background-color', '#DDEEEA') // Light green background
                            .show();
            $("#try-again-button").hide(); // Hide the "try again" button
            $("#next-concept-button").show(); // Show the "next concept" button
        },
    });

    // Make the incorrect div droppable
    $(".incorrect-div").droppable({
        accept: "#desk", // Accepts only the desk image
        drop: function (event, ui) {
            $("#feedback-message").html("Try again! The desk should <span class='red-text'><b>not be directly</b></span> in the <span class='red-text'><b>front</b></span> of the door; to be in a command position, the desk should have a sweeping view of the room.")
                                .css('background-color', '#F7DAD2') // Light red background
                                .show();
            $("#try-again-button").show(); // Show the "try again" button
            $("#next-concept-button").hide(); // Hide the "next concept" button
        },
    });
});

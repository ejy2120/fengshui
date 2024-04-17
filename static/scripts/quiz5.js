$(document).ready(function() {
    $('#select-option1').click(function() {
        $('#option1').css('border', '2px solid red');
        $('#feedback-message').html("Try again! This option is not aligned with <span class='red-text'><b>our principles</b></span>.")
                              .css('background-color', '#F7DAD2')
                              .show();
        $('#try-again-button').show();
        $('#next-question-button').hide();
    });

    $('#select-option2').click(function() {
        $('#option2').css('border', '2px solid green');
        $('#feedback-message').html("Correct! This option aligns perfectly with <span class='green-text'><b>our goals</b></span>.")
                              .css('background-color', '#DDEEEA')
                              .show();
        $('#try-again-button').hide();
        $('#next-question-button').show();
    });
});
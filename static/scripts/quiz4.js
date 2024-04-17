$(document).ready(function() {
    $('#select-polyester').click(function() {
        $('#polyester-rug').css('border', '2px solid red');
        $('#feedback-message').text("Choose a rug made of natural material to align with earth element.")
                              .css('background-color', '#F7DAD2')
                              .show();
        $('#try-again-button').show();
        $('#next-question-button').hide();
    });

    $('#select-cotton').click(function() {
        $('#cotton-rug').css('border', '2px solid red');
        $('#feedback-message').text("Choose a rug with a balanced/soft shape to align with earth element.")
                              .css('background-color', '#F7DAD2')
                              .show();
        $('#try-again-button').show();
        $('#next-question-button').hide();
    });

    $('#select-fiber').click(function() {
        $('#fiber-rug').css('border', '2px solid green');
        $('#feedback-message').text("Correct! This rug is made of natural material and has a balanced shape, which promotes the earth element’s stability.")
                              .css('background-color', '#DDEEEA')
                              .show();
        $('#try-again-button').hide();
        $('#next-question-button').show();
    });
});
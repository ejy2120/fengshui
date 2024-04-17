$(document).ready(function() {
    $('#select-polyester').click(function() {
        $('#polyester-rug').css('border', '2px solid red');
        $('#feedback-message').html("Choose a rug made of <span class='red-text'><b>natural material</b></span> to align with the earth element.")
                              .css('background-color', '#F7DAD2')
                              .show();
        $('#try-again-button').show();
        $('#next-question-button').hide();
    });

    $('#select-cotton').click(function() {
        $('#cotton-rug').css('border', '2px solid red');
        $('#feedback-message').html("Choose a rug with a <span class='red-text'><b>balanced/soft shape</b></span> to align with the earth element.")
                              .css('background-color', '#F7DAD2')
                              .show();
        $('#try-again-button').show();
        $('#next-question-button').hide();
    });

    $('#select-fiber').click(function() {
        $('#fiber-rug').css('border', '2px solid green');
        $('#feedback-message').html("Correct! This rug is made of <span class='green-text'><b>natural material</b></span> and has a <span class='green-text'><b>balanced shape</b></span>, which promotes the earth element’s <span class='green-text'><b>stability</b></span>.")
                              .css('background-color', '#DDEEEA')
                              .show();
        $('#try-again-button').hide();
        $('#next-question-button').show();
    });
});
$(document).ready(function() {
    $('#select-clay').click(function() {
        $('#clay-vase').css('border', '3px solid #83a29d');
        $('#clay-vase').css('border-radius', '20px');
        $('#feedback-message').html("Correct! These vases are made of <span class='green-text'><b>clay</b></span>, a <span class='green-text'><b>natural material</b></span> which is connected to the <span class='green-text'><b>earth element</b></span> and brings a feeling of <span class='green-text'><b>groundedness</b></span>.")
                              .css('background-color', '#DDEEEA')
                              .show();
        $('#try-again-button').hide();
        $('#next-question-button').show();
    });
    $('#select-brass').click(function() {
        $('#brass-vase').css('border', '3px solid #e06666ff');
        $('#brass-vase').css('border-radius', '20px');
        $('#feedback-message').html("Try again! We don’t want items made of <span class='red-text'><b>metal</b></span> – that <span class='red-text'><b>clashes</b></span> with earth element and feeling of stability.")
                              .css('background-color', '#F7DAD2')
                              .show();
        $('#try-again-button').show();
        $('#next-question-button').hide();
    });
    $('#select-steel').click(function() {
        $('#steel-vase').css('border', '3px solid #e06666ff');
        $('#steel-vase').css('border-radius', '20px');
        $('#feedback-message').html("Try again! We don’t want items made of <span class='red-text'><b>metal</b></span> – that <span class='red-text'><b>clashes</b></span> with earth element and feeling of stability.")
                              .css('background-color', '#F7DAD2')
                              .show();
        $('#try-again-button').show();
        $('#next-question-button').hide();
    });
});

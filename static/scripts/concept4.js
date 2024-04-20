document.addEventListener('DOMContentLoaded', function () {
    const selectableImages = document.querySelectorAll('.selectable-image');
    const submitButton = document.getElementById('earth-self-check');
    const feedbackMessage = document.getElementById('feedback-message');

    selectableImages.forEach(image => {
        image.addEventListener('click', function () {
            image.classList.toggle('selected');
        });
    });

    submitButton.addEventListener('click', function() {
        let numIncorrect = 0;
        selectableImages.forEach(image => {
            // Check if selected and incorrect
            if (image.classList.contains('selected') && image.classList.contains('incorrect-item')) {
                image.style.border = '2px solid red'; // Mark incorrect choices
                numIncorrect++;
            }
            // Check if selected and correct
            else if (image.classList.contains('selected') && image.classList.contains('correct-item')) {
                image.style.border = '2px solid green'; // Mark correct choices
            }
        });

        feedbackMessage.style.display = 'block';
        if (numIncorrect == 0) {
            $(feedbackMessage).html("Amazing! All these items are made of <span class='green-text'><b>natural materials.</b></span>")
                            .css('background-color', '#DDEEEA') // Light green background
                            .show();
            $('#try-again-button').hide();
            $('#take-quiz-button').show();
        } else {
            $(feedbackMessage).html("Make sure to choose <span class='red-text'><b>natural, non-metal materials</b></span> and <span class='red-text'><b>balanced, soft shapes.</b></span>")
                            .css('background-color', '#F7DAD2') // Light red background
                            .show();
            $('#try-again-button').show();
            $('#take-quiz-button').hide();
        }

        // Hide the submit button
        $(submitButton).hide();
    });
});
$(document).ready(function() {
    // Store whether an item has been clicked
    let itemsSelected = [];
    const feedbackMessage = document.getElementById('feedback-message');
    const submitButton = document.getElementById('earth-self-check');

    // Track if item is selected
    $('.selectable-item').on('click', function() {
        // Toggle selection by adding/removing a CSS class
        const img = $(this).find('img'); // Find the image
        img.toggleClass('selected'); // Toggle the 'selected' class

        // Store the index of the selected item
        const itemIndex = $('.selectable-item').index(this);
        if (itemsSelected.includes(itemIndex)) {
            // If already selected, remove from list
            const index = itemsSelected.indexOf(itemIndex);
            itemsSelected.splice(index, 1);
        } else {
            // If not, add to list
            itemsSelected.push(itemIndex);
        }
    });

    // Handle submit button click
    $('#earth-self-check').on('click', function() {
        let incorrectSelections = 0; // Counter for incorrectly selected items

        $('.selectable-item').each(function(index) {
            const isCorrect = $(this).hasClass('correct-item');
            const isSelected = $(this).find('img').hasClass('selected'); // Check if the image is selected

            const img = $(this).find('img'); // Get the image

            if (isSelected) {
                if (isCorrect) {
                    img.css('border', '3px solid #19676b'); // Correct and selected
                } else {
                    img.css('border', '3px solid #e06666'); // Incorrect and selected
                    incorrectSelections++; // Increment the counter for incorrect selections
                }
            } else {
                img.css('border', 'none'); // Reset border if not selected
            }
        });

        feedbackMessage.style.display = 'block';
        if (incorrectSelections == 0) {
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
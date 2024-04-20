document.addEventListener('DOMContentLoaded', function () {
    const selectableImages = document.querySelectorAll('.selectable-image');
    const submitButton = document.getElementById('earth-self-check');
    const feedbackMessage = document.getElementById('feedback-message');

    // Add click event listener to toggle the 'selected' class and reset border
    selectableImages.forEach(image => {
        image.addEventListener('click', function () {
            image.classList.toggle('selected');
            image.style.border = ''; // Reset border style on toggle
        });
    });

    // Handle submit button click
    submitButton.addEventListener('click', function() {
        let numIncorrect = 0; // Counter for incorrect selections

        selectableImages.forEach(image => {
            if (image.classList.contains('selected')) {
                // Check if the image is a correct item
                if (image.classList.contains('correct-item')) {
                    image.style.border = '2px solid green'; // Green border for correct
                }
                // Check if the image is an incorrect item
                else if (image.classList.contains('incorrect-item')) {
                    image.style.border = '2px solid red'; // Red border for incorrect
                    numIncorrect++; // Increment incorrect count
                }
            }
        });

        // Update feedback message based on incorrect selections
        if (numIncorrect > 0) {
            feedbackMessage.innerText = `You have ${numIncorrect} incorrect selections. Please review.`;
            feedbackMessage.className = 'red-text'; // Apply red text style
        } else {
            feedbackMessage.innerText = 'All selections are correct!';
            feedbackMessage.className = 'green-text'; // Apply green text style
        }
    });

    // Optional: Hide the submit button initially if required
    submitButton.style.display = 'none'; // Use style.display for hiding elements
});


// document.addEventListener('DOMContentLoaded', function () {
//     const selectableImages = document.querySelectorAll('.selectable-image');
//     const submitButton = document.getElementById('earth-self-check');
//     const feedbackMessage = document.getElementById('feedback-message');

//     selectableImages.forEach(image => {
//         image.addEventListener('click', function () {
//             image.classList.toggle('selected');
//         });
//     });

//     submitButton.addEventListener('click', function() {
//         let numIncorrect = 0;
//         selectableImages.forEach(image => {
//             // Check if selected and incorrect
//             if (image.classList.contains('selected') && image.classList.contains('incorrect-item')) {
//                 image.style.border = '2px solid red'; // Mark incorrect choices
//                 numIncorrect++;
//             }
//             // Check if selected and correct
//             else if (image.classList.contains('selected') && image.classList.contains('correct-item')) {
//                 image.style.border = '2px solid green'; // Mark correct choices
//             }
//         });
//     });
//     // Hide the submit button
//     $(submitButton).show();
// });

        // feedbackMessage.style.display = 'block';
        // if (numIncorrect == 0) {
        //     $(feedbackMessage).html("Amazing! All these items are made of <span class='green-text'><b>natural materials.</b></span>")
        //                     .css('background-color', '#DDEEEA') // Light green background
        //                     .show();
        //     $('#try-again-button').hide();
        //     $('#take-quiz-button').show();
        // } else {
        //     $(feedbackMessage).html("Make sure to choose <span class='red-text'><b>natural, non-metal materials</b></span> and <span class='red-text'><b>balanced, soft shapes.</b></span>")
        //                     .css('background-color', '#F7DAD2') // Light red background
        //                     .show();
        //     $('#try-again-button').show();
        //     $('#take-quiz-button').hide();
        // }
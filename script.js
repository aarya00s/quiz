$(document).ready(function() {
  const numberSteps = $('.quiz__step').length;

  function goToNextStep(currentIndex, selectedValue) {
      let nextIndex = currentIndex;

      if (currentIndex === 1) {
          if (selectedValue === "Standard") {
              // Show thank you message for Standard CV selection
              showThankYouMessage();
              return;
          } else {
              // Proceed to the next question for Custom Design
              nextIndex = 2;
          }
      } else if (currentIndex === 2) {
          if (selectedValue === "Minimalistic") {
              // Navigate to Question 3 for Professional/Bold under Minimalistic
              nextIndex = 3;
          } else {
              // If Creative is selected, skip directly to the summary
              // Assuming there's no dedicated question for "Creative" and you want to end the quiz
              nextIndex = 4;
          }
      } else if (currentIndex === 3) {
          // After selecting an option in Question 3, go directly to the summary
          showThankYouMessage();
          return;
      }
      else if (currentIndex === 4) {
        // After selecting an option in Question 3, go directly to the summary
        showThankYouMessage();
        return;
    }


      navigateToStep(nextIndex);
  }

  function navigateToStep(stepIndex) {
      $('.quiz__step--current').fadeOut(300, function() {
          $(this).removeClass('quiz__step--current');
          $('.quiz__step--' + stepIndex).fadeIn(300).addClass('quiz__step--current');
      });
  }

  // function showSummary() {
  //     // Show the summary content
  //     $('.quiz__step').fadeOut(300, function() {
  //         $(this).removeClass('quiz__step--current');
  //         // Assuming the summary content is dynamically generated or static
  //         // If dynamic, insert logic here to compile the summary
  //         $('.quiz__summary').fadeIn(300).addClass('quiz__step--current');
  //         $('#summary').html("Thank you for completing the quiz! Your preferences have been recorded.");
  //     });
  // }

  // function showThankYouMessage() {
  //     $('.quiz__step').hide().removeClass('quiz__step--current'); // Hide all steps
  //     let personalizedThanks = `<div class="thanks"><div class="thanks__tick">✔</div><h1 class="thanks__title">Thank you!</h1><p>Your personalized resume theme suggestion has been prepared.</p></div>`;
  //     $('.container').html(personalizedThanks);
  // }
  function showThankYouMessage() {
    // Determine the selected options
    const designChoice = $('input[name="design"]:checked').val();
    const colorChoice = $('input[name="color"]:checked').val();
    const sectionChoice = $('input[name="section"]:checked').val();
    const formatChoice = $('input[name="format"]:checked').val();

    let cvLink = ""; // Placeholder for the CV link
    let buttonText = "Click here"; // Text for the button

    // Determine the CV link based on the selections
    if (designChoice === "Standard") {
        cvLink = "https://resume-inky-psi.vercel.app/"; // Replace with your actual link
    } else if (sectionChoice === "Professional and Sleek" ) {
        cvLink = "https://resume-inky-psi.vercel.app/"; // Replace with your actual link
    } else if (sectionChoice === "Blue") {
        cvLink = "https://aarya00s.github.io/resume2_blue/"; // Replace with your actual link
    } else if (formatChoice === "Innovative and Clean") {
        cvLink = "https://aarya00s.github.io/resume3/"; // Replace with your actual link
    } else if (formatChoice === "Immersive and Artistic") {
        cvLink = "https://aarya00s.github.io/resume/"; // Assuming a creative CV for this choice
    }

    // Hide all steps and show the thank you message with the CV download button
    $('.quiz__step').hide().removeClass('quiz__step--current'); // Hide all steps
    let personalizedThanks = `
        <div class="thanks">
            <div class="thanks__tick">✔</div>
            <h1 class="thanks__title">Thank You!</h1>
            <p>Your personalized resume theme suggestion has been prepared.</p>
            <div class="submit__container">
                <a href="${cvLink}" class="submit" target="_blank">${buttonText}</a>
            </div>
        </div>`;
    $('.container').html(personalizedThanks);
}


  $('.answer__input').on('change', function() {
      const $currentStep = $(this).closest('.quiz__step');
      const currentIndex = $currentStep.data('question');
      const selectedValue = $(this).val();

      goToNextStep(currentIndex, selectedValue);
  });
});

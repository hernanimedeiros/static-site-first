////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Fill a tag with increased number. This is a version inpired by bar progression of w3schools. I've try more sofiticated versions with arrays but SetInterval and setTimeout dont behave like expected inside loop's*/
function growNumbers(arr_indx) {
  loop_speed = 10;
  var count_stop = setInterval(frame, loop_speed, arr_indx);
  var n_increase = 0;
  function frame(arr_indx) {
    if (n_increase >= document.getElementById("numbersStats").getElementsByTagName("SPAN")[arr_indx].getAttributeNode("value-target").value) {
      clearInterval(count_stop);
    } else {
      n_increase++; 
      document.getElementById("numbersStats").getElementsByTagName("SPAN")[arr_indx].innerHTML = n_increase * 1;
    }
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//********************Script for call owl carousel********************//
$(document).ready(function() {
 
  $("#owl-clients").owlCarousel({
    navigation : true,
    loop : true,
  });
 
});





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//********************Script for popover********************//
$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//********************Script for form validation adapted from w3schools********************//
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//********************Script for multi step form  adapted from w3schools********************//
var currentTab = 0; // Current tab is set to be the first tab (0)

// Display the current tab function
showTab(currentTab); 
function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submeter";
  } else {
    document.getElementById("nextBtn").innerHTML = "Próximo";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

//Button next function
function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

//Form validation function
function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

//Fill indicator function
function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}



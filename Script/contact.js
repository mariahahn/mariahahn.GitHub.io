//Maria Santos - Webproject

//  JQuery code
$(function() {
  
  // Double click handler for text input boxes
  $("input[type='text']").dblclick(function () {
    $(this).val("").next().text("*");
  })

  $("#join_list").click(
    function() {
      // Want to run both validation functions
      let validEmail = validateEmail();
      let validName  = validateName();
      let validMessage = validateMessage();
      
     // Submit the form if email and name are valid
      if (validEmail && validName && validMessage) {
        $("#email_form").submit(); 
      }
    }
  );
});

/*
 * validateEmail 
 * @return (boolean) - true if email is valid
 */
function validateEmail() {
  let isValid = true;
  const emailAddress1 = $("#email_address1");
  const emailAddress1Val = emailAddress1.val().trim();
  const pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
			
  // validate email 
  if (emailAddress1Val == "") { 
    emailAddress1.next().text("Field required.");
    isValid= false;
  } else if (! pattern.test(emailAddress1Val)) {
    emailAddress1.next().text("Type a valid email.");
    isValid = false;
  } else {
    emailAddress1.next().text("");  // Clear error or asterisk
  } 

  return isValid;
}

/**
 * @return (boolean) - true if name is valid
 */
function validateName() {
  let isValid = true;
  const firstName = $("#first_name");
  const firstNameVal = firstName.val().trim()  
  const pattern = /^([a-zA-Z]{2})/;

  if (firstNameVal == "") {
    firstName.next().text("Field required.");
    isValid = false;
  } else if (! pattern.test(firstNameVal)) {
    firstName.next().text("Type at least two letters");
    isValid = false;
  } else {
    firstName.next().text(""); // Clear error or asterisk
  }

  return isValid;  
}
/**
 * validate message field
 * @return (boolean) - true if name is valid
 */

function validateMessage() {
  let isValid = true;
  const message = $("#message");
  const messageVal = message.val().trim()  
  //const pattern = /^([a-zA-Z]{3})/;

  if (messageVal == "") {
    message.next().text("Field required.");
    isValid = false;
  } else {
    message.next().text(""); // Clear error or asterisk
  }

  return isValid;  
}
/* Validation
*tested invalid for name fiels - *# , 11 , 1 , 1% , "  "....
*
*tested invalid for email - a , 1 , @&....
* valid test for email - maria@gmail.com, 
* teste invalid  for message - " "...
*/

//validation extracted from class Assignment 5 with alterations

/* links of pages tested manualy and they are not broken. 
Page responsive in small screen.
tested and working in Google Crmoe, firefox and Safari */

/* links of pages tested manualy and they are not broken. 
Page responsive in small screen.
tested and working in Google Crmoe, firefox and Safari */
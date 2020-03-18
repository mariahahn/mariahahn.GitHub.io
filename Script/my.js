//Maria Santos - Webproject
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

/* links of pages tested manualy and they are not broken. 
Page responsive in small screen.
tested and working in Google Crmoe and Safari */

//bmicalculatior 
$(document).ready(function () {

  $("#form01").submit(function (e) {
    e.preventDefault();
    var weight = Number($("#weight").val());
    var height = Number($("#height").val());
    var finalBmi = 703 * (weight / (height * height));
    $("#bmi").val(finalBmi.toFixed(2));
  })

});
//validation
  /* tested - program dont accept letter - input NaN
 program only accept numbers */



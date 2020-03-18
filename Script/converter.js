//Maria Santos - Webproject
$(document).ready(function () {

    $("#form02").submit(function (e) {
      e.preventDefault();
      var fahr = Number($("#fahr").val())
      var celsius = Number(5/9 * ( fahr - 32));
      $("#celsius").val(celsius.toFixed(2));
    })
  
  });
  //validation
  /* tested - program dont accept letter - input NaN
  program can accept negative numbers - temperatures can be negative */

  /* links of pages tested manualy and they are not broken. 
Page responsive in small screen.
tested and working in Google Crmoe, firefox and Safari */
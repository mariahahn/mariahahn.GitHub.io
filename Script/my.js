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
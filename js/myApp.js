// DEFINE VARIABLES FOR THE ELEMENTS
const PswField = document.querySelector("#pswd");
const conf_Pswd = document.querySelector("#pswdConfam");
const ShowPswd = document.querySelector(".pswShow");
const hidePswd = document.querySelector(".pswHide");
const toggleBtn = document.querySelector(".pswToggle");

// VARIABLES FOR CONFIRM PASSWORD
const toggleBtn2 = document.querySelector(".pswToggle2");
const ShowPswd2 = document.querySelector(".pswShow2");
const hidePswd2 = document.querySelector(".pswHide2");

// CREATE TOGGLE FUNCTION

//  EVENT LISTENER FOR PASSWORD FIELD
toggleBtn.addEventListener(
  "click",
  (e = () => {
    if (PswField.type == "password") {
      // PASSWORD FIELD
      PswField.type = "text";
      ShowPswd.style.display = "none";
      hidePswd.style.display = "block";
    } else {
      PswField.type = "password";
      ShowPswd.style.display = "block";
      hidePswd.style.display = "none";
    }
  })
);

// EVENT LISTENER FOR CONFIRM PASSWORD FIELD
toggleBtn2.addEventListener(
  "click",
  (e = () => {
    if (conf_Pswd.type == "password") {
      conf_Pswd.type = "text";
      ShowPswd2.style.display = "none";
      hidePswd2.style.display = "block";
    } else {
      conf_Pswd.type = "password";
      ShowPswd2.style.display = "block";
      hidePswd2.style.display = "none";
    }
  })
);

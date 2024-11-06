// Check if Theres Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
  document.documentElement.style.setProperty("--main-color", mainColors);

  // Remove Active Class From All Colors List Item
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    // Add Active Class On Element With Data-Color === Local Storage Item
    if (element.dataset.color === mainColors) {
      // Add Active Class
      element.classList.add("active");
    }
  });
}

// Start top Scroll
let span = document.querySelector(".up");
let header = document.querySelector(".header");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    span.style.display = "block";
  } else {
    span.style.display = "none";
  }

  if (window.scrollY >= 1) {
    header.style.background = "#161718";
  } else {
    // Reset the style if needed when scrolling back up
    header.style.background = ""; // Resetting the background to its default state
  }
};


/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
span.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

/*~~~~~~~~~~~~~~~ MENU BUTTON ~~~~~~~~~~~~~~~*/
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".main-nav");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");

  cancelBtn.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
  };
};
/*~~~~~~~~~~~~~~~ END MENU BUTTON ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
const screenWidth = window.innerWidth;

let distanceValue;

if (screenWidth <= 768) {
  // If screen width is less than or equal to 768 pixels (e.g., for mobile devices)
  distanceValue = "10px"; // Adjusted distance value for smaller screens
} // Adjusted distance value for very small screens
else {
  // For larger screens (e.g., desktops, tablets)
  distanceValue = "60px";
}
/*~~~~~~~~~~~~~~~  ENdSCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/

//  ~~~~~~~~~~~~~~~ POP UP ~~~~~~~~~~~~~~~
// Function to open the popup
function openPopup(imageSrc) {
  document.getElementById('popupImage').src = imageSrc;
  document.getElementById('overlay').style.display = 'flex';
}

// Function to close the popup
function closePopup() {
  document.getElementById('overlay').style.display = 'none';
}

//  ~~~~~~~~~~~~~~~ END POP UP ~~~~~~~~~~~~~~~

//  ~~~~~~~~~~~~~~~ START CONTACT ~~~~~~~~~~~~~~~

function sendMail(event) {
  event.preventDefault(); // Prevent the default form submission

  let parms = {
    
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,

  };
  
  let messageError = document.getElementsByClassName('messageError');

  var nameRegex = new RegExp(/^[a-z]+[A-Z]?$/);
  let checkName = parms.name;
  var validName = nameRegex.test(checkName);
  if (checkName == "") {
      messageError[0].innerHTML = "Name Required*";
      messageError[0].style.color = "red";
      messageError[0].style.fontWeight = "bold";
  }
  else if (validName == false){
      messageError[0].innerHTML = "Digits and symbol not included*";
      messageError[0].style.color = "red";
      messageError[0].style.fontWeight = "bold";
  }
  var emailRegex = new RegExp(/^[a-z\d.]+@[a-z\d]+.([a-z]{2,8})(.[a-z]{2,8})?$/);
  let checkEmail = parms.email;
  var validEmail = emailRegex.test(checkEmail);
  if (checkEmail == "") {
      messageError[1].innerHTML = "Email Required*";
      messageError[1].style.color = "red";
      messageError[1].style.fontWeight = "bold";
  }
  else if (validEmail == false){
      messageError[1].innerHTML = "Email should be like : example@contact.com*";
      messageError[1].style.color = "red";
      messageError[1].style.fontWeight = "bold";
  }

  var subjetRegex = new RegExp(/^[a-z.,][A-Z.,]?$/);
  let checkSubject = parms.subject;
  var validSubject = subjetRegex.test(checkSubject);
  if (checkSubject == "") {
      messageError[2].innerHTML = "Subject Required*";
      messageError[2].style.color = "red";
      messageError[2].style.fontWeight = "bold";
  }
  else if (validSubject == false){
      messageError[2].innerHTML = "Subject invalid*";
      messageError[2].style.color = "red";
      messageError[2].style.fontWeight = "bold";
  }

  var messageRegex = new RegExp(/^[a-z\d.,][A-Z.,][0-9]?$/);
  let checkMessage = parms.message;
  var validMessage = messageRegex.test(checkSubject);
  if (checkMessage == "") {
      messageError[3].innerHTML = "Subject Required*";
      messageError[3].style.color = "red";
      messageError[3].style.fontWeight = "bold";
  }
  else if (validMessage == false){
      messageError[3].innerHTML = "Subject invalid*";
      messageError[3].style.color = "red";
      messageError[3].style.fontWeight = "bold";
  }
  else {
    emailjs.send("service_mb5u1nl", "template_gwg8zyn", parms)
      .then(function () {
        alertify.alert("Email sent successfully!");
        document.getElementById("form").reset();
      })
      .catch(function (error) {
        console.error("Error sending email:", error);
      });
  }
}

//  ~~~~~~~~~~~~~~~ END CONTACT ~~~~~~~~~~~~~~~

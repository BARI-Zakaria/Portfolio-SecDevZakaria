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

//  ~~~~~~~~~~~~~~~ START CONTACT FORM ~~~~~~~~~~~~~~~


function sendMail(event) {
  event.preventDefault(); // Prevent the default form submission

  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  
  let messageError = document.getElementsByClassName('messageError');
  let isValid = true; // Flag to track form validity

  // Name validation
  var nameRegex = /^[a-zA-Z\s]+$/;
  let checkName = parms.name;
  var validName = nameRegex.test(checkName);
  if (checkName == "") {
    messageError[0].innerHTML = "Name Required*";
    messageError[0].style.color = "red";
    messageError[0].style.fontWeight = "bold";
    isValid = false;
  } else if (checkName.length > 15) {
    messageError[0].innerHTML = "Invalid Name*";
    messageError[0].style.color = "red";
    messageError[0].style.fontWeight = "bold";
    isValid = false;
  } else if (!validName) {
    messageError[0].innerHTML = "Digits and symbols not allowed*";
    messageError[0].style.color = "red";
    messageError[0].style.fontWeight = "bold";
    isValid = false;
  } else {
    messageError[0].innerHTML = ""; // Clear error message
  }

  // Email validation
  var emailRegex = /^[a-zA-Z\d._%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  let checkEmail = parms.email;
  var validEmail = emailRegex.test(checkEmail);
  if (checkEmail == "") {
    messageError[1].innerHTML = "Email Required*";
    messageError[1].style.color = "red";
    messageError[1].style.fontWeight = "bold";
    isValid = false;
  } else if (!validEmail) {
    messageError[1].innerHTML = "Email should be like: example@contact.com*";
    messageError[1].style.color = "red";
    messageError[1].style.fontWeight = "bold";
    isValid = false;
  } else {
    messageError[1].innerHTML = ""; // Clear error message
  }

  // Subject validation
  var subjectRegex = /^[a-zA-Z.,!\s]+$/;
  let checkSubject = parms.subject;
  var validSubject = subjectRegex.test(checkSubject);
  if (checkSubject == "") {
    messageError[2].innerHTML = "Subject Required*";
    messageError[2].style.color = "red";
    messageError[2].style.fontWeight = "bold";
    isValid = false;
  } else if (checkSubject.length > 30) {
    messageError[2].innerHTML = "Subject too long*";
    messageError[2].style.color = "red";
    messageError[2].style.fontWeight = "bold";
    isValid = false;
  } else if (!validSubject) {
    messageError[2].innerHTML = "Invalid Subject*";
    messageError[2].style.color = "red";
    messageError[2].style.fontWeight = "bold";
    isValid = false;
  } else {
    messageError[2].innerHTML = ""; // Clear error message
  }

  // Message validation
  var messageRegex = new RegExp(/^[a-zA-Z0-9.,\s]+$/);
  let checkMessage = parms.message;
  var validMessage = messageRegex.test(checkSubject);
  if (checkMessage == "") {
      messageError[3].innerHTML = "Message Required*";
      messageError[3].style.color = "red";
      messageError[3].style.fontWeight = "bold";
      isValid = false;
  } 
  else if (checkMessage.includes("?") || checkMessage.includes("!") || checkMessage.includes("@") || checkMessage.includes("#") || checkMessage.includes("§") || checkMessage.includes("/") || checkMessage.includes("^") || checkMessage.includes("<") || checkMessage.includes(">") || checkMessage.includes("%") || checkMessage.includes("$") || checkMessage.includes("~") || checkMessage.includes("&") || checkMessage.includes("(") || checkMessage.includes(")") || checkMessage.includes("°") || checkMessage.includes("+") || checkMessage.includes("-") || checkMessage.includes("*")){
    messageError[3].innerHTML = "Digits and symbols not allowed*";
    messageError[3].style.color = "red";
    messageError[3].style.fontWeight = "bold";
    isValid = false;
  }
  else if (!validMessage){
      messageError[3].innerHTML = "Invalid Message*";
      messageError[3].style.color = "red";
      messageError[3].style.fontWeight = "bold";
      isValid = false;
  } else {
    messageError[3].innerHTML = ""; // Clear error message
  }

  // If form is valid, send email
  if (isValid) {
    emailjs.send("service_mb5u1nl", "template_gwg8zyn", parms)
      .then(function () {
        alertify.alert("Email sent successfully!");
        document.getElementById("form").reset(); // Reset the form
      })
      .catch(function (error) {
        alertify.alert("Error sending email:", error);
      });
  }
}
//  ~~~~~~~~~~~~~~~ END CONTACT FORM ~~~~~~~~~~~~~~~

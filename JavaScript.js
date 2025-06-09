/*const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".order__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".event__content", {
  duration: 1000,
});


-----------------------------------------------*/

window.addEventListener("scroll",function(){
  const header=document.querySelector("header");
  header.classList.toggle("sticky",window.scrollY>0);
})
// script.js



function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const people = document.getElementById('people').value;

  // Basic validation
  if (!name || !email || !date || !time || !people) {
      alert("Please fill out all fields.");
      return false;
  }
  return true; // Form is valid
}

function setMinDate() {
  const today = new Date(); // Get today's date
  const day = String(today.getDate()).padStart(2, '0'); // Add leading zero
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = today.getFullYear(); // Get the current year
  const minDate = `${year}-${month}-${day}`; // Format date as YYYY-MM-DD

  document.getElementById('date').setAttribute('min', minDate); // Set the min attribute
}

// Call the function on page load
window.onload = setMinDate;

function setMinTime() {
  const dateInput = document.getElementById('date');
  const timeInput = document.getElementById('time');

  // Check if the date is set
  if (dateInput.value) {
      const selectedDate = new Date(dateInput.value);
      const now = new Date();

      // Check if the selected date is today
      if (selectedDate.toDateString() === now.toDateString()) {
          const hours = now.getHours();
          const minutes = now.getMinutes();
          // Set the minimum time to the current time
          timeInput.setAttribute('min', `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`);
      } else {
          // If the date is in the future, allow any time
          timeInput.removeAttribute('min');
      }
  } else {
      // If no date is selected, remove the minimum time attribute
      timeInput.removeAttribute('min');
  }
}

// Set minimum date on page load
window.onload = setMinDate;

// Add event listener to date input to set minimum time when a date is selected
document.getElementById('date').addEventListener('change', setMinTime);

function showLogin() {
  event.preventDefault();
  document.getElementById('login').classList.add('active');
  document.getElementById('register').classList.remove('active');
}

function showRegistration() {
  event.preventDefault();
  document.getElementById('register').classList.add('active');
  document.getElementById('login').classList.remove('active');
}
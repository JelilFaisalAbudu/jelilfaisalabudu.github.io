let myNav = document.getElementById('navBar');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 120 || document.documentElement.scrollTop >= 120 ) {
        myNav.classList.add("navbar-bg-white");
    } 
    else {
        myNav.classList.remove("navbar-bg-white");
    }
};


// Add active css class to the current element

let navContainer = document.getElementById("nav");

// Get all buttons with class="btn" inside the container
let navLinks = navContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

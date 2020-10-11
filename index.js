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

/* window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
			} else {
				document.querySelector(`nav a[href="#${id}"]`).classList.remove('active');
			}
		});
	});

	// Track all sections that have an `id` applied
	document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
	});
	
});
*/
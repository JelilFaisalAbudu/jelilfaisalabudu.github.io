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

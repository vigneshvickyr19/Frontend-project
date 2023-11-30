

// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
// let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  // body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = () =>{
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  // body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}


// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}


function revealFunction () {
   
    window.sr= ScrollReveal({ duration: 1350, distance: '250px',
    easing: 'ease-out' });
   
    sr.reveal('.reveal-left', {origin: 'left', reset:false});
    sr.reveal('.reveal-right', {origin: 'right', reset:false});
    sr.reveal('.reveal-top', {origin: 'top', reset:false});
    sr.reveal('.reveal-bottom', {origin: 'bottom', reset:false});

    }

    // first of all, on load we call our magic
    window.addEventListener('load', () => {
    revealFunction();
    })




    // first image change
    var index = 0;
    change();

    function change() {

        //Collect all images with class 'slides'
        var x = document.getElementsByClassName('slides');

        //Set all the images display to 'none' (invisible)
        for(var i = 0; i < x.length; i++) { 
            x[i].style.display = "none"; 
        }

        //Increment index variable
        index++;

        //Set index to 1 if it's greater than the amount of images
        if(index > x.length) { 
            index = 1; 
        }

        //set image display to 'block' (visible)
        x[index - 1].style.display = "block";

        //set loop to change image every 3000 milliseconds (3 seconds)
        setTimeout(change, 2000);
    }


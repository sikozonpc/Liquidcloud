window.onload = ()  =>  console.log("Hello user! If you are not a developer you shouln't be here.");


// Remove animation classes from AOS library at mobile breakpoint
window.onresize = removeFadeEffects();
window.onload =   removeFadeEffects();

const creditsPopup = document.querySelector("#creditsPopup");
const hamButton = document.querySelector(".fa-bars");
const mobileNav = document.querySelector(".mobile");


function removeFadeEffects() {
    let currentScreenWidth = window.innerWidth;

    if(currentScreenWidth <= 500) {
        let fade = document.querySelectorAll("#fade");
     
        for(let i=0; i < fade.length; i++){
            fade[i].attributes["data-aos"].value = "HIDDEN";
        }
    }
}


// Mobile Navbar 
function openMobile() {
    mobileNav.classList.add("open");
}
function closeMobile() {
    mobileNav.classList.remove("open");
}

hamButton.addEventListener("click", openMobile);
mobileNav.addEventListener("click", closeMobile);  



// When the user scrolls down x from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById("topButton").style.transform = "translateY(0)";
  } else {
    document.getElementById("topButton").style.transform = "translateY(100vh)";
  }
}


// When the user clicks on the button, scroll to the top of the document
function toTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }



// Credits popup code 
function showCreditsPopup() {
  creditsPopup.style.transform = "translateY(0)";

}
function hideCreditsPopup() {
  creditsPopup.style.transform = "translateY(100vh)";
}
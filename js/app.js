window.onload = ()  =>  console.log("Hello user! If you are not a developer you shouln't be here.");

// Remove animation classes from AOS library at mobile breakpoint
let currentScreenWidth = window.innerWidth;
console.log(currentScreenWidth);
if(currentScreenWidth <= 500) {
    let fade = document.querySelectorAll("#fade");
 
    console.log(fade)
    for(let i=0; i < fade.length; i++){
        fade[i].attributes["data-aos"].value = "HIDDEN";
    }
    
    console.log(fade)
}
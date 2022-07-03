let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".close");
let nav = document.querySelector("nav");

function openContent(){
    if(nav.style.display === "block"){
        nav.style.display = "none";
        close.style.display = "none";
        hamburger.style.display = "block";
        // console.log("999")
    }else{
        nav.style.display = "block";
        close.style.display = "block";
        hamburger.style.display = "none";
        // console.log("ddd")
    }
}

hamburger.addEventListener("click", openContent);
close.addEventListener("click", openContent);

// testimonial call nav
let testimonial = document.querySelectorAll(".testimonial aside");
let testimonialBox = document.querySelector(".testimonial");
let testimonialNav = document.querySelectorAll(".testimonialNav small")

// console.log(testimonialNav);
function changeTestimony(){
        testimonial[0].style.visibility = "visible";
        testimonial[1].style.visibility = "hidden";
        testimonial[2].style.visibility = "hidden";
        testimonial[3].style.visibility = "hidden";
        testimonialNav[0].style.backgroundColor = "var(--Bright-Red)";
        testimonialNav[1].style.backgroundColor = "transparent";
        testimonialNav[2].style.backgroundColor = "transparent";
        testimonialNav[3].style.backgroundColor = "transparent";
}
function changeTestimony1(){
    testimonial[0].style.visibility = "hidden";
        testimonial[1].style.visibility = "visible";
        testimonial[2].style.visibility = "hidden";
        testimonial[3].style.visibility = "hidden";
        testimonialNav[1].style.backgroundColor = "var(--Bright-Red)";
        testimonialNav[0].style.backgroundColor = "transparent";
        testimonialNav[2].style.backgroundColor = "transparent";
        testimonialNav[3].style.backgroundColor = "transparent";
}
function changeTestimony2(){
        testimonial[0].style.visibility = "hidden";
        testimonial[1].style.visibility = "hidden";
        testimonial[2].style.visibility = "visible";
        testimonial[3].style.visibility = "hidden";
        testimonialNav[2].style.backgroundColor = "var(--Bright-Red)";
        testimonialNav[0].style.backgroundColor = "transparent";
        testimonialNav[1].style.backgroundColor = "transparent";
        testimonialNav[3].style.backgroundColor = "transparent";
}
function changeTestimony3(){
    testimonial[0].style.visibility = "hidden";
    testimonial[1].style.visibility = "hidden";
    testimonial[2].style.visibility = "hidden";
    testimonial[3].style.visibility = "visible";
    testimonialNav[3].style.backgroundColor = "var(--Bright-Red)";
    testimonialNav[0].style.backgroundColor = "transparent";
    testimonialNav[1].style.backgroundColor = "transparent";
    testimonialNav[2].style.backgroundColor = "transparent";
}

testimonialNav[0].addEventListener("click",changeTestimony);
testimonialNav[1].addEventListener("click",changeTestimony1);
testimonialNav[2].addEventListener("click",changeTestimony2);
testimonialNav[3].addEventListener("click",changeTestimony3);




















// let counter = 1;
// let size = testimonial[0].clientWidth;
// console.log(size);

// testimonialBox.style.transform = "translateX(`${-size} * ${counter}px`)"
// console.log(`${-size} * ${counter}px`)

// Mouse hover addEventListener
// testimonialBox.addEventListener("mouseleft", () => {})
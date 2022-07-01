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
close.addEventListener("click", openContent)


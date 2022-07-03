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

// asiignment solution 1
  let arr = [2,3,4,5];
function sumOfNumbers(arrayOfNumbers) {
    let sum = 0;
    for(let i = 0; i < arrayOfNumbers.length; i++){
    //   sum += arrayOfNumbers[i];
        console.log(sum += arrayOfNumber)
    }
      return arrayOfNumbers.length;
  }

// sumOfNumbers(arr);

// // assignment solution 2
// function countEvenNumbers(arrayOfNumbers) {
    
//     for(let i = 0; i < arrayOfNumbers.length; i++){
//         let even = arrayOfNumbers[i] % 2 === 0;
//         let total = arrayOfNumbers[i];
//         if(even == true){
//             console.log(`"even" ${total}`)
//         }else{
//             console.log("eee")
//         }
        
//     }
//     return arrayOfNumbers.length;
// }

// countEvenNumbers(arr);

function celsiusToFahrenheit(arrayOfNumbers) {
    let ToFahrenheit = [];
    
    for(let i = 0; i < arrayOfNumbers.length; i++){
        let formula = Math.floor((arrayOfNumbers[i] * 1.8) + 32);
        ToFahrenheit.push(formula);
        console.log(ToFahrenheit);
    }
    return arrayOfNumbers;
}

celsiusToFahrenheit(arr);


let testimonial = document.querySelectorAll(".testimonial aside");
let testimonialBox = document.querySelector(".testimonial");

let counter = 1;
let size = testimonial[0].clientWidth;
console.log(size);

testimonialBox.style.transform = "translateX(`${-size} * ${counter}px`)"
console.log(`${-size} * ${counter}px`)

// Mouse hover addEventListener
testimonialBox.addEventListener("mouseleft", () => {})
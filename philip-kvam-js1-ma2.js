// question 1
const myFunctionExpression = function () {
    console.log("Philip Kvam");
};
myFunctionExpression();
// question 2

const selectButton = document.querySelector(".btn");

function callAfterClick () {
    console.log("I was clicked");
};
selectButton.addEventListener("click", callAfterClick);

// question 3

const textInput = document.querySelector("#firstName");

function callAfterAKeyIsReleased(event) {
    console.log("value: ", event.target.value);
};
textInput.addEventListener("keydown", callAfterAKeyIsReleased);

// question 4
let hoverButton = document.querySelector("[data-animal='dog']");

function addHoverClass() {
    console.log(hoverButton.classList)
    hoverButton.classList.add("hover");
    

};
hoverButton.addEventListener("mouseover", addHoverClass);


// question 5
let hoverButton = document.querySelector("[data-animal='dog']");
function removeHoverClass() {
    console.dir(hoverButton.classList)
    hoverButton.classList.remove("hover");
    

};
hoverButton.addEventListener("mouseout", removeHoverClass);


// question 6
const listTags = document.querySelectorAll("li");


for(let i=0; i< listTags.length; i++) {
    listTags[i].addEventListener("mouseover", logTheValue);
}

function logTheValue (event) {
    console.log(event.target.dataset);
    

}


// question 7

const animal="cow";

switch(animal) {
    case "cat":
        console.log("Meow");
        break;
    case "cow":
        console.log("Moo");
        break;
    case "bird":
        console.log("Tweet");
        break;
 
    default:
        console.log("Harrumph");

    
}


// question 8
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheep) {
    console.log(sheep);
});

// question 9
let counter = 0;
const intervalId = setInterval(logHello, 500);
function logHello() {
console.log("hello");
if(counter === 5) {
    clearInterval(intervalId);
}
counter++;

}
 


// question 10

const container= document.querySelectorAll(".container");
let counter=0;
setInterval(updateDiv, 2000);
function updateDiv() {
    console.log("Text updated");
    container.innerHTML=counter;
    
    counter++;

}
const intervalId = setInterval(updateDiv, 2000);


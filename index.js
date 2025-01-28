// let name = "Srinivas";
// let name = "dayakar";
// console.log(name);
// let name = "Telangana";
// name = "Andhra";
// console.log(name);

// const state = "Karnataka";

// console.log(state);

// scope {}
// var - is function scope
// let - is block scope as well as function scope
// var -we can access before intialization it will give undefined
// let const -  will give ref error if we acces before intialization this is called temporial deadzone
var state = "Telangana";
// function getState() {
//   let state = "Orissa";
//   console.log(state);
// }
// getState();
// if (true) {
//   let state = "karnataka";
//   console.log(state);
// }
// console.log(state);

const Movie = "Bahubali";
let tag = document.querySelector(".ptag");
tag.addEventListener("mouseover", redirect);
function redirect() {
  window.location = "https://www.youtube.com/";
}
let linkName = "https://www.youtube.com/";

console.log(`Please click hear ${linkName}`);
console.log("Please click hear2 " + linkName);

let test = "25";
let num = true;
if (typeof test == "string") {
  //code excute
  //   console.log("true");
} else {
  // code excute
  //   console.log("Not true");
}

//= is assign the value
//== is to check the equality
///=== is to check the equality as well as type

let num1 = 20; // number
let num2 = "20"; // string
console.log(num1 === num2);

let name = "dayakar";
let names = "Srinivas";
let vij = "Vijay";
// array index always start from 0
let persons = ["dayakar", "Srinivas", "vijay"];
persons.push("ravi");
persons.unshift("shiva");
persons.pop();
persons.shift();
console.log(persons);
let arr = [true, "dayakar", 25, {}];

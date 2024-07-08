// //ESSENTIAL

// //1.Write a function called myFirstFunction that takes no parameters and does nothing, then invoke the function.

// let myFirstFunction = () => {};
// //2.Write a function called helloWorld that prints “Hello World” to the console and invoke it. HINT: Use “console.log()”.

// function helloWorld () {
//     console.log("hello world ")
// }

// // 3.Write a function called returnFive that takes no parameters and returns the number 5 when invoked. HINT: Use “console.log()”.


// let returnFive = () => 5

// // 4.Write a function called helloWorldAgain that takes no parameters and returns the string “Hello World Again” when invoked.

// let helloWorldAgain = function () {
//     return "hello world again"
// }
// //5. Write a function called returnParameter that takes one parameter and returns the parameter when invoked.
// let returnParemeters =(x)=>x;
// //9.Write a function called stringLength that takes a string as a parameter and when invoked returns the length of the string as a number. HINT: use “.length”.
// let stringLength =(str)=>str.length;

// let concatTowStrings =(str1,str2) => str1.concat(" "+str2)

// // 6.Write a function called add that takes two numbers as parameters and when invoked adds them together then return the result.
// function add(number1,number2){
//     return number1+number2
// }

// // 7.Write a function called subtract that takes two numbers as parameters and when invoked subtracts them from each other then returns the result.

// let substract = function(number1,number2){
//    return Math.abs(number1-number2)
// }
// function test(){
//     console.log(12)
//     console.log(13)
//     console.log(14)
//     console.log(15)
//     return 12
//     return 13
//     return 14 
//     return 15
// }
let n1 = document.getElementById("output")

function refresh() {
    location.reload()
}

const el0 = document.getElementById("0")
const el1 = document.getElementById("1")
const el2 = document.getElementById("2")
const el3 = document.getElementById("3")
const el4 = document.getElementById("4")
const el5 = document.getElementById("5")
const el6 = document.getElementById("6")
const el7 = document.getElementById("7")
const el8 = document.getElementById("8")
const el9 = document.getElementById("9")
const elO = document.getElementById(".")
const elP = document.getElementById("+")
const elM = document.getElementById("*")
const elI = document.getElementById("-")
const elD = document.getElementById("/")
const elE = document.getElementById("=")

el0.addEventListener("click", add0);
el1.addEventListener("click", add1);
el2.addEventListener("click", add2);
el3.addEventListener("click", add3);
el4.addEventListener("click", add4);
el5.addEventListener("click", add5);
el6.addEventListener("click", add6);
el7.addEventListener("click", add7);
el8.addEventListener("click", add8);
el9.addEventListener("click", add9);
elO.addEventListener("click", addO)
elP.addEventListener("click", addP);
elM.addEventListener("click", mult);
elI.addEventListener("click", Minu);
elD.addEventListener("click", divi);
elE.addEventListener("click", Equals);

function add0() {
    n1.innerHTML += 0
}
function add1() {
    n1.innerHTML += 1
}
function add2() {
    n1.innerHTML += 2
}
function add3() {
    n1.innerHTML += 3
}
function add4() {
    n1.innerHTML += 4
}
function add5() {
    n1.innerHTML += 5
}
function add6() {
    n1.innerHTML += 6
}
function add7() {
    n1.innerHTML += 7
}
function add8() {
    n1.innerHTML += 8
}
function add9() {
    n1.innerHTML += 9
}
function addO() {
    n1.innerHTML +="."
}
function addP() {
    n1.innerHTML += "+"
}
function mult() {
    n1.innerHTML += "*"
}
function Minu() {
    n1.innerHTML += "-"
}
function divi() {
    n1.innerHTML += "/"
}
function Equals() {
    n1.innerHTML = eval(n1.innerHTML)
}
//update
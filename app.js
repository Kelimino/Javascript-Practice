var life = 100 ;
life = life - 10;
// life is equal to '90'
life = life * 10;
//This is a note
console.log(life);


//this is a boolean base on false or true
var checkout = false;
var box = null;
console.log(box)

//you can modify let
let people = 100;

people = people - 50;

console.log(people)


//once 'const" is declared, you cant change it
// const Apple = 100;
// Apple = 50; // this is an error


 // shift + Alt + down arrow to multiply
function logger() {
    console.log('party Time');
    console.log('party Time');
    console.log('party Time');
    console.log('party Time');
    
}
logger();

function adder(num1, num2) {
    console.log(num1 + num2)
}

adder(5, 10);

//varaible avec la value 'kellig
const name = 'kellig';
const age = 14;
const brand = 'kelligart'

//déclaration d'une fonction name toUpper
function toUpper(text) {
    const upperCase = text.toUpperCase();
    console.log(upperCase)
}
//invoque la fonction
toUpper(name)
toUpper(brand)

//autre méthode d'une déclaration d'une fonction name toUpper
const toLower = function () { }

//autre méthode plus moderne et plus courte d'une déclaration d'une fonction name toUpper
const toNormal = () => {}


console.log("hello it's me kellig")
// or use ' \' to add a white space
console.log('hello it\'s me kellig')


//use backticks for log ' `' on Mac
console.log(`hello it's me ${name} aka ${brand}`)

const combined = name + brand;
//give you the type of variable
console.log(typeof combined)
console.log(typeof age)

if (age >= 18) {
    console.log(`You are major`)  
}
else if (age < 15) {
    console.log(`You are very young`)  
    
}
else {

    console.log(`You are too young`) 
    
}

const dice1 = 6;
const dice2 = 3;


//use ' && '  to add another strict condition

if (dice1 === 6 && dice2 === 5) {
    console.log(`You rolled a doubled`) 
} else {
    console.log(`You missed a doubled`) 
}

//use ' || ' to switch if one of theme are true
if (dice1 === 6 || dice2 === 3) {
    console.log(`You rolled a doubled`) 
} else {
    console.log(`You missed a doubled`) 
}

//Array
const day = ["sleep", "eat", "work", "sport","film"];

//Add item in array
day.push("drive");
//Remove last item in array
day.pop();
//Remove first item in array
day.shift();

//add new first item in array
day.unshift("sex");
console.log(day)
console.log(day.indexOf("eat") + ' position of eat');
console.log(day[2] + ' is 2');

const film = day.indexOf('film')
console.log(film)

//Object
const user = {
    name: "kelligart",
    age: 24,
    job: "Designer",
    skill: ["design", "code", "art"],
    //write a function inside an object
    resume: function () {
        //parse property 'name' of object
        console.log(this.name)
    }
}
console.log(user.skill);

//all property object of window
console.log(this);

//fire a function inside an object
user.resume()

//fucntion to resolve the property age of object user
function sayAge() {
    console.log(user.age)
}
sayAge()

//tableau of names
const names = ["leo", "paul", "max", "joe"];

// loop 'of' return property
for (prenom of names) {
    console.log(`Hello there ${prenom}`);
    if (prenom === "paul") {
        console.log(`Paul is in my list`);
        break;
        
    }
    
}
// loop 'in' return index
for (prenom in names) {
    console.log(prenom);
}

//loop while is true

let loading = 0;

while (loading < 100) {
    console.log(`this site is still loading`);
    loading++; 
}

const text = document.querySelector('.title')
const btn = document.querySelector('.btn')

// // event name callback function on click
btn.addEventListener("click", function () {
    // texte add class "change" css
    text.classList.toggle('change'); 
})
console.log(text.innerHTML)

 // parse string in variable
const number = document.querySelector("ul");
const addNumber = document.querySelector(".addNumber");
const bTn = document.querySelector(".btn");

bTn.addEventListener("click", function () {
    
    const newLi = document.createElement('li');
     // get the value of the input field
    const liContent = document.createTextNode(addNumber.value);
    newLi.appendChild(liContent);
    number.appendChild(newLi)
});

const numberList = document.querySelectorAll("ul li");
// click on each list
for (list of numberList) {
    list.addEventListener("click", function () {
        this.style.color= "red"
    })
    
};
console.log(addNumber.value)

let list = [1,2,3,4];
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}
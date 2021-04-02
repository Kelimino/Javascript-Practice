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
const day = ["sleep", "eat", "work", "sport"];

console.log(day);
const myAge = 28;
//created a variable and set it to my age.
let earlyYears = 2;
earlyYears *=10.5;
let laterYears = myAge - 2;
laterYears *= 4;
//Multiplied the laterYears variable by 4 to calculate the number of dog years accounted for by my later years.

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears;
myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears)

let myName;
myName = 'Sevde';
console.log(myName.toLowerCase());
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
'use strict'; //adds easier error correcting and makes it easier to find bugs. 
//Cannot use reserved identifiers, and invalid variables. 

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

const interface = 'Audio'; 

function logger() {
    console.log("My name is Jacob");
}

//calling, running or invoking the function all mean the same thing.
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//Function Decleration. Decleration functions can be called before defining the function itself. Due to a process called hoisting.
const age1 = calcAge1(1996);
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
console.log(age1);

//Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1996);
console.log(age1, age2)

//Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow function. No need for a return if its a simple function.
const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(1996);
console.log(age3);


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    //return retirement
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1996, 'Jacob'));
console.log(yearsUntilRetirement(1980, 'Bob'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}
    
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement
    } else {
        console.log(`${firstName} has already retired`);
        return -1;


        //return `${firstName} retires in ${retirement} years.`;
    }
}
console.log(yearsUntilRetirement(1991, 'jacob'));
console.log(yearsUntilRetirement(1970, 'mike'));

const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas)

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win!(${avgDolphins} to ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win!(${avgKoalas} to ${avgDolphins})`);
    } else { console.log("No team wins..."); }
}

checkWinner(scoreDolphins, scoreKoalas);


scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas)

const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Petter';

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jacob';
const jacob = [firstName, 'Black', 2037 - 1996, 'teacher', friends];
console.log(jacob);
console.log(jacob.length);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1992, 1967, 2002, 2010, 2018];
console.log(calcAge(years));

const age1 = calcAge(years[0]);

const friends = ['Micheal', 'Steven', 'Peter'];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

//Add values to beggining of array
friends.unshift('John');
console.log(friends);

friends.pop(); //Removes last value in array
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23)
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));*/


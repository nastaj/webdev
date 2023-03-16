'use strict';

/* *****************************
/* Lecture: DEFAULT PARAMETERS */
/***************************** */
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  bookings.push(booking);
  console.log(booking);
};

createBooking('LH123');
createBooking('LH235', 2);
createBooking('BE206', undefined, 199);
*/
/* *************************************************
/* Lecture: PASSING ARGUMENTS: VALUE VS. REFERENCE */
/***************************** *********************/
/*
const flight = 'LH234';
const jakub = {
  name: 'Jakub Nasta',
  passport: 62377856,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 62377856) {
    console.log('Checked in');
  } else {
    console.log('Wrong passport!');
  }
};

checkIn(flight, jakub);
// console.log(flight);
console.log(jakub);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jakub;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(jakub);
*/
/* *************************************************
/* Lecture: FUNCTIONS ACCEPTING CALLBACK FUNCTIONS */
/***************************************************/
/*
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Jakub', 'Martha', 'Adam'].forEach(high5);

// Exercises
let ingredients = [];

const showPizzaIngredients = function () {
  ingredients = [
    'dough',
    'water',
    'salt',
    'olive',
    'pepperoni',
    'cheese',
    'tomato sauce',
  ];
  return ingredients.join(', ') + '.';
};

const showCakeIngredients = function () {
  ingredients = [
    'flour',
    'milk',
    'sugar',
    'chocolate',
    'cocoa',
    'baking powder',
  ];
  return ingredients.join(', ') + '.';
};

const showRecipe = function (dish, dishFn) {
  console.log(
    `In order to make a delicious ${dish}, you will need: ${dishFn()}`
  );
};

showRecipe('pizza', showPizzaIngredients);
showRecipe('cake', showCakeIngredients);

///////////////////////////////
const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const showFullName = function (firstName, lastName) {
  return (
    firstName[0].toUpperCase() +
    firstName.slice(1).trim() +
    ' ' +
    lastName.replace(lastName[0], lastName[0].toUpperCase())
  );
};

const showCredentials = function (age, name) {
  console.log(`You are ${name}, aged ${age}.`);
  age > 18
    ? console.log('You can have a drivers license!')
    : console.log('You cannot have a drivers license yet. ');
};

showCredentials(calcAge(2002), showFullName('John', 'Smith'));
*/
/* ****************************************
/* Lecture: FUNCTIONS RETURNING FUNCTIONS */
/******************************************/
/*
// Function expression
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// Arrow function
// const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Jakub');
greeterHey('Steven');

greet('Hello')('Jakub');

///////////////////////////////
const gradesJakub = [60, 64, 70, 47, 56, 78, 65, 79];
const gradesSteve = [];

const populateGrades = function (arr) {
  for (let i = 0; i < 8; i++) {
    arr.push(Math.trunc(Math.random() * 100) + 1);
  }
};

populateGrades(gradesSteve);
console.log(gradesSteve);

const getAverage = function (grades) {
  let sum = 0;
  let average = 0;
  for (const grade of grades) {
    sum += grade;
  }
  average = Math.round((sum / grades.length) * 10) / 10;
  return average;
};

const showGrades = function (grades, average) {
  return function (name) {
    console.log(`You are ${name}.`);
    console.log(`Your grades are: ${[...grades]}`);
    console.log(`Average of your grades is: ${average}`);
  };
};

const averageJakub = showGrades(gradesJakub, getAverage(gradesJakub));
averageJakub('Jakub');

const showGradesArr = (grades, average) => name =>
  console.log(
    `You are ${name} \nYour grades are: ${[
      grades.toString(),
    ]} \nAverage of your grades is: ${average}`
  );

const averageSteve = showGradesArr(gradesSteve, getAverage(gradesSteve));
averageSteve('Steve');
*/
/* ****************************************
/* Lecture: CALL AND APPLY METHODS */
/******************************************/

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jakub Nasta');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

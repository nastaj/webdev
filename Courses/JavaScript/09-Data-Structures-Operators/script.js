'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderCategory: function (categoriesIndex, mainIndex) {
    return [this.categories[categoriesIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  specialOffer: function ({
    day,
    categoryIndex,
    starterIndex,
    mainIndex,
    discount,
  }) {
    console.log(
      `Special offer for ${this.categories[categoryIndex]} ${day}! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} on ${discount} discount! Visit our restaurant ${this.name} at ${this.location}.`
    );
  },
};

///////////////////////////////
//Lecture: DESTRUCTURING OBJECTS
///////////////////////////////

// Destructuring with functions
restaurant.specialOffer({
  day: 'Saturday',
  categoryIndex: 3,
  starterIndex: 3,
  mainIndex: 2,
  discount: '20%',
});

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

// Destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Custom variable names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

const {
  openingHours: {
    thu: { open: thuOpen, close: thuClose },
  },
} = restaurant;
console.log(thuOpen, thuClose);

// Exercise
const snacks = {
  chips: {
    name: 'Pringles',
    salty: true,
  },
  candy: {
    name: 'Twizzlers',
    salty: false,
  },
  chocolate: {
    name: 'Mars',
    salty: false,
  },
};

const { candy, fruit = { name: 'Banana', salty: false } } = snacks;
console.log(candy, fruit);

///////////////////////////////
//Lecture: DESTRUCTURING ARRAYS
///////////////////////////////
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring arrays
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// Skipping elements from the array
const [, , third, fourth] = restaurant.categories;
console.log(third, fourth);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function and store them in a variable
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);

// Testing

const arr2 = [10, 11, 12, [13, 14, [15, 16], 'Joseph'], 'John'];
const [
  firstNumber,
  secondNumber,
  ,
  [
    thirdNumber,
    ,
    [fourthNumber, fifthNumber],
    name1 = 'notFound',
    name2 = 'notFound',
  ],
  name3,
] = arr2;
console.log(
  firstNumber,
  secondNumber,
  thirdNumber,
  fourthNumber,
  fifthNumber,
  name1,
  name2,
  name3
);

const [category = 'notFound', mainItem = 'notFound'] = restaurant.orderCategory(
  0,
  1
);
console.log(category, mainItem);
*/

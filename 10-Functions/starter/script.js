'use strict';

const bookings = [];

// const creatBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// creatBooking('LH123');
// creatBooking('LH123', 2, 800);
// creatBooking('LH123', 2);
// creatBooking('LH123', 5);

// creatBooking('LH123', undefined, 1000);

// const flight = 'LH123';
// const colin = {
//   name: 'Colin McNatt',
//   passport: 1234567,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH456';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 1234567) {
//     alert('Checked In!');
//   } else {
//     alert('Wrong Passport Fool!');
//   }
// };

// checkIn(flight, colin);
// console.log(flight);
// console.log(colin);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };

// newPassport(colin);
// // Below the object has been changed in the newPassport function (Javascript passes by value not reference)
// checkIn(flight, colin);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher order Function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   // name of fn
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// const high5 = function () {
//   console.log('Hi');
// };
// document.body.addEventListener('click', high5);

// ['Colin', 'Kelley'].forEach(high5);

// const greet2 = greeting => name => console.log(`${greeting} ${name}`);
// greet2('Hey')('Vega');

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Colin');
// greeterHey('Meghan');

// greet('Hello')('Colin');

// const american = {
//   airline: 'American',
//   iataCode: 'AA',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// american.book(123, 'Colin McNatt');
// american.book(666, 'Meghan McNatt');
// console.log(american);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = american.book;

// // This is undefined (outside)
// // book(23, 'Melinda McNatt');

// // the .call takes in an argument to be defined as the new 'this'
// book.call(eurowings, 23, 'Melinda McNatt');
// book.call(eurowings, 44, 'David McNatt');
// console.log(eurowings);

// const flightData = [583, 'Joe Mama'];
// book.apply(american, flightData);
// console.log(american);

// book.call(american, ...flightData);

// const bookEW = book.bind(eurowings);
// const bookAA = book.bind(american);
// bookEW(23, 'Jimmy Hendricks');
// bookAA(99, 'Jimmy Page');

// const bookAA66 = book.bind(american, 66);
// bookAA66('John');
// bookAA66('Mary');

// // With Event Listeners
// american.planes = 30;
// american.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', american.buyPlane.bind(american));

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVat = value => value + value * 0.23

// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(`${this.question}\n${this.options.join('\n')}\n(Your Answer)`)
//     );
//     console.log(answer);
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };
// // poll.registerNewAnswer();

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
// The Complete JavaScript Course 21
// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

//EX 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 100;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// // Re-assigning f function
// h();
// f();
// console.dir(f);

// // EX 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boaring all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will board in ${wait} seconds`);
// };

// // this perGroup will be ignored bc the closure with use the perGroup from the birthplace of the function
// const perGroup = 1000;
// boardPassengers(180, 3);

// 1. Take the IIFE below and at the end of the function, attach an event listener that
// changes the color of the selected h1 element ('header') to blue, each time
// the body element is clicked. Do not select the h1 element again!
// 2. And now explain to yourself (or someone around you) why this worked! Take all
// the time you need. Think about when exactly the callback function is executed,
// and what that means for the variables involved in this example.

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

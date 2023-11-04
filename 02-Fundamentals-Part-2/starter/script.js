// Helps to identify errors
'use strict';

// function logger() {
//   console.log('My name is Colin');
// }

// // calling / running / evoking
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(5, 5);
// console.log(appleOrangeJuice);

// const orangeJuice = fruitProcessor(0, 5);
// console.log(orangeJuice);

// // Function declaration
// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }
// const age1 = calcAge1(1989);

// // Function expression
// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// // Arrow functions
// const calcAge3 = (birthYear) => 2023 - birthYear;
// const age3 = calcAge3(1989);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   //   return retirement;
//   return `${firstName} retires in ${retirement} years.`;
// };

// console.log(yearsUntilRetirement(1989, 'Colin'));
// console.log(yearsUntilRetirement(1991, 'Meghan'));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`);
//     return retirement;
//   } else {
//     return -1;
//   }

//   //   return `${firstName} retires in ${retirement} years.`;
// };

// console.log(yearsUntilRetirement(1989, 'Colin'));
// console.log(yearsUntilRetirement(1991, 'Meghan'));

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win 🏆 (${avgKoalas} vs ${avgDolphins})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win 🏆 (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log('No team wins 😢');
//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 111);

// scoreDolphins = calcAverage(44, 23, 71);
// scoreKoalas = calcAverage(65, 54, 49);
// checkWinner(scoreDolphins, scoreKoalas);

// const friends = ['Colin', 'Meghan', 'Ollie'];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends.length - 1);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Pig';
// console.log(friends);

// const year = new Array(1991, 1989, 2021);
// console.log(year);
// console.log(year[1]);

// const firstName = 'Kona';
// const kona = [firstName, 'Powell', 2022, 'dog', friends];
// console.log(kona);

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const years = [1990, 1991, 1992];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
// console.log(ages);

// // Push adds to end and mutates the original
// const friends = ['Colin', 'Meghan', 'Ollie'];
// friends.push('Kona');
// console.log(friends);

// // Unshift adds to the beginning of array also mutates
// friends.unshift('Vega');
// console.log(friends);

// // Remove from end
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// // Remove first element
// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Colin'));

// console.log(friends.includes('Colin'));
// console.log(friends.includes('David'));

// // Coding Challenge #2
// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 155, 44];

// const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];

// console.log(bills, tip, totals);

// const colin = {
//   firstName: 'Colin',
//   lastName: 'McNatt',
//   age: 33,
//   friends: ['vega', 'Meghan', 'Ollie'],
// };

// console.log(colin);
// console.log(colin.lastName);
// console.log(colin['lastName']);

// const nameKey = 'Name';
// console.log(colin['first' + nameKey]);
// console.log(colin['last' + nameKey]);

// const interestedIn = prompt(
//   'What do you know about Colin? Choose between firstName, lastName, age'
// );
// console.log(colin[interestedIn]);

// if (colin[interestedIn]) {
//   console.log(colin[interestedIn]);
// } else {
//   console.log('Wrong request! Choose between firstName, lastName, age');
// }

// colin.location = 'USA';
// colin['twitter'] = '@colonial89';
// console.log(colin);

// console.log(
//   `${colin.firstName} has ${colin.friends.length} friends, and his best friend is named ${colin.friends[0]}`
// );

// const colin = {
//   firstName: 'Colin',
//   lastName: 'McNatt',
//   birthYear: 1989,
//   age: 33,
//   friends: ['vega', 'Meghan', 'Ollie'],
//   hasDriversLicense: true,
//   calcAge: function (birthYear) {
//     return 2023 - this.birthYear;
//   },
//   //   calcAge: function (birthYear) {
//   //     return 2023 - birthYear;
//   //   },
//   getSummary: function () {
//     return `${this.firstName} is ${this.calcAge()} years old and he has ${
//       this.hasDriversLicense ? 'a' : 'no'
//     } driver's license.`;
//   },
// };

// console.log(colin.getSummary());
// console.log(colin.calcAge());
// console.log(colin.calcAge(1989));
// console.log(colin['calcAge'](1989));

// Coding Challenge #3

// const mark = {
//   name: 'Mark',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   name: 'John',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// console.log(mark.bmi);

// john.calcBMI();
// console.log(john.bmi);

// if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.name}'s BMI (${john.bmi}) is higher than ${mark.name}'s BMI (${mark.bmi})`
//   );
// } else {
//   console.log(
//     `${mark.name}'s BMI (${mark.bmi}) is higher than ${john.name}'s BMI (${john.bmi})`
//   );
// }

// console.log('Lifting weights repetition 1 🏋️ 1');
// console.log('Lifting weights repetition 1 🏋️ 2');
// console.log('Lifting weights repetition 1 🏋️ 3');
// console.log('Lifting weights repetition 1 🏋️ 4');
// console.log('Lifting weights repetition 1 🏋️ 5');
// console.log('Lifting weights repetition 1 🏋️ 6');
// console.log('Lifting weights repetition 1 🏋️ 7');
// console.log('Lifting weights repetition 1 🏋️ 8');
// console.log('Lifting weights repetition 1 🏋️ 9');
// console.log('Lifting weights repetition 1 🏋️ 10');

// for loop keeps running while the ondition is TRUE
// for (let rep = 1; rep <= 13; rep++) {
//   console.log(`Lifting weights repetition 🏋️ ${rep}`);
// }

// const colinArray = ['Colin', 'McNatt', 33, 'Entrepreneur'];

// const types = [];

// for (let i = 0; i < colinArray.length; i++) {
//   console.log(colinArray[i], typeof colinArray[i]);

//   //   types[i] = typeof colinArray[i];
//   types.push(typeof colinArray[i]);
// }

// console.log(types);

// const years = [1989, 1991, 1995, 1969];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }
// console.log(ages);

// // Continue and Break
// for (let i = 0; i < colinArray.length; i++) {
//   if (typeof colinArray[i] !== 'string') continue;

//   console.log(colinArray[i], typeof colinArray[i]);
// }

// Backwords Loop
// const colinArray = ['Colin', 'McNatt', 33, 'Entrepreneur'];

// for (let i = colinArray.length - 1; i >= 0; i--) console.log(i, colinArray[i]);

// // Loop inside of a Loop
// for (let excercise = 1; excercise < 4; excercise++) {
//   console.log(`------- Starting Excercise ${excercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Excercise ${excercise}: Lifting weight repetition ${rep} 🏋️`);
//   }
// }

// for (let rep = 1; rep <= 5; rep++) {
//   console.log(`FOR: Lifting weights repetition 🏋️ ${rep}`);
// }

// // While Loop
// let rep = 1;
// while (rep <= 5) {
//   console.log(`WHILE: Lifting weights repetition 🏋️ ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// while (dice !== 6) {
//   console.log(` You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`Loop is about to end`);
// }

// // Coding Challenge #4

// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [45, 123, 143, 200, 66, 175, 135, 25, 99, 36];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i]
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

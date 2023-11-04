// let js = 'amazing';
// if (js === 'amazing') {
//   alert('Goooo Javascript!!');
// }

// console.log(40 + 10 - 11);

// console.log('Colin');
// console.log(23);

// let firstName = 'Colin';

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let myFirstJob = 'Car Wash';
// let mySecondJob = 'Construction';

// console.log(myFirstJob);

// let colinIsAwesome = true;
// console.log(colinIsAwesome);

// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof colinIsAwesome);

// colinIsAwesome = 'Yes';
// console.log(typeof colinIsAwesome);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// age = 31;

// const now = 2024;
// const ageColin = now - 1989;
// const ageMeghan = now - 1991;
// console.log(ageColin, ageMeghan);

// const averageAge = ageColin + ageMeghan / 2;
// console.log(averageAge);

// console.log(ageColin * 2, ageColin / 10, 2 ** 3);
// // ** means to the power of

// const firstName = 'Colin';
// const lastName = 'McNatt';
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5;
// console.log(x);
// x += 10; // x = x + 10
// console.log(x);
// x *= 4;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);
// x--;
// console.log(x);

// // Comparison Operators
// console.log(ageColin > ageMeghan);
// console.log(ageMeghan > ageColin);
// console.log(ageMeghan >= 31);

// const isFullAge = ageMeghan >= 18;

// console.log(now - 1991 > now - 2018);

// let z, y;
// z = y = 25 - 10 - 5; // z = y = 10, z = 10
// console.log(z, y);

// const firstName = 'Colin';
// const job = 'Programmer';
// const birthYear = 1989;
// const currentYear = 2023;

// const colin =
//   "I'm " +
//   firstName +
//   ', a ' +
//   (currentYear - birthYear) +
//   ' year old ' +
//   job +
//   '!';

// console.log(colin);

// const colinNew = `I'm ${firstName}, a ${
//   currentYear - birthYear
// } year old ${job}!`;

// console.log(colinNew);

// console.log(`Multi
// Line
// String
// Using
// BackTicks`);

// const age = 15;
// // const age = 18;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log('Joe is of age');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Just ${yearsLeft} years until Joe is of age`);
// }

// let century;
// const birthYear = 1989;
// if (birthYear >= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// const massMark = 78;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = heightJohn / heightJohn ** 2;
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is greater than John's (${BMIJohn})`);
// } else {
//   console.log(`John's (${BMIJohn}) BMI is greater than Mark's (${BMIMark})`);
// }

// // Type conversion
// const inputYear = '1989';
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);

// console.log(String(23));

// // Type coercion
// console.log('I am ' + 33 + ' years old');
// console.log('23' - '10' - 3);
// console.log('22' / '2');

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);

// Falsy Values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Colin'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// // const money = 0;
// const money = 1;
// if (money) {
//   console.log("Don't spend it all :)");
// } else {
//   console.log('You should get a job!');
// }

// // const age = 18;
// const age = '18';
// if (age === 18)
//   console.log('You are an adult! ( === strict whch does not perform coercion)');

// if (age == 18) console.log('You are an adult! ( == loose )');

// const favorite = Number(prompt('what is your favorite number?'));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite == 69) {
//   console.log('Wooooww...');
// } else if (favorite === 420) {
//   console.log(`Alriiiiightt`);
// } else if (favorite === 21) {
//   console.log(`I like 21`);
// } else {
//   console.log(`It'd be a lot cooler if it was 420`);
// }

// if (favorite !== 22) console.log('Why not 22?');

// const hasDriversLicense = true;
// const hasGoodVision = false;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('You can drive!');
// } else {
//   console.log('Someone else should drive!');
// }

// const isTired = true;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('You can drive!');
// } else {
//   console.log('You should not drive');
// }

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win!');
// } else {
//   console.log('Koalas win!');
// }

// // Switch
// const day = 'Monday';

// switch (day) {
//   case 'Monday': // day ==='Monday'
//     console.log('Plan course structure');
//     console.log('Work work work');
//     break;
//   case 'Tuesday':
//     console.log('Play around');
//     break;
//   case 'Wednesday':
//   case 'Thursday':
//     console.log('Code code code');
//     break;
//   case 'Friday':
//     console.log('Chilllllll');
//     break;
//   case 'Saturday':
//   case 'Saturday':
//     console.log('Weekend babaaay');
//     break;
//   default:
//     console.log('Not a valid day');
// }

// // Else if
// if (day === 'Monday') {
//   console.log('Plan course structure');
//   console.log('Work work work');
// } else if (day === 'Tuesday') {
//   console.log('Play around');
// } else if (day === 'Wednesday' || 'Thursday') {
//   console.log('Code code code');
// } else if (day === 'Friday') {
//   console.log('Chilll');
// } else if (day === 'Saturday' || 'Sunday') {
//   console.log('Weekend babaaayy');
// } else {
//   console.log('Not a valid day');
// }

// const age = 16;

// const drink = age >= 18 ? 'wine 🍷' : 'water ';
// console.log(`I like to drink ${drink}`);

// let drink2;
// if (age >= 18) {
//   drink2 = 'wine 🍷';
// } else {
//   drink2 = 'water 💧';
// }

// console.log(drink2);

// console.log(`I like to drink ${drink2}`);

// // Challenge #4 - Tip calculator

// const bill = 51;

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `Since the bill is $${bill}, the tip is $${tip}, which brings the total bill to ${
//     bill + tip
//   }`
// );

// let tip2;
// if (bill >= 50 && bill <= 300) {
//   tip2 = 15;
// } else {
//   tip2 = 20;
// }

// const tipDollars = (tip2 / 100) * bill;
// const totalBill = tipDollars + bill;

// console.log(
//   `Since the bill is $${bill}, you should tip ${tip2}% or $${tipDollars}, bringing the total to ${totalBill}`
// );

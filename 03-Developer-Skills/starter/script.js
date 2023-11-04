// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';
// if (x === 23) console.log(23);

// const calcAge = (birthYear) => 2023 - birthYear;

// console.log(calcAge(1991));

// Array of temps in one day
// Calc temp amplitude: difference between highest and lowest temperature
// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = (temperatures) => {
//   let max = temperatures[0];
//   let min = temperatures[0];

//   for (let i = 0; i <= temperatures.length; i++) {
//     const curTemp = temperatures[i];
//     if (typeof curTemp !== 'number') continue;

//     if (temperatures[i] > max) max = curTemp;
//     if (temperatures[i] < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const tempAmplitutde = calcTempAmplitude(temperatures);
// console.log(tempAmplitutde);

// //Function now needs to receive two arrays
// // Merge arrays
// const temps1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temps2 = [3, 5, -3, 1, 'error', 15, 21, 19, -2, 3, -7, 5];

// const temps3 = temps1.concat(temps2);
// console.log(temps3);

// const calcTempAmplitude = (temps3) => {
//   let max = temps3[0];
//   let min = temps3[0];

//   for (let i = 0; i <= temps3.length; i++) {
//     const curTemp = temps3[i];
//     if (typeof curTemp !== 'number') continue;

//     if (temps3[i] > max) max = curTemp;
//     if (temps3[i] < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const tempAmplitutde = calcTempAmplitude(temps3);
// console.log(tempAmplitutde);

// //Reverse array
// const temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const reversedTemps = temps.reverse(temps);
// console.log(reversedTemps);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celcius',
//     value: prompt('Degress celcius:'),
//   };
// debugger;
//   const kelvin = Number(measurement.value) + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

// Challenge 1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

// console.log(`... ${arr1[0]}°C ... ${arr1[1]}°C ... ${arr1[2]}°C ... `);

const printForecast = (arr) => {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(arr1);
printForecast(arr2);

'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(56);
  console.log(output);
}

// Data needed for first part of the section
const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced Opbject Literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

// // Maps: Fundamentals
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pasta',
//   'Risotto',
//   'Pizza',
//   'Pasta',
// ]);

// console.log(orderSet);
// console.log(new Set('Colin'));
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// // orderSet.clear();
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// const staff = ['Waiter', 'Chef', 'Manager', 'Waiter', 'Chef'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Properties VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// // [key, value]
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// //Optional Chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// console.log(restaurant.openingHours.fri?.open);
// console.log(restaurant.openingHours?.fri?.open);

// //Ex
// const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? '(closed)';
//   console.log(`on ${day}, we open at ${open}`);
// }

// //Optional Chaining with Methods
// console.log(restaurant.order?.(0, 1) ?? 'MEthod does not exist');

// // Arrays
// // const users = [{ name: 'Colin', email: 'colin@gmail.com' }];
// const users = [];

// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// // Logical Assignment Operators
// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined) : Treats 0 as a value not falsy (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// AND assignment operator asign a value to currently truthy
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// // Spread, bc on right hand side of =
// const arr = [1, 2, ...[3, 4]];

// // Rest bc on left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotta, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotta, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 6, 7, 8);
// add(7, 8, 9, 10, 11, 12, 13);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'peppers', 'olives', 'onions');
// restaurant.orderPizza('mushrooms');

// Spread operator
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu2);

// const str = 'Colin';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(letters);
// console.log(...str);

// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Ingredient 2?`),
//   prompt(`Ingredient 3?`),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Colin' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Cook house';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Destructuring Objects
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sol, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// Destructuring arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // Destructuring the above array
// const [x, y, z] = arr;
// console.log(x, y, z);
// // Original array not affected
// console.log(arr);

// // const [first, second] = restaurant.categories;
// // console.log(first, second);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching Variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [secondary, main] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, j] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default Values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// // Coding Challenge #1

// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    team2: 6.5,
  },
};

// // Coding Challenge #2

// // 1. Loop over the game.scored array and print each player name to the console,
// // along with the goal number (Example: "Goal 1: Lewandowski")

// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);
// // 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them
// // (except for "draw"). Hint: Note how the odds and the game objects have the same property names

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odds of ${teamStr} ${odd}`);
// }
// // 4. Bonus: Create an object called 'scorers' which contains the names of the
// // players who scored as properties, and the number of goals as the value. In this
// // game, it will look like this:
// // {
// //  Gnarby: 1,
// //  Hummels: 1,
// //  Lewandowski: 2
// // }

// Coding Challenge #1

// // 1. Create one player array for each team (variables 'players1' and 'players2')
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// const printGoalScorers = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// printGoalScorers('colin', 'vega', 'kona');
// printGoalScorers(...game.scored);

// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// team1 < team2 && console.log(`Team1 is more likely to win`);
// team2 < team1 && console.log(`Team2 is more likely to win`);

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

// GOOD LUCK 😀
// */

// //Create textarea and button and append to document
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// //Event listener
// document.querySelector('button').addEventListener('click', function () {
//   //create variable for textarea
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   console.log(text);
//   console.log(rows);
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     // console.log(row, first, second);
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}</div>
        </div>`;

    //afterbegin dictates display order
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
// console.log(accounts);
const updateUI = function (acc) {
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  // ? means if it exists
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and Welcome message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //Display movements
    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcct = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcct &&
    currentAccount.balance >= amount &&
    receiverAcct?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcct.movements.push(amount);
    //Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    (amount > 0 && currentAccount.movements, some(mov => mov >= amount * 0.1))
  ) {
    // add movement
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    //Delete account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
// console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }
// // forEach - no breaks - will loop thru to the end
// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });
// // 0: function(200)
// // 1: function(450)
// // 2: function(400)

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'USD', 'EUR', 'GBP']);
// console.log(currenciesUnique);
// // There is no key for sets (unique values only) so key can be subbed with '_' which stands for a throwaway variable
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));

// // using slice to make a shallow copy
// console.log(arr.slice());
// console.log(arr.slice([...arr]));

// // splice - mutates original array!
// // console.log(arr.splice(2));
// // Common use case is to remove last element from an array
// arr.splice(-1);
// console.log(arr);
// // Second parameter tells you the number of elements to delete
// arr.splice(1, 2);
// console.log(arr);

// // Reverse - Mutates original array
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['f', 'g', 'h', 'i', 'j'];
// console.log(arr2.reverse());
// console.log(arr2);

// //Concat - does not mutate original array
// const letters = arr.concat(arr2);
// console.log(letters);
// //can use spread operators to accomplish the same thing - no mutation either
// console.log(...arr, ...arr2);

// // Join
// console.log(letters.join('-'));

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// // getting last element of array - all the same - at is good for method chaining
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
// // works on strings too
// console.log('colin'.at(-1));

// Coding Challenge #1
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCopy = dogsJulia.slice();
//   console.log(dogsJuliaCopy);
//   dogsJuliaCopy.splice(0, 1);
//   dogsJuliaCopy.splice(-2);
//   console.log(dogsJuliaCopy);

//   const dogs = dogsJuliaCopy.concat(dogsKate);
//   console.log(dogs);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is a ${dog} year old adult!`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy!`);
//     }
//   });
// };
// checkDogs(dogsJulia, dogsKate);

//Array Methods
//Map - loops through an array and applies callback function to each element in the array. Produces new array
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToUsd = 1.1;
// // Functional method
// // const movementsUSD = movements.map(function (mov) {
// //   return mov * euroToUsd;
// // });
// // Functional arrow function
// const movementsUSD = movements.map(mov => mov * euroToUsd);
// console.log(movements);
// console.log(movementsUSD);

// //
// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * euroToUsd);
// console.log(movementsUSDfor);

// const movementDesc = movements.map(
//   (mov, i) =>
//     // if (mov > 0) {
//     //   return `Movement ${i + 1}: You deposited ${mov}`;
//     // } else {
//     //   return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
//     // }
//     // Refactor above code using ternary
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementDesc);

//Filter - retruns new array containing array elements that passed a specific test condition
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// // Does the same thing but you have to manually create new array using 'push'
// const depositsFor = [];
// for (const mov of movements)
//   if (mov > 0) {
//     depositsFor.push(mov);
//   }
// console.log(depositsFor);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

//Reduce - reduces all elements in the array into one value - no new array just reduced value

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // PIPELINE - Chaining
// const euroToUsd = 1.1;

// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     console.log(arr);
//     return mov * euroToUsd;
//   })
//   // .map(mov => mov * euroToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

// //accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

// // same thing with for loop
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// // Max value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

// Coding Challenge #2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages)
// 4. Run the function for both test datasets

// const dogAges = [5, 2, 4, 1, 15, 8, 3];
// // const ages = [16, 6, 10, 5, 6, 1, 4]

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(humanAges);
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(adults);

//   // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   // console.log(average);
//   //Another way to calc average
//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );
//   console.log(average);
// };
// calcAverageHumanAge(dogAges);

// SOME
// Find only returns first instance that meets condition (not an array)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

//Equality
console.log(movements.includes(-130));

//Condition
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Sperate Callbaack
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// // same with for/of loop
// for (const acc of accounts)
//   if (acc.owner === 'Jessica Davis') {
//     console.log(acc);
//   }

// Flatten - removes nested arrays
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr);
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());
console.log(arrDeep.flat(2));

//Flat
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log();
overallBalance;

// flatMap - only can go 1 level deep - mnust use flat to go more levels (set param)
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log();
overallBalance;

const owners = ['Colin', 'Joe', 'Vega', 'Pippy'];

// SORT - converts everything to strings - mutates original array
// Strings
console.log(owners.sort());
console.log(owners);

// NUMBERS
console.log(movements);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending

// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8));

// Creating an empty array can bonly be used with FILL
const x = new Array(7);
console.log(x);

// Empty arrays and FILL method - mutates original
// x.fill(1, 3);
// console.log(x);
x.fill(1, 3, 5);
console.log(x);
// x.fill(5);
// console.log(x);
arr3.fill(23, 2, 6);
console.log(arr3);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
// console.log(movementsUI);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});

// Array Practice

const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 1000);
// console.log(numDeposits1000);

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  // have to use prefixed ++ operator here
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

// prefixed ++ operator
let a = 10;
console.log(++a);
console.log(a);

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

//EXCEPTIONS!!! VERY USEFUL
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    );
  return titleCase;
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not to long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// Coding Challenge #4
// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little. Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite. Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];
// // 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array.
// //Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// dogs.forEach(dog => (dog.recommendedFood = dog.weight ** 0.75 * 28));
// console.log(dogs);
// // 2. Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array..
// const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(
//   `Sarah's dog is eating too ${
//     dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'
//   }`
// );
// // 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// const fatDogOwners = dogs
//   .filter(dog => dog.curFood > dog.recommendedFood)
//   .flatMap(dog => dog.owners);
// console.log(fatDogOwners);

// const skinnyDogOwners = dogs
//   .filter(dog => dog.curFood < dog.recommendedFood)
//   .flatMap(dog => dog.owners);
// console.log(skinnyDogOwners);
// // 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// console.log(`${fatDogOwners.join(' and ')}'s dogs eat to much!`);
// console.log(`${skinnyDogOwners.join(' and ')}'s dogs eat to little!`);
// // 5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)
// console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
// // 6. Log to the console whether there is any dog eating an okay amount of food (just true or false)
// const checkEatingOk = dog =>
//   dog.curFood > dog.recommendedFood * 0.9 &&
//   dog.curFood < dog.recommendedFood * 1.1;
// console.log(dogs.some(checkEatingOk));
// // 7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)
// console.log(dogs.filter(checkEatingOk));

// // 8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
// const dogsCopySorted = dogs
//   .slice()
//   .sort((a, b) => a.recommendedFood - b.recommendedFood);
// console.log(dogsCopySorted);
// // The Complete JavaScript Course 26
// // Hints:
// // § Use many different tools to solve these challenges, you can use the summary lecture to choose between them
// // Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

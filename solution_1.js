//Option 1:

// Given numbers
const numbers = [2, 3, 890, 234, 111, 1222];

// Calculating the sum of all elements
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Logging the result to the console
console.log("Sum of all elements:", sum);


//Manually, option 2:

function calculateSumManually(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  console.log("Sum of all elements:", sum);
}

// Example usage with your provided numbers
const numbers2 = [2, 3, 890, 234, 111, 1222];
calculateSumManually(numbers2);

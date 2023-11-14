function calculateSubtractionReverse(array) {
  let result = 0;

  for (let i = array.length - 1; i >= 0; i--) {
    result -= array[i];
  }

  console.log("Result of subtraction in reverse order:", result);
}

// Example usage with your provided numbers
const numbers = [2, 3, 890, 234, 111, 1222];
calculateSubtractionReverse(numbers);

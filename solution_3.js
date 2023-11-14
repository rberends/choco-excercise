function calculateSumWithOperations(numbersList) {
  let result = 0;
  
  for (let i = 0; i < numbersList.length; i++) {
    if (numbersList[i] % 2 === 0) {
      // Add even numbers
      result += numbersList[i];
    } else {
      // Multiply by odd numbers
      result *= numbersList[i];
    }
  }

  console.log("Final result after operations:", result);
}

// Given numbers
const numbersList = [2, 3, 890, 234, 111, 1222];

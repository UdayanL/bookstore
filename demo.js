// function calculateSum(numbers) {
//   // Filter numbers that are not divisible by 3
//   const filteredNumbers = numbers.filter(num => num % 3 !== 0);

//   // Square each number
//   const squaredNumbers = filteredNumbers.map(num => num ** 2);

//   // Calculate the sum of squared numbers
//   const sum = squaredNumbers.reduce((acc, num) => acc + num, 0);

//   return sum;
// }


function calculateSum(numberArray) {
    return numberArray
      .filter(num => num % 3 !== 0) // Filter out numbers divisible by 3
      .map(num => num ** 2) // Square each remaining number
      .reduce((sum, num) => sum + num, 0); // Calculate the sum
  }

  
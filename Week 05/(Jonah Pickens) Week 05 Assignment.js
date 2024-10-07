/* FizzBuzz Step 1 */
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 !== 0) {
    console.log("Fizz");
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

/*FizzBuzz Step 2 */
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  
  /* Bean Counting Step 1 */
  function countBs(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === 'B') {
        count++;
      }
    }
    return count;
  }
  
  // Calling the function with the string "Boring"
  let result = countBs("Boring");
  console.log(result);  // Should print 1 to the console

  /* Bean Counting Step 2 */
  // Generalized function to count any character
function countChar(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count++;
    }
  }
  return count;
}

// Function specifically for counting uppercase 'B's
function countBs(string) {
  return countChar(string, 'B');
}

// Calling the functions
let resultBs = countBs("Boring");
console.log(resultBs);  // Should print 1, since there's one 'B'

let resultChar = countChar("Boring", 'B');
console.log(resultChar);  // Should print 1, same as countBs



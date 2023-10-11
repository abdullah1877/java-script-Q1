
//  FIVE PRACTISE  SET OF JAVASCRIPT
//              1

  // function factorial (n) { 
  //     if (n=== 0 || n=== 1) {
  //       return 1;
  //   } else { 
  //      return n * factorial(n - 1);
  //   }
  // }
  //   // Example
  //   const number = 68;
  //   const result =factorial(number);
  //   console.log(`The factorial of ${number} is: ${result}`);

  
//                2

// function findLongestWord(sentence) {
//     // Split the sentence into an array of words
//     const words = sentence.split(' ');
  
//     // Initialize variables to keep track of the longest word and its length
//     let longestWord = '';
//     let maxLength = 0;
  
//     // Iterate through the words in the array
//     for (const word of words) {
//       // Remove any punctuation from the word (optional)
//       const cleanedWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
 
//       // Check if the current word is longer than the current longest word
//       if (cleanedWord.length > maxLength) {
//         maxLength = cleanedWord.length;
//         longestWord = cleanedWord;
//       }
//     }
  
//     return longestWord; 
//   }
  
//   // Example
//   const sentence = "This is a sample sentence, and we will find the longest word in it abdullahtariq.";
//   const longest = findLongestWord(sentence);
//   console.log(`The longest word in the sentence is: "${longest}"`);
  
 
 //                     3
 
//  function isPalindrome(input) {
//     // Remove spaces and convert to lowercase for case-insensitive comparison
//     const cleanedInput = input.replace(/ /g, '').toLowerCase();
  
//     // Reverse the cleaned input and compare it to the original
//     const reversedInput = cleanedInput.split('').reverse().join('');
    
//     return cleanedInput === reversedInput;
//   }
  
//   // Example
//   const word = "racecar";
//   const phrase = "A man a plan a canal Panama"; 
  
//   console.log(`Is "${word}" a palindrome? ${isPalindrome(word)}`);
//   console.log(`Is "${phrase}" a palindrome? ${isPalindrome(phrase)}`);


//                         4 


function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
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
}

const n = 100; // Change this value to the desired range
 fizzBuzz(n);


//                           5

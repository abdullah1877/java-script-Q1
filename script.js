// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// for(let i=0;i<=8;i++)//i=i+1
// {
//    console.log(cars[i]);
// }



// let x = [1, 2, 3, 99, 89, 99, 100 ]
// for(let i=0;i<x.length;i++)
// { 
//     console.log(Number(x[i])+Number([i+1]));
// }
// let y = [3, 9, 12, 15, 18, 21, 24]
// for(let i=0;i<y.length;i++)
// { 
//     console.log(Number(y[i])+Number([i+1]));
// }
// let a = ["abdullah", "ahmad", "sarmad", "usman"]
// for(let i=0;i<a.length;i++)
// { 
//     console.log(a[i]);
// }

// let b = ["ali", "imran", "amjad"]
// for(let i=0;i<b.length;i++)
// {  
//     console.log(b[i]);
// }

// let Name = ["Abdullah", "Ahmad", "Ali", "Sarmad", "Usman"]
// let Marks = [80, 77, 88, 95, 68,34,6] //average=sum of all number/total number (2+3+5+7)/4
// for(let i=0;i<Name.length;i++)

// { 
    // console.log(Name[i]);
    
// }
// let sum=0;
// for(let b=0;b<Marks.length;b++)
// { 
// sum=sum+Marks[b]
// console.log(sum);
// }
// let avg=sum/(Marks.length)
// console.log(avg);
// if (Marks<80) {
//   console.log()
// }




// var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

// var Avgmarks = 0;

// for (var i=0; i < students.length; i++) {
//     let avg=students[i][1];
//     let name=students[i][0]


//         if (avg < 60){
//           console.log(name,"Grade : F");      
//           } 
//         else if (avg < 70) {
//                 console.log(name,"Grade : D"); 
//                   } 
//         else if (avg < 80) 
//              {
//                 console.log(name,"Grade : C"); 
//         } else if (avg < 90) {
//                 console.log(name,"Grade : B"); 
//         } else if (avg < 100) {
//                 console.log(name,"Grade : A"); 
//         }
// }

// let language = "JavaScripte";

// let text = "";
// for (let x of language) {
//   text += x + "<br>"; //text=text+x
// }

// document.getElementById("abc").innerHTML = text;



// let text = "";
// let i = 0;
// while (i < 10) { 
//         text += "<br>The number is" + i;
//         i++;
// }
// document.getElementById("abc").innerHTML = text;


// const cars =["BMW", "MERCIDES", "TOYOTA", "HONDA"];
// let i = 0;
// let  text = "";
// while (cars[i]) {
//      text+= cars[i]+ "<br>";
//      i++;   
// }
// document.getElementById("abc").innerHTML = text;

// let x = 5;
// let y = "0";
// document.getElementById("abc").innerHTML =Boolean(x===y);
// Create a Map
// const fruits = new Map([
//         [500,53],
//         [300,23],
//         [200,3]
//       ]);
// console.log(fruits.get(200));

// Create a Map
// const fruits =  [
//         ["apples", 270],
//         ["bananas", 160],
//         ["oranges", 390],
//       ];
//     fruits.map((x,index)=>{ 
//         console.log(x[1],x[0],index)
// })  

// document.getElementById("abc").innerHTML =
// (5 + null) + "<br>"  +
// ("5" + null) + "<br>" +
// ("5" + 2) + "<br>" +
// ("5" - 2) + "<br>" +
// ("5" * "2") + "<br>" +
// ("5" / "2") + "<br>"


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

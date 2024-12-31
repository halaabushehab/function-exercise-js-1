//Q1 :Write a JavaScript function that reverses a number.

let x = "532443";
function reverse(x) {
    let y = "";
    for (var i = x.length - 1; i >= 0; i--) {
        y += x[i];
    }
    return y; 
}

console.log(reverse(x)); 



//Q2 :Use a loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the console.


function odd_even() {
    for (var x = 1;x <= 15; x++) {
       if(x%2 == 0){
       console.log(x +", is even");
       }
       else{
        console.log(x +", is odd");

       }
    }
   
}

odd_even(); 


// Q3 : Write a function that returns a string that has letters in alphabetical order.
let word="orange"
function words_ranking() {
    console.log(word.split('').sort().join(''));
    
    }

words_ranking(); 


//  Q4 : Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example, if you accept 025468 the output should be 0-254-6-8.
let numbers = "222222";
function evenNumbers(numbers) {
    let new_number=numbers[0]

    for(let i=1 ; i<numbers.length ; i++){
        if(numbers[i]%2 === 0 && numbers[i-1]%2 === 0){
            new_number += '-'+numbers[i];
        }
        else{
            new_number+=numbers[i]        }
    }
     console.log(new_number)
      }

     evenNumbers (numbers); 



     
//Q5: Write a function (Agechecker) that checks the age of the user if the age is larger than or equal to 18, the output will be ( The user is Adult ) else ( The user is Minor) 
function Agechecker (age) {
  return age >=18 ?"The user is Adult" :"The user is Minor"
    }
console.log
console.log(Agechecker (prompt("age")));  







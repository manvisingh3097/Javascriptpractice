//assignment 1: Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.

function numberType(n) {
  if (n >= 1) {
    console.log("number is positive");
  } else if (n < 0) {
    console.log("number is negative");
  } else {
    console.log("number is zero");
  }
}

numberType(6);
numberType(-6);
numberType(0);

//assignment 2:  Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop.
//The factorial of a number N is the product of all positive integers less than or equal to N.

function positiveinteger(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let num = 1;
    for (let i = 2; i <= n; i++) {
      num *= i;
    }
    return num;
  }
}

console.log(positiveinteger(4));

//assignment 3 : Write a JavaScript function that takes two numbers as parameters and returns the larger one.

function largestnum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(largestnum(3, 5));

//assignment 4 : Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not.

function palindrome(str) {
  var j = str.length - 1;
  for (var i = 0; i < str.length / 2; i++) {
    if (str[i] != str[j]) {
      return false;
    }
    j--;
  }
  return true;
}

console.log(palindrome("113"));

//assignment 5 : Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer.

function isPositivePrime(n) {
  if (n <= 1) {
    return "not prime";
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return "not prime";
    }
  }

  return "Positive and prime";
}

console.log(isPositivePrime(5)); // Output: "Positive and prime"

//asignment 6 : Write a JavaScript function that simulates a simple calculator.
//The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
        if(num2)
      return num1 / num2;
  }
}
console.log(calculator(5, 3, '+')); 
console.log(calculator(10, 2, '-')); 
console.log(calculator(6, 4, '*')); 
console.log(calculator(8, 2, '/')); 
console.log(calculator(5, 0, '/')); 
console.log(calculator(7, 3, '%')); 


//assignment 7 : Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string.

function vowels(str){
    let newvowel = 0;
    for (let each of str){
        
        if(each == "a" || each =="e" || each =="i" || each =="o" || each =="u"  )
        {
            newvowel++;
        }
        
        
    }
    return newvowel;
}

console.log(vowels("manvii"));


//assignment 8:  Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. 

function positiveint(posint){

    sum = 0

    for (let i = 1 ; i<=posint/2 ; i++)
    {
        if(posint%i===0){
            sum += i;
        }
        
    }
    return sum===posint;

}
console.log(positiveint(28));

//assignment 9 : Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.

function generateFibonacci(n) {
    let fibonacciSeries = [0, 1];
  
    for (let i = 2; i < n; i++) {
      const nextFibonacci = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
      fibonacciSeries.push(nextFibonacci);
    }
  
    return fibonacciSeries;
}

console.log(generateFibonacci(10))

//assignment 10 : Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.

function multiple(n) {
    let result = 1; // Initialize the result to 1

    for (let i = 1; i <= 10; i++) {
        result *= i; // Multiply the result by i in each iteration
        console.log(`${n} x ${i} = ${n * i}`);
    }

    return result; // Return the final result (the factorial of n)
}

// Example usage:
console.log(multiple(5)); // Calculate factorial of 5 and print the multiplication table

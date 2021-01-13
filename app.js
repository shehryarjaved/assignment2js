//                 Changing case
// 1. Write a program that takes user input. Convert and show the input
// in capital letters.

//     ANS

// var str =prompt("Type Captilize word")
// var  res= str.toUpperCase();
// alert(res)


// 2. Write a program that takes user input. Convert and show the
// input in title case.


//     ANS


// function titleCase(str) { 
//     str = str.toLowerCase().split(' '); 
//     for (var i = 0; i < str.length; i++) { 
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);  
//     } 
//     return str.join(' '); 
//   } 
//   var str1 =prompt("Type tHE SENTENCE")
  
//   document.write(titleCase(str1)); 
// titleCase();




//                 Strings: measuring length and extracting parts

// 1. Write a program to take a user input about his favorite mobile
// phone model. Find and display the length of user input in your
// browser.


//     ANS

// var fvmobile =prompt("Type ur favorite mobile phone model")
// var lengof=fvmobile.length

// document.write(lengof)


// 2. Write a program to display the last character of a user input.


//     ANS

//  var user =prompt("Type user input")
// var lastCharOfHello=user.slice(-1);

// alert(lastCharOfHello)


//                 Strings: finding segments


// 1. Write a program to find the index of letter “n” in the word “Pakistani”
// and display the result in your browser.


//     ANS

// var word="Pakistani"
// var b = word.charAt(3)
// document.write(b)



// 2. Write a program to take user input and store username in a
// variable. If the username contains any special symbol among (@ . ,
// !), prompt the user to enter a valid username.


//     ANS

// var userName=prompt("Enter your Input: ");

// if(userName.match(/[\@\.\,\!]/)===null){
//     alert("Valid Username found");
    
// }
// else{
// alert("INValid Username found");

// }

 



// 3. You have a string “The quick brown fox jumps over the lazy
// dog”. Write a program to count number of occurrences of word “the”
// in given string.


//     ANS


// let str = "the quick brown fox jumps over the lazy dog",
//     split = str.split(" "),
//     obj = {};

// for (let i = 0; i < split.length; i++) {
//   if (obj[split[i]] === undefined) {
//     obj[split[i]] = 1;
//   } else {
//     obj[split[i]]++;
//   }
// }

// console.log(obj)




//                  Strings: finding a character at a location


// 1. Write a program to find the character at 3 rd index in the word
// “Pakistani” and display the result in your browser.



//     ANS
//  var str="Pakistani"

// var b = str.charAt(3)
//   document.write(b)


//                         Strings: replacing characters

// 1. Write a program to replace the “Hyder” to “Islam” in the word
// “Hyderabad” and display the result in your browser.


//     ANS



// var str="Hyderabad"

// var res = str.replace("Hyderabad", "Islam");

// document.write(res)


// 2. Write a program to replace all occurrences of “and” in the string
// with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;


//     ANS


//  var str1="Ali and Sami are best friends.They play cricket and football together."
//  var str = str1.replace('and', '&');
//  document.write(str)


//       Rounding numbers


// 1. Write a program that takes a positive integer from user & display
// the following in your browser.
// a. number (example number: 3.45214)
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


//     ANS


// var a = +prompt("enter a value in points");
// document.write("number is "+ a);
// var b = Math.round(a)
// document.write("<br />round of is " + b);
// var c = Math.ceil(a);
// document.write("<br /> ceil value is " +c);
// var d = Math.floor(a); 
// document.write("<br /> floor value is " +d)



// Q2. Write a program that takes a negative floating point number
// from user & display the following in your browser.
// a. Number (example number: -2.678 )
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number



// ANS 


// var a = +prompt("enter a value in negative and in points");
// document.write("number is "+ a);
// var b = Math.round(a)
// document.write("<br />round of is " + b);
// var c = Math.ceil(a);
// document.write("<br /> ceil value is " +c);
// var d = Math.floor(a); 
// document.write("<br /> floor value is " +d)



//                Generating random numbers


// Q1. Write a program that simulates a dice using random() method of JS
// Math class. Display the value of dice in your browser.




// ANS 


// var a = Math.random()*6;
// a =a.toFixed(0);
// document.write(a)



// Q2. Write a program that simulates a coin toss using random() method
// of JS Math class. Display the value of coin in your browser.
// 2 = Heads and 1 = Tails




// ANS 


// var a = Math.random()*2;
// document.write(a)
// a = Math.ceil(a)
// document.write("<br />"+a)
// if( a == 1){
//     document.write( "<br />Heads")
// }else{
//     document.write("<br />Tails")
// }


// Q3. Write a program that stores a random secret number from 1 to 10 in a
// variable. Ask the user to input a number between 1 and 10. If the user input
// equals the secret number, congratulate the user.



// ANS 


// var a = Math.random()*9
// a = Math.ceil(a)
// var b = prompt("enter secret number")
// if(a == b){
//     alert("CONGRATS")
// }else{
//     alert("SORRY")
// }
// document.write(a)




  //                    Converting strings to integers and decimals


  // Q1. Write a program that asks the user about his weight. Parse the user
// input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms



// ANS 



// var a = prompt("enter your weight");
// var b = parseInt(a)
// document.write(b+"kgs")



//                  Converting strings to numbers, numbers to strings



// Q1. Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.
// Hint: (use typeof())



// ANS 


// var a = "472";
// document.write("<br />"+a)
// var b = typeof(a)
// document.write("<br />"+b)
// var c = Number(a)
// document.write("<br />"+c)
// var d = typeof(c)
// document.write("<br />"+d)


// Q2. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.



// ANS 


// var a = 35.36;
// document.write("<br />"+a)
// var b = typeof(a)
// document.write("<br />"+b)
// var c = a.toString()
// document.write("<br />"+c)
// var d = typeof(c)
// document.write("<br />"+d)
// var e = c.replace('.',"")
// document.write("<br />"+e)




 //        Controlling the length of decimals



 // Q1. Write a program to control the length of decimals to 2.
// var percentage = 30 / 45 * 100; -> 66.66666666666666




// ANS 


// var percentage = 30 / 45 * 100;
// document.write("<br />"+percentage)
// var fix = percentage.toFixed(2);
// document.write("<br />"+fix)

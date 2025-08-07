// function greet(){
//     console.log('Hello this is my first function');
// }
// // greet();
// function greet(firstName, lastName) {
//     console.log("Hello " + firstName + " " + lastName);
// }

// greet("Steve", "Jobs");
// greet(100, 260);
//  function getNumber(){
//     return 10;

// }
// let result = getNumber();
// console.log(result);
// function Sum (num1, num2){
//     return num1 + num2;
// };
// Sum(10, 20);
// function multiple(x) {
//     function fn(y) {
//         return x * y;
//     }
//     return fn;
// }

// var triple = multiple(3);
// console.log(triple(2)); // Will output: 6
// console.log(triple(3)); // Will output: 9
// var add = function (num1, num2) {
//     return num1 + num2;
// };

// var result = add(10, 20);//returns 30
// console.log(result); // Output: 30  
// let numbers = [10, 20, 30, 40, 50];

// let squareNumbers = numbers.map(function(number) {
//   return number * number;
// });
// console.log(squareNumbers);
// let square = num => num * num;

// let result = square(5);
// console.log(result); //25
// function greet(firstName)
// {
//     function SayHello() {
//         console.log("Hello " + firstName);
//     }

//     return SayHello();
// }

// 
// if (1>0)
//     {
//         console.log ("1 is greater than 0");
//     }
//     if(1=="1")
//         {
//             console.log("== operator does not cosider types of operands");
//     }
    // if(1==="1")
    //     {
    //         console.log("=== operator does not cosider types of operands");
    // }
    // var mySal = 1500;
    // var yourSal = 1000;
    //  if (mySal > yourSal)
    //     {
    //         console.log("My Salary is greater then your  salary ");
    //     }
    //     else
    //         {
    //           console.log("My Salary is less then your  salary ");  
    //         }
//     var mySal = 500;
//     var yourSal = 1000;
//      if (mySal > yourSal)
//         {
//             console.log("My Salary is greater then your  salary ");
//         }
//         else if (mySal <yourSal) 
//             {
//               console.log("My Salary is less then your  salary ");  
//             }
// else if (mySal == yourSal) 
//             {
//               console.log("My Salary is equal  to your  salary ");  
//             }
// Global scope
// var globalVar = "I am var";
// let globalLet = "I am let";
// const globalConst = "I am const";

// {
//   // Block scope
//   var globalVar = "I am re-declared inside block";
//   let globalLet = "I am block scoped";
//   const globalConst = "I am also block scoped";

//   console.log("Inside block:");
//   console.log(globalVar);   // Overwrites global var
//   console.log(globalLet);   // Local to block
//   console.log(globalConst); // Local to block
// }

// console.log("\nOutside block:");
// console.log(globalVar);   // Affected by block
// console.log(globalLet);   // Still original
// console.log(globalConst); // Still original
// let day = "Saturday";

// if (day === "Saturday" || day === "Sunday") {
//   console.log("It's the weekend!");
// } else {
//   console.log("Time to work!");
// }
// let age = 3;

// if (age >= 18) {
//   console.log("You are eligible to vote.");
// } else {
//   console.log("You are not eligible to vote yet.");
// }
//  let day = "Saturday";

// if (day === "Saturday" || day === "Sunday") {
//   console.log("It's the weekend!");
// } else 
//   console.log("Time to work!");

// let username = "admin";
// let password = "1234";

// if (username === "admin" && password === "1234") {
//   console.log("Access granted");
// } else if (username === "admin") {
//   console.log("Incorrect password");
// } else {
//   console.log("Unknown user");
// }
// let temperature = 18;

// if (temperature < 10) {
//   console.log("It's too cold outside!");
// } else if (temperature >= 10 && temperature <= 25) {
//   console.log("The weather is normal.");
// } else {
//   console.log("It's getting hot!");
// }
// let username = "king";
// let password = "1234";

// if (username === "admin" && password === "1234") {
//   console.log("Access granted");
// } else if (username === "admin") {
//   console.log("Incorrect password");
// } else {
//   console.log("Unknown user");
// }
// throw new Error("Error2"); // String type
// throw 42; // Number type
// throw true; // Boolean type
// throw {
//   toString() {
//     return "I'm an object!";
//   },
// };
// 
// function f() {
//   try {
//     console.log(0);
//     throw "bogus";
//   } catch (e) {
//     console.log(1);
//     // This return statement is suspended
//     // until finally block has completed
//     return true;
//     console.log(2); // not reachable
//   } finally {
//     console.log(3);
//     return false; // overwrites the previous "return"
//     console.log(4); // not reachable
//   }
//   // "return false" is executed now
//   console.log(5); // not reachable
// }
// console.log(f()); // 0, 1, 3, false
// var floorNum= 3;
// switch(floorNum){
//     case 1:
//         console.log("your are in ground  floor")
//        break;
//     case 2:
//         console.log("your are in first floor")
//        break;
//     case 3:
//         console.log("your are in second floor")
//        break;
//     case 4:
//         console.log("your are in third floor")
//          break;
//     default:
//         console.log("your are in unknown floor")
// }
// var a = 2;
// switch (a) 
// {
//     case 1:
//     case 2:
//     case 3:
//         console.log("case 1, 2, 3 executed")
//         break;
//     case 4:
//         console.log("case 4 executed")
//         break;
//     default:
//         console.log("default case executed")
//         break;
// }
// let i = 0;
// do {
//   i += 1;
//   console.log(i);
// } while (i < 5);
// let i = 0;
// let n = 0;
// while (i < 5) {
//   i++;
//   if (i === 3) {
//     continue;
//   }
//   n += i;
//   console.log(n);
// }
// // Logs:
// // 1 3 7 12
let i = 0;
let j = 10;
checkIandJ: while (i < 4) {
  console.log(i);
  i += 1;
  checkJ: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 === 0) {
      continue;
    }
    console.log(j, "is odd.");
  }
  console.log("i =", i);
  console.log("j =", j);
}
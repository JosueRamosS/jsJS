/************************************************************************************************************/

/*  Exercise 1: Variable Declaration and Assignment */
console.log("\x1b[32m%s\x1b[0m","Exercise 1: Variable Declaration and Assignment");

//  Declare a variable name and assign it your name as a string.
const myName = "Josué Carlos Alberto";
//  Declare a variable age and assign it your age as a number.
const myAge = 25;
//  Declare a variable isStudent and assign it a boolean value indicating whether you are a student or not.
const isStudent = true;
//  Log the values of these variables to the console.
console.log(myName);
console.log(myAge);
console.log(isStudent);

/************************************************************************************************************/

/*  Exercise 2: Variable Reassignment   */
console.log("\x1b[32m%s\x1b[0m","Exercise 2: Variable Reassignment");

//  Declare a variable favoriteColor and assign it your favorite color as a string.
let favoriteColor =  "blue";
//  Log the value of favoriteColor to the console.
console.log(favoriteColor);
//  Reassign the variable favoriteColor to a different color.
favoriteColor = "white";
//  Log the new value of favoriteColor to the console.
console.log(favoriteColor);

/************************************************************************************************************/

/*  Exercise 3: Working with Different Data Types   */
console.log("\x1b[32m%s\x1b[0m","Exercise 3: Working with Different Data Types");

//  Declare a variable height and assign it your height in meters as a number.
const height = 1.72;
//  Declare a variable fullName and assign it your full name as a string.
const fullName = myName + " Ramos Suyoc";
//  Declare a variable isEmployed and assign it a boolean value indicating whether you are employed or not.
let isEmployed = false;
//  Log the types of these variables to the console using the typeof operator.
console.log(typeof(height));
console.log(typeof(fullName));
console.log(typeof(isEmployed));

/************************************************************************************************************/

/*  Exercise 4: Basic Arithmetic Operations */
console.log("\x1b[32m%s\x1b[0m","Exercise 4: Basic Arithmetic Operations");

// Declare two variables num1 and num2 and assign them any two numbers.
const num1 = 2024;
const num2 = 1998;
// Calculate the sum, difference, product, and quotient of these two numbers.
const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;
// Log the results to the console.
console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);

/************************************************************************************************************/

/*  Exercise 5: String Concatenation */
console.log("\x1b[32m%s\x1b[0m","Exercise 5: String Concatenation");

// Declare two variables firstName and lastName and assign them your first name and last name as strings.
const firstName = "Josué";
const lastName = "Ramos";
// Concatenate these two strings with a space in between to create a full name.
const completeName = firstName + " " + lastName;
// Log the full name to the console.
console.log(completeName);

/************************************************************************************************************/

/*  Exercise 6: Template Literals */
console.log("\x1b[32m%s\x1b[0m","Exercise 6: Template Literals");

// Use template literals to create a sentence that includes your name, age, and favorite color.
console.log(
    `Name: ${fullName}\n` +
    `Age: ${myAge}\n` +
    `Favorite color: ${favoriteColor}`);
// Log the sentence to the console.

/************************************************************************************************************/

/*  Exercise 7: Boolean Logic */
console.log("\x1b[32m%s\x1b[0m","Exercise 7: Boolean Logic");

// Declare two boolean variables hasDrivingLicense and hasCar.
const hasDrivingLicense = true;
const hasCar = true;
// Use logical operators to determine if a person can drive (they need both a driving license and a car).
const canDrive = (hasDrivingLicense === true && hasCar === true);
// Log the result to the console.
console.log(`It is ${canDrive} that he can drive !`);
/************************************************************************************************************/

/*  Exercise 8: Constants */
console.log("\x1b[32m%s\x1b[0m","Exercise 8: Constants");

// Declare a constant PI and assign it the value of 3.14159.
const PI = 3.14159;
// Try to reassign the value of PI and observe what happens.
// PI = 3.1416;
// Log the value of PI to the console.
console.log(PI);

/************************************************************************************************************/

/*  Exercise 9: Type Conversion */
console.log("\x1b[32m%s\x1b[0m","Exercise 9: Type Conversion");

// Declare a variable numberString and assign it a numeric value as a string (e.g., "123").
let numberString = "123";
// Convert this string to a number using the Number function.
let numberNumber = Number(numberString);
// Log the type of the converted value to the console.

console.log(typeof(numberString));
console.log(typeof(numberNumber));

/************************************************************************************************************/

/*  Exercise 10: Null and Undefined */
console.log("\x1b[32m%s\x1b[0m","Exercise 10: Null and Undefined");

// Declare a variable emptyValue and assign it the value null.
const emptyValue = null;
// Declare a variable undefinedValue without assigning any value to it.
let undefinedValue;
// Log the values and their types to the console.
console.log(emptyValue);
console.log(undefinedValue);
console.log(typeof(emptyValue));
console.log(typeof(undefinedValue));
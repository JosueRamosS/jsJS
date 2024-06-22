let js = "amazing"; // storing a string
console.log(40 + 8 + 23 - 10); // the result of this sum will be shown in web developer console (wdc)

console.log("Josué"); // showing an string in the wdc
console.log(25); // showing a number in the wdc

let firstName = "Alberto"; // we can reference this variable the times we want
let first;
console.log(firstName);

// conventions of how to name variables
let firstNamePerson; // camelCase notation
let first_name_person; // snake_case notation

// rules how we can name variables
// variables can only contains numbers, letters, underscore or dollar sign
// illegal -> let 3years = 3; syntax error
// illegal -> let josue&carlos = "JC";

// legal
let josue_carlos = "JC";
let $function = 25;

// legal but violates a rule of the convention
// only objects have variables with capital letter
let Person = "Carlos";

// conventions for constants
let PI = 3.1415;

// descriptive names of variables are clean code
let firstMajor = "Law";
let currentMajor = "Software Engineering";

let major1 = "Law";
let major2 = "Software Engineering";

console.log(currentMajor);
// Data Types
/*
Js Dynamic Programming


Number - eg: 1.25,10
String - eg: "Muthu", "Kumar"
Boolean - eg: True, False
Null
Undefined
Symbols ES6


Reference type
Array
Object Literals
Date

*/

// 1.)Number
/*
var a = 25;
var fname = "Muthu";
var isMarried = true;
var phone = null;
var b;

console.log(typeof a);
console.log(typeof fname);
console.log(typeof isMarried);
console.log(typeof phone);
console.log(typeof b);
*/

// 2.)ES6

/*
const s1 = Symbol();
console.log(s1);

const s2 = Symbol();
console.log(s2);

console.log(s1 == s2);
*/

/*
var courses = ["JS", "HTML", "CSS"];
console.log(courses);
console.log(typeof courses);
var student = { name: "Muthu", age: 31 };
console.log(student);
console.log(typeof student);

var d = new Date();
console.log(d);
console.log(typeof d);
*/

// 3.)Type conversion

/*
let a = 25;
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = true;
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = [1, 2, 3, 4, 5];
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = 35;
console.log(a, typeof a);
a = a.toString();
console.log(a, typeof a);
*/

// 4.)String to number
/*
a = "125";
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

a = false;
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

a = [1, 2, 3, 4, 5];
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

a = "Muthu";
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

a = "35.55";
console.log(a, typeof a);
a = parseInt(a);
console.log(a, typeof a);

a = "35.55";
console.log(a, typeof a);
a = parseFloat(a);
console.log(a, typeof a);
*/

// 5.) Type coercion

/*
a = "25";
b = 35;
console.log(a + b);

a = Number(a);
console.log(a+b);

a = parseFloat(a);
console.log(a + b);
*/

// 6.)Arithmetic operation
/*
let a = 100;
let b = 200;
let c;
c = a + b;
c = a - b;
c = a * b;
c = a / b;
c = a % b;
c = 2 ** 3;
c = ++a;
c = --b;

console.log(c); */

// 7.)Assignment Operators
/*
let a = 15;
// a = a + 5;

a += 5; //20
a -= 10; //10
a *= 5; //50
a /= 5; //10
a %= 5; //0
console.log(a);
 */

// 8.)Math Functions
/*
let c;
c = Math.PI;
c = Math.E;
c = Math.round(5.8); // 6
c = Math.round(5.3); // 5
c = Math.floor(5.3); // 5
c = Math.ceil(5.3); //6
c = Math.sqrt(16); //4
c = Math.abs(-100); //100
c = Math.trunc(2.34); //2
c = Math.pow(2, 4); //16
c = Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9); //1
c = Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9); //9
c = Math.random();
c = Math.floor(Math.random() * 50 + 1); // 1 to 50
c = Math.sign(-23); //-1 or 1 or 0
c = Math.sin(45); // 0.8509035245341184
c = Math.log(45); // 3.8066624897703196
c = Math.log2(45); // 5.491853096329675
c = Math.log10(45); // 1.6532125137753437

console.log(c); */

// 9.)Comparison Operators
/*
let a = 10;
let b = "10";

console.log(a == b);
console.log(a === b);
console.log(a != b);

*/

// 10.)Relational Operators
// <,>,>=,<=
/*
let a = 10;
let b = 20;

console.log("Greater : ", a > b); //false
console.log("Lesser : ", a < b); //false
console.log("Greater than or equal : ", a <= b); //true
console.log("Less than or equal : ", a >= b); //false
*/

// 11.) Logical Operators

// && AND
// || OR
// ! NOT

/*
let mark = 45;
let mark2 = 34;

console.log(mark >= 35 && mark <= 100);
console.log(mark2 >= 35 && mark2 <= 100);

let a = 5;
console.log(a >= 2 || a <= 4);

a = true;
console.log(!a);
*/

// 12.)Strict Equality or Identity Operator (===)
/*
let a = 10;
console.log(a);
let b = 10;
console.log(a == b);
let c = "10";
console.log(a == c);

console.log(a === c);

*/

// 13.)Conditional or Ternary Operator (?!)
/*
const age = 22;
const result = age >= 18 ? "Eligible" : "Not Eligible";

console.log(result);

function welcome(name) {
  const Output = name ? name : "No Name";

  console.log("Welcome " + Output);
}

welcome();
welcome(null);
welcome("Muthu");

user = { name: "Muthu", age: 31 };
console.log(user);
console.log(user.name);

const greeting = (user) => {
  const name = user ? user.name : "No name";
  return "Hello " + name;
};

console.log(greeting(user));
*/

// 14.)Conditional chain
/*
const avg = 40;
const grade =
  avg >= 90
    ? "A Grade"
    : avg >= 80
    ? "B Grade"
    : avg >= 70
    ? "C Grade"
    : avg >= 60
    ? "D Grade"
    : avg >= 50
    ? "E Grade"
    : avg >= 40
    ? "F Grade"
    : "No Grade";

console.log("Grade : ", grade);
*/

// 15.)Bitwise Operator

/* Bitwise AND(&) - Bitwise AND assignment(&=)
Bitwise OR(|) - Bitwise OR assignment(|=)
Bitwise NOT(~)
Bitwise XOR(^) - Bitwise XOR assignment(^=)
Left shift (<<) - Left shift assignment(<<=)
Right shift (>>) - Right shift assignment(>>=)
Unassigned Right shift (>>>) - Unassigned Right shift assignment(>>>=)

Decimal     Binary
   2         0010
   3         0011
   4         0100
   5         0101
*/

// Bitwise AND

/*
let a = 12;  //1100
let b = 24; //11000

console.log(a & b); // 8

a &= b;
console.log(a); // 8
*/

// Bitwise OR

/*

let a = 12;
let b = 24;

console.log(a | b); //28

a |= b;

console.log(a); //28
*/

// Bitwise NOT(~)

// ~a = -a-1

/*
let a = 25;

console.log(~a); //-26

*/

// Bitwise XOR(^)

/*
a = 24; //11000
b = 16; //10000

console.log(a ^ b); //1000 = 8

console.log((a ^= b)); //1000 = 8
*/

// LeftShift (<<)

/*
a = 5;
b = 2;

console.log(a << b); //20
a <<= b;
console.log(a); //20
*/

// RightShift (>>)

/*
a = 8;
b = 2;

console.log(a >> b); //2

a >>= b;

console.log(a); //2
*/

//16.) Nullish coalescing operator (??)

/*
const a = null ?? "No Value";
console.log(a); //No Value

const b = null ?? 45;

console.log(b); //45

*/
// Nullish coalescing Assignment operator (??=)

/*
const user = { name: "Muthu" };

console.log(user);
console.log(user.name);
user.city ??= "Thiruvraur";
console.log(user.city);
console.log(user);

*/

//17.) Increment(++) and Decrement(--) Operator

/*

let a = 1;
a++; //a=a+1

console.log(a); //2

let b = 5;
b--; //b=b-1

console.log(b); //4

*/

// Postfix Increment    a++
// Prefix Increment     ++a

/*
let x = 3;
let y = x++;

console.log("X : ", x, "Y : ", y); //4,3

let i = 3;
let j = ++i;
console.log("i : ", i, "j : ", j); //4,4
*/

// 18.) IF Statement
/*
const age = 17;

if (age >= 18) {
  console.log("You are eligible for vote.");
}

*/
/*
let age = prompt("Enter you age");

if (age != null && age >= 18) {
  console.log("You are eligible for vote");
}
  */

// IF ELSE Statement

/*
let age = prompt("Enter your age");

if (age != null && age >= 18) {
  console.log("You are eligible for vote");
} else {
  console.log("You are not eligible for vote");
}
*/

// ELSE IF Statement

/*
//Example 1

let number = 0;

if (number < 0) {
  console.log("Given number " + number + " is Negative");
} else if (number > 0) {
  console.log("Given number " + number + " is Positive");
} else {
  console.log("Given number is Zero");
}
  */

// Example 2
/*
let avg = 49;

if (avg >= 90 && avg <= 100) {
  console.log("My Grade is A");
} else if (avg >= 80 && avg <= 89) {
  console.log("My Grade is B");
} else if (avg >= 70 && avg <= 79) {
  console.log("My Grade is C");
} else if (avg >= 60 && avg <= 69) {
  console.log("My Grade is D");
} else if (avg >= 50 && avg <= 59) {
  console.log("My Grade is E");
} else {
  console.log("My Grade is F");
}
  */

// NESTED IF STATEMENT

/*
let english = 40,
  tamil = 40,
  science = 39;
maths = 31;
social = 35;
let total, avg;

total = english + tamil + science + maths + social;
avg = total / 5;
console.log("Total : " + total);
console.log("Average : " + avg.toFixed(2));

if (
  tamil >= 35 &&
  english >= 35 &&
  science >= 35 &&
  maths >= 35 &&
  social >= 35
) {
  console.log("Muthu is Pass");
  if (avg >= 90 && avg <= 100) {
    console.log("A Grade");
  } else if (avg >= 80 && avg <= 89) {
    console.log("B Grade");
  } else if (avg >= 70 && avg <= 79) {
    console.log("C Grade");
  } else if (avg >= 60 && avg <= 69) {
    console.log("D Grade");
  } else if (avg >= 50 && avg <= 59) {
    console.log("E Grade");
  } else if (avg >= 40 && avg <= 49) {
    console.log("F Grade");
  } else if (avg >= 35 && avg <= 39) {
    console.log("G Grade");
  } else {
  }
} else {
  console.log("Muthu is Fail");
  console.log("No Grade");
}
*/

// SWITCH CASE
/*
let num = 10;
switch (num) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  default:
    console.log("Invalid Input");
    break;
}
    */

// Combining Case Statment / Group Switch
/*
let letter = "O";

switch (letter) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
  case "A":
  case "E":
  case "I":
  case "O":
  case "U":
    console.log(letter + " is a Vowel");
    break;
  default:
    console.log(letter + " is not a Vowel");
    break;
} */

// LOOP STATEMENT / WHILE LOOP

/*
// While Loop 

// Syntax

  while (condition) {
      execute code
  }

*/

/*
let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}
  */
/*
console.log("---------------------");

let names = ["Muthu", "vaishnavi", "surya", "yuvanethra", "ravi", "jayanthi"];

console.log(names[5]);
*/

// DO WHILE LOOP

/*
let table = 9;
limit = 10;
i = 1;

do {
  console.log(table + " x " + i + " = " + table * i);
  i++;
} while (i <= limit);
*/

// FOR LOOP

/*
for(initialize variable, condition, statement){
  code to be executed
}
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

let arr = [];

for (let i = 0; i <= 100; i += 2) {
  arr.push(i);
}
console.log(arr);
console.log(arr[49]);
*/

// NESTED FOR LOOP

let nums = [];
for (let i = 0; i <= 5; i++) {
  nums.push([]);
  for (let j = 0; j <= 10; j += 2) {
    nums[i].push(j);
  }
}

console.log(nums);
console.table(nums);

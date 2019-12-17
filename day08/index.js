console.log('Hello World!', 'This is our first JS session', 12345);

// Strings in JS
'hello world' // Using single quotes
"Hello World" // Using double quotes
// `Hello World` // Using ticks

// Numbers in JS
12345 // An integer
123.45 // 

// Boolean
true
false

// Arrays
[1, 2, 'Shashi']

// Null
null

// Undefined
undefined

// Variables
var message;
console.log('message is', message);

message = 'Hello World';
console.log('message is', message);

message = null;
console.log('message is', message);

var userName = 'Shashi';
console.log('tyepof userName is', typeof userName);
userName = 20;
console.log('typeof userName is', typeof userName);

let city = 'Chennai';

const country = 'India';
// country = 12345; // This operation is not allowed.

typeof country // equals 'string'
typeof userName // equals 'number'

console.log('typeof country is', typeof country);

var arr = [ 1, 2, 3, 4 ];
console.log('arr:', arr);

// var arr1 = new Array(10, 20);
// console.log('arr1', arr1);

// Functions in JS
function add (num1, num2) {
  console.log(num1 + num2);
}

// var sum = add;

add(5, 6);
add(35, 65);
add(23, 22);

// Arrow functions
var sum = (a, b) => console.log('from arrow function', a + b);

sum(29, 21);

// Logical operators
var num1 = 100;
var num2 = '100';

num1 > num2 // false
num1 >= num2 // true

num1 < num2 // false
num1 <= num2 // true

num1 == num2 // true
num1 === num2 // true

if(num1 > num2) {
  console.log('num1 is greater')
}

if(num1 < num2) {
  console.log('num2 is greater');
}

if(num1 === num2) {
  console.log('both num1 and num2 are equal');
}

// Objects in JS
const obj = {
  nickName: 'Shashi',
  city: 'Chennai',
  age: 27,
  fullName: {
    firstName: 'Shashi',
    lastName: 'Shekhar'
  },
  coordinates: [10.324786, 235.34576],
  'x-y': 'test string'
};

console.log('My name is', obj.fullName.firstName); // returns 'Shashi'
console.log('I live in', obj.city);

obj.name = 'Shashi Shekhar';
obj.fullName.firstName = 'Shashi Shekhar';

const key = 'name';
obj[key] = 'John Doe';
console.log('updated name is', obj[key]);

obj['x-y'] = 'sdfjh';

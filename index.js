// 1,Function to return the length of each string in an array
function stringLength(arr) {
	return arr.map(string => string.length);
}
const stringArray = ["I", "am", "semhal"];
console.log(stringLength(stringArray));


// 2,Function to filter out and return only even numbers from an array
function evenNumbers(arr) {
	return arr.filter(num => num % 2 === 0);
}
const numbers = [11, 35, 90, 4, 2];
console.log(evenNumbers(numbers)); 


// 3,Function to return names of students who scored above 75
function passStudents(students) {
	return students.filter(student => student.score > 75).map(student => student.name);
}
const students = [{ name: "semhal", score: 95 },{ name: "eleni", score: 50 },{ name: "bruk", score: 90 }
];
console.log(passStudents(students)); 


// 4, Function to return a new array with each number squared
function squareNumbers(arr) {
	return arr.map(num => num * num);
}
const nums= [ 2, 9, 14];
console.log(squareNumbers(nums)); 


// 5,Function to return only string elements in uppercase from a mixed array
function capitalStrings(arr) {
	return arr.filter(item => typeof item === 'string').map(word => word.toUpperCase());
}
const mixedArray = [2,'function', true, 'assignment'];
console.log(capitalStrings(mixedArray)); 
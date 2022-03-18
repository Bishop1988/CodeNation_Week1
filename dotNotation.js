// console.log(Math.floor(Math.random() * 10)) // Math .floor returns the largest number less than or equal to a given number.
// console.log(Math.round(Math.random() * 10)) // Math .round rounds a number to the nearest integer
// console.log(Math.ceil(Math.random() * 10)) // Math .celi rounds a number upwards to the nearest integer and returns the result

// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("-----------")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("-----------")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("   |   |   ")

// let myBoard = ["   |   |   ", "   |   |   ", "   |   |   ", "-----------", "   |   |   ", "   |   |   ", "   |   |   ", "-----------", "   |   |   ", "   |   |   ", "   |   |   "]

// console.log(myBoard[3])

// for (i = 0; i < myBoard.length; i++) {
//     console.log(myBoard[i])
// }

// const me = () => {
//     console.log("My name is Michael")
//     console.log("My age is 34")
//     console.log("My start sign is aquarius")
// }

// me()


// let space1 = 'X';
// let space2 = ' ';
// let space3 = 'O';
// let space4 = ' ';
// let space5 = 'X';
// let space6 = ' ';
// let space7 = 'O';
// let space8 = ' ';
// let space9 = 'X';

// let grid = []

// for (let i = 0; i < 11; i++) {
//     if (i % 4 == 3) {
//         grid.push("------------")
//     } else if (i == 1) {
//         grid.push(` ${space1} | ${space2} | ${space3} `)
//     } else if (i == 5) {
//         grid.push(` ${space4} | ${space5} | ${space6} `)
//     } else if (i == 9) {
//         grid.push(` ${space7} | ${space8} | ${space9} `)
//     } else {
//         grid.push("   |   |   ")
//     }
// }

// for (let i = 0; i < 11; i++) {
//     console.log(grid[i])
// }
// // console.log(grid)

// function fizzBuzz(num) {
//     if (num % 3 == 0 && num % 5 == 0) {
//         console.log("Fizz Buzz")
//     } else if (num % 3 == 0) {
//         console.log("Fizz")
//     } else if (num % 5 == 0) {
//         console.log("buzz")
//     }
// }

// fizzBuzz(20)

// console.log(10 % 3)
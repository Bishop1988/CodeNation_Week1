// ////////////////// Activity 1 /////////////////////////
// const prompt = require("prompt-sync")() // run npm install before running this please

// let age = prompt("What is your age: ")
// let country = prompt("What country are you in: ")

// if (age > 17 && country == "UK") {
//     console.log("Yes I can serve you")
// } else if (age > 17 && country != "UK") {
//     console.log(`Your country is ${country} and I can only serve you if your are in the UK`)
// } else {
//     console.log("You aren't old enough")
// }

// ////////////////// Activity 1 /////////////////////////

// ////////////////// Activity 2 /////////////////////////

// let topping = prompt("What topping would you like?: ")

// switch (topping) {
//     case "peppers":
//     case "onion":
//     case "jalapenos":
//         console.log(`I don't mind having ${topping} on my pizza.`)
//         break;
//     case "mushrooms":
//     case "pineapple":
//     case "pepperoni":
//     case "bacon":
//         console.log(`${topping} should not be on my pizza`)
//         break;
//     default:
//         console.log("Sorry we don't have that topping.")
// }

// ////////////////// Activity 2 /////////////////////////


// ////////////////// Activity 3 /////////////////////////

// let password = "12345678"

// if (password.length < 8) {
//     console.log("password is too short")
// } else {
//     console.log(password)
// }

// ////////////////// Activity 3 /////////////////////////


// ////////////////// Activity 4 /////////////////////////

// let num = prompt("Enter a number to check if it is divisable by 3 or 5: ")

// if (num % 3 == 0 || num % 5 == 0) {
//     console.log(`${num} is divisible by 3 or 5.`)
// } else {
//     console.log(`${num} is not divisible by 3 or 5`)
// }

// ////////////////// Activity 4 /////////////////////////


// ////////////////// Activity 5 /////////////////////////

// let num = prompt("Please enter a number: ")

// if (num % 3 == 0 && num % 5 == 0) {
//     console.log("fizz buzz")
// } else if (num % 3 == 0) {
//     console.log("fizz")
// } else if (num % 5 == 0) {
//     console.log("buzz")
// } else {
//     console.log(num)
// }

// ////////////////// Activity 5 /////////////////////////


// ////////////////// Activity 6 /////////////////////////

/** Method one using built in array methods */
// function isPalindrome(num) {
//     let arr = num.toString().split("")
//     let reversed = arr.reverse().join("")
//     return num == reversed
// }

// console.log(isPalindrome(121))

/** Method two without using built in array methods */
// function isPalindrome(num) {
//     if (num < 0) {
//         return console.log("Plese enter a positive value")
//     }
//     let last_digit, reversed = 0, number = num
//     while (number != 0) {
//         last_digit = number % 10
//         reversed = reversed * 10 + last_digit
//         number = Math.floor(number / 10)
//     }
//     return reversed == num
// }

// console.log(isPalindrome(121))

// ////////////////// Activity 6 /////////////////////////


// ////////////////// Activity 7 /////////////////////////

// let placeOfWork = "Code Nation"
// let townOfHome = "Oldham"
// let timeOfDay = 23

// if (timeOfDay >= 18 && timeOfDay <= 21) {
//     console.log("Relaxing at home")
// } else if (timeOfDay >= 17 && timeOfDay < 18) {
//     console.log(`I am commuting back home to ${townOfHome}`)
// } else if (timeOfDay > 13 && timeOfDay < 17) {
//     console.log("working")
// } else if (timeOfDay >= 12 && timeOfDay <= 13) {
//     console.log("Dinner time")
// } else if (timeOfDay > 8 && timeOfDay < 12) {
//     console.log("working")
// } else if (timeOfDay >= 8 && timeOfDay < 9) {
//     console.log(`I am commuting to ${placeOfWork}`)
// } else if (timeOfDay >= 7 && timeOfDay < 8) {
//     console.log(`At home in ${townOfHome}`)
// } else if (timeOfDay > 24) {
//     console.log("Please enter a valid time")
// } else {
//     console.log("Sleeping zzzzzzzz")
// }

// if (timeOfDay >= 7) {
//     console.log(`At home in ${townOfHome}`)
// } else if (timeOfDay >= 8) {
//     console.log(`I am commuting to ${placeOfWork}`)
// } else if (timeOfDay >= 12 && timeOfDay <= 13) {
//     console.log("Dinner time")
// } else if (timeOfDay >= 17) {
//     console.log(`I am commuting back home to ${townOfHome}`)
// } else if (timeOfDay >= 18 && timeOfDay <= 21) {
//     console.log("Relaxing at home")
// } else {
//     console.log("Sleeping zzzzzzzz")
// }

// ////////////////// Activity 7 /////////////////////////


// ////////////////// Activity 8 /////////////////////////

// let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"

// let str2 = "hhhghghhgghghghgh"

// function vowels(str) {
//    const vowelList = ["a","e","i","o","u"];
//    let reversedString = str.split("").reverse().join("")
 
//    for (let char of reversedString.toLowerCase()) {
//       if(vowelList.includes(char)) {
//          return char
//       }
//    }
//    return console.log("no vowel") 
// }

// console.log(vowels(str))
// console.log(vowels(str2))

// ////////////////// Activity 8 /////////////////////////


// ////////////////// Activity 9 /////////////////////////

// let word = "Hello"

// if (word[0].toLowerCase() == word.slice(-1).toLowerCase()) {
//     console.log("true")
// } else {
//     console.log("false")
// }

// ////////////////// Activity 9 /////////////////////////


// ////////////////// Activity 10 /////////////////////////

// let num1 = 2
// let num2 = 8

// let checkIfSumIsEven = num1 + num2

// if (checkIfSumIsEven % 2 == 0) {
//     console.log(`${checkIfSumIsEven} is even`)
// } else {
//     console.log(num1 * num2)
// }

// ////////////////// Activity 10 /////////////////////////
// Array syntax

// let coffeeOrder = [
//     "Michael - Latte",
//     "Ben - Latte",
//     "Alex - Whaterver's new"
// ]

// console.log(coffeeOrder)

// coffeeOrder[1] = "Bob - Mocha"

// console.log(coffeeOrder.length)

// coffeeOrder.push("Georgina - Soy latte")

// console.log(coffeeOrder)

// coffeeOrder.pop()

// console.log(coffeeOrder)

// coffeeOrder.shift()

// console.log(coffeeOrder)

/*******************************************************************************/
// Activity 1

// let favFood = ["veg curry", "stir fry", "tofu"]

// console.log(favFood)

// favFood.push("burger")
// favFood.push("chips")

// console.log(favFood)

// favFood.pop()

// console.log(favFood)

/*******************************************************************************/ 
// Activity 2

// favFood.shift()

/*******************************************************************************/

// console.log(favFood)

// let favDrinks = [
//     "Coke",
//     "Fanta",
//     "Sprite",
//     "Orange",
//     "Drpepper",
//     "Tango",
//     "Lime",
//     "Diet coke"
// ]

// for (let i = 0; i < favDrinks.length; i++) {
//     console.log(favDrinks[i])
// }

/*******************************************************************************/ 

// let multiplesTwo = []

// for (let i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         multiplesTwo.push(i)
//     }
// }

// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`)

/*******************************************************************************/ 

// let age = 15

// while (age < 18) {
//     console.log("You're a child!")
//     age++
// }

// console.log("You're an adult")

/*******************************************************************************/ 

// let cards = ["Diamond", "Spade", "Heart", "Club"]
// let currentCard = "Club"

// while (currentCard != "Spade") {
//     console.log(currentCard)
//     currentCard = cards[Math.floor(Math.random() * 4)]
// }

// console.log(currentCard)

/*******************************************************************************/

/////////////////////////////////////////////////////////////////////////////////////////

/********************************* Activity 1 **********************************/

// let favGames = ["Call of duty", "Skyrim", "Portal", "Grand theft auto", "Battlefeild"]

// favGames.unshift("Talos") // append an element to the begging of an array
// console.log(favGames)

// favGames.splice(2, 0, "Zombies") // insert elements in the middle of an array. The first peramiter 2 is where we insert the elements the second peramiter 0 is how many elements we want to remove and then any values spereated by commas after that get added to the array
// console.log(favGames)

// for (let i = 0; i < favGames.length; i++) {
//     console.log(favGames[i])
// }


/********************************* ********* ***********************************/


/********************************* Activity 2 **********************************/

// for (let i = 0; i < 6; i++) {
//     let randomNumber = Math.floor(Math.random() * 50)
//     console.log(randomNumber)
// }

/********************************* ********* ***********************************/


/********************************* Activity 3 **********************************/

// for (let i = 9; i >= 0; i--) {
//     console.log(i)
// }

/********************************* ********* ***********************************/


/********************************* Activity 4 **********************************/

// let favGames = ["Call of duty", "Skyrim", "Portal", "Grand theft auto"]

// for (let i = 0; i < favGames.length; i++) {
//     console.log(favGames[i])
// }

// if (favGames[2] === "Portal") {
//     console.log("Yay it's Portal.")
// } else {
//     console.log("Boo! we want Portal")
// }

/********************************* ********* ***********************************/


/********************************* Activity 5 **********************************/

// let number = []

// for (let i = 0; i < 6; i++) {
//     let randomNumber = Math.floor(Math.random() * 30)
    
//     if (randomNumber % 7 == 0) {
//         number.push(`${randomNumber} is divisible by 7! 😜`)
//     } else {
//         number.push(`${randomNumber} not divisible by 7 🙁`)
//     }
// }

// for (let i = 0; i < number.length; i++) {
//     console.log(number[i])
// }
/********************************* ********* ***********************************/


/********************************* Activity 6 **********************************/

// let bobsFollowers = [
//     "John",
//     "Luke",
//     "Claire",
//     "Georgina"
// ]

// let hannahsFollowers = [
//     "Claire",
//     "Michael",
//     "Georgina",
//     "Steve"
    
// ]

// function matchingFollowers(arr1, arr2) {
//     let matches = []

//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 matches.push(arr1[i])
//             }
//         }
//     }
//     return matches
// }

// console.log(matchingFollowers(bobsFollowers, hannahsFollowers))

// // console.log(result)

/********************************* ********* ***********************************/

/********************************* Activity 7 **********************************/

/** while loop is very similar to a for loop. It is used to repeat the block of code until the condition is false. When executing while loop the condition si evaluated first so, there is a chance that the block of code won't be called at all if the condition is false at the first iteration. 
 * 
Pros of the while loop, it can run for a long time until the condition is met. Cons are easier to create a infinate loop
*/

/** while loop */

// let counter = 20
// let i = 0

// while (i < counter) {
//     console.log(`running until the condition is met ${i + 1}`)
//     i++
// }

/******************/

/** The do...while statement creates a loop that executes a specified statment until the test condition evaluates to false. The condidtion is evaluated after executing the statement, resulting in the specified statement executing at least once. The block of code is executed and then the condition is checked 
 * 
Cons or pros: the statement runs first time every time even if the condiditon is false
*/

/** do...while */

// let result = ''
// let i = 0

// do {
//     i += 1
//     result += i + ''
// } while (i > 0 && i < 5)

// console.log(result)

/******************/

/** The for loop loops through the block of code a specified number of tiems. It consists of three elements, divided by semicolons. At first, we need to initialize the variable which starts the loop with the initializer, for (initializer;). The next element is the test condiditon, which checks how many times the code will be executed, for (initializer; test condition;). The last element is the updater, for (initializer; test condition; updater) which is called at the end of each iteration to inrease of decrease the counter of the loop. */

/** for loop */

// for (let i = 0; i < 10; i++) {
//     console.log(`The loop has iterated ${i + 1} times`)
// }

/******************/

/** forEach array method iterates through an array, but here we don't specify condition or updater, here we are iterating through the given array, and we can return every item.

The pros of this method compared to the for loop is that is runs faster in some browsers
*/

/** forEach array method */

// let array = [1,2,3,4,5]
// array.forEach((item, index) => {console.log(item, index)})

/******************/

/** for in statment, loops through the properties of an Object, you can also use it to loop through an array

*/

/** for in loop */

// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }


/******************/

/********************************* ********* ***********************************/

// Different types of function

// named function declaration. It's also called definition and statement

// inside the () in the declaration is where the parameter goes
// parameters are the variable inputs that you use in the function definition

// everything inside the curly braces {} is known as the function body

// function makeBread(qty) {
//     const bread = '🍞'.repeat(qty)

//     // return value
//     return bread
// }

// inside the () in the function call is where the arguments go
// arguments are the actual values or expressions used when calling the function
// const loaves = makeBread(7)
// console.log(loaves)

/*************************************************************************************/

// fucntion expression - using a function as a value
// we set the function name to a variable and then we use an anonymous function (which is just a function without a name as the value)

// const makeBeer = function(qty) {
//     return '🍺'.repeat(qty)
// }

// const beers = makeBeer(3)
// console.log(beers)

// the function decleration is hoisted while the expression is not. The function decleration will always be put at the top of the scope, which means you can make calls to the funciton, even if its declaired somewhere later in the code. When you have an expression the function dosent acutally get created until it reaches that part in the script and that means you get an error if you try to call it before hand.

// Even though there is no "universal right way" to write a function (decleration vs expression) a lot of people lean towards function expression, because there not hoisted it makes it easier to understand where they belong in the context of an application and they are less likely to polute the global namespace

/*************************************************************************************/

// IIFE Immediately invoked function expression

// by wrapping an anonymous function in parentheses, you can then call it immediately by adding parentheses afterwards

// (function() {
//     console.log("this the iife")
// })()

/*************************************************************************************/

// Arguments

// here we have three arguments. If we want to log those out at run time we can use the key word arguments. This perticular function takes three positional arguments and that means when you call this function you need to pass the arguments in in the right order, which is managable when you only have three arguments, but imagine we had 10 or 20 arguments, things would get out of hand very quickly

// Positional
// function makeBreakfast (main, side, drink) {
//     console.log(arguments)
//     return `Breakfast includes ${main}, ${side} and ${drink}` 
// }

// const breakfast = makeBreakfast('🥐', '🧇', '☕️')
// console.log(breakfast)

/*************************************************************************************/

// Named parameters

// If a function has lots of arguments things can get confusing! a common method is to use an object for named peramiters

// the make lunch function only has one single argument, but that argument is an object that can contain multiple values and that means we can destructure the object or use it directly inside the function body. So with this approach you don't have to worrie about the order of the arguments and it also makes it more flexible to extend your code with non breaking changes in the future

// function makeLunch (opts) {
//     const { main, side, drink } = opts
//     return `Lunch includes ${main}, ${side} and ${drink}`
// }

// const myLunch = makeLunch({ main: '🍔', side: '🍟', drink: '🧃' })
// console.log(myLunch)

/*************************************************************************************/

// https://www.youtube.com/watch?v=gigtS_5KOqo 
// time: 4:54 (arrow functions)

/*************************************************************************************/

// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds")
//     setTimeout(function(){
//         console.log("Griding has stopped")
//     }, 20000)
// }

// pressGrindBeans()

/*************************************************************************************/

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`)
// }

// cashWithdrawal(123, 333333)
// cashWithdrawal(321, 222222)
// cashWithdrawal(456, 111111)

/*************************************************************************************/

// const addUp = (num1, num2) => {
//     return num1 + num2
// }

// let mySum = addUp(24, 6)
// console.log(mySum)

/*************************************************************************************/

// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5)
// }

// const getFahrenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32
// }

// console.log("The temperature is " + getFahrenheit(15) + "°F")

/*************************************************************************************/

/*********************************** Activity 1 **************************************/

// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1
//     } else {
//         return (n * factorial(n-1))
//     }
// }

// console.log(factorial(33))

/*************************************************************************************/

/*********************************** Activity 2 **************************************/

// let orderCount = 0

// const takeOrder = (size, topping) => {
//     console.log(`Order number ${orderCount + 1}`)
//     console.log(`${size} pizza with ${topping}`)
//     orderCount++
// }

// takeOrder("Large", "pineapple")
// takeOrder("Small", "pepperoni")
// takeOrder("Small", "ham")
// takeOrder("Large", "vegetable")
// takeOrder("Large", "cheese")
// takeOrder("Large", "tomato")

/*************************************************************************************/

/*********************************** Activity 3 easy way **************************************/

// let accountAmount = 1500
// let newAccountAmount = null

// const cashMachine = (pin, amount) => {
    

//     if (pin === 1234) {
//         if (amount <= accountAmount) {
//             newAccountAmount = accountAmount - amount 
//             console.log(`The amount you have withdrawn is ${amount}. Your new balance is ${newAccountAmount}`)
//         } else {
//             console.log(`Sorry you only have ${accountAmount} and you are trying to withdraw ${amount}`)
//         }
//     } else {
//         console.log("Incorrect pin")
//     }
// }

// cashMachine(1234, 2300)

/*********************************** Activity 3 harder way **************************************/ 

// let pinNumbers = [
//     {
//         pin: 1234,
//         amount: 500
//     },
//     {
//         pin: 1122,
//         amount: 1500
//     },
//     {
//         pin: 2233,
//         amount: 2300
//     },
//     {
//         pin: 3344,
//         amount: 100
//     },
//     {
//         pin: 4455,
//         amount: 5067
//     },
//     {
//         pin: 5566,
//         amount: 1250
//     },
//     {
//         pin: 6677,
//         amount: 3350
//     },
//     {
//         pin: 7788,
//         amount: 68
//     },
//     {
//         pin: 8899,
//         amount: 25
//     },
//     {
//         pin: 9910,
//         amount: 6788
//     },
// ]

// let allPinNums = []

// for (let pin in pinNumbers) {
//     allPinNums.push(pinNumbers[pin].pin)
// }

// const cashMachine = (pin, amount) => {
//     let currentUser = allPinNums.indexOf(pin) // get index position from array of user pins

//     if (currentUser === -1) {
//         return console.log("Incorrect pin") // if pin does not exist return string
//     }

//     if (amount <= pinNumbers[currentUser].amount) {
//         let newAmount = pinNumbers[currentUser].amount - amount
//         pinNumbers[currentUser].amount = newAmount
//         console.log(`You have withdrawn ${amount}. You're remaining balance is ${newAmount}`)
//     } else {
//         console.log(`Sorry you dont have enough funds in you account. You are trying to withdraw ${amount} and you only have ${pinNumbers[currentUser].amount} available balance`)
//     }
// }

// cashMachine(9910, 500)

/*************************************************************************************/

/******************************** Objects ********************************************/

// let person = {
//     name: "Michael",
//     age: 34
// }

// console.log(person)

/*******************************  *************************************/

// let alarmObj = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am"
// }

// let day = "Saturday"
// let alarm = null

// if (day === "Saturday" || day === "Sunday") {
//     alarm = alarmObj.weekendAlarm
// } else {
//     alarm = alarmObj.weekdayAlarm
// }

// console.log(alarm)

/******************************* Activity 1 *************************************/

// let person = {
//     name: "Michael",
//     age: 34,
//     favSongs: [
//         "song1",
//         "song2",
//         "song3",
//         "song4",
//         "song5"
//     ],
//     sayHi: function() {
//         console.log(`Hello my name is ${this.name}`)
//     }
// }

// const addSong = (song) => {
//     person.favSongs.push(song)
// }

// addSong("song6")

// console.log(person.favSongs)

// person.sayHi()

/******************************* Activity 2 *************************************/

// let pet = {
//     name: "plato",
//     typeOfPet: "dog",
//     age: 5,
//     color: "black and white",
//     eat: function() {
//         console.log(`${this.name} is eating`)
//     },
//     drink: function() {
//         console.log(`${this.name} is drinking`)
//     }
// }

// pet.eat()
// pet.drink()

/******************************* Activity 3 *************************************/

const coffeeShop = {
    branch: "Oldham",
    drinks: {
        latte: "2.50",
        americano: "2.00",
        espresso: "1.90",
        frappe: "3.10"
    },
    food: {
        cheeseOnToast: "2.50",
        salad: "3.50",
        panini: "4.20",
        burger: "5.50"
    },
    drinksOrdered: function() {
        let customerOrder = []
        let drinksMenu = []
        let drinksMenuPrices = []
        let drinksMenuOrderIndex = []
        let orderTotal = null

        // push unspecified amount of order items to a customer order array using the arguments key word
        for (let i = 0; i < arguments.length; i++) {
            customerOrder.push(arguments[i])
        }

        // push all the drinks keys to drinksMenu array & push all the drink values (prices) to drinksMenuPrices array
        for (let item in this.drinks) {
            drinksMenu.push(item)
            drinksMenuPrices.push(this.drinks[item])
        }

        // Now check each item in the customers order against each item in the drinks menu, if the item in the customers menu matches the item in the drinks menu then I get the index of that item in the drinks menu and I push each index to the drinksMenuOrderIndex array
        for (let i = 0; i < customerOrder.length; i++) {
            for (let j = 0; j < drinksMenu.length; j++) {
                if (customerOrder[i] == drinksMenu[j]) {
                    drinksMenuOrderIndex.push(drinksMenu.indexOf(drinksMenu[j]))
                }
            }
        }

        console.log("----------------------")
        console.log("Your drinks order")
        console.log("----------------------")

        // Now I loop through the drinksMenuOrderIndex array and I access the price (value) for each item (key) by accessing the drinksMenuPrices array and then using the drinksMenuOrderIndex[i] to target the price for that item. I use orderTotal to accumulate the total value of the order
        for (let i = 0; i < drinksMenuOrderIndex.length; i++) {
            console.log(`${customerOrder[i]}: £${drinksMenuPrices[drinksMenuOrderIndex[i]]}`)

            orderTotal += parseFloat(drinksMenuPrices[drinksMenuOrderIndex[i]])
        }

        console.log("----------------------")
        console.log(`The total cost of your drinks order is £${orderTotal.toFixed(2)}`)
        console.log(`Thank you for visiting the ${this.branch} branch`)
        console.log("----------------------")

    },
    foodOrdered: function() {
        let customerOrder = []
        let foodMenu = []
        let foodMenuPrices = []
        let foodMenuOrderIndex = []
        let orderTotal = null

        // push unspecified amount of order items to a customer order array
        for (let i = 0; i < arguments.length; i++) {
            customerOrder.push(arguments[i])
        }

        // push all the food keys to foodMenu array & push all the food values (prices) to foodMenuPrices array
        for (let item in this.food) {
            foodMenu.push(item)
            foodMenuPrices.push(this.food[item])
        }

        // Now check each item in the customers order against each item in the food menu, if the item in the customers menu matches the item in the food menu then I get the index of that item in the food menu and I push each index to the foodMenuOrderIndex array
        for (let i = 0; i < customerOrder.length; i++) {
            for (let j = 0; j < foodMenu.length; j++) {
                if (customerOrder[i] == foodMenu[j]) {
                    foodMenuOrderIndex.push(foodMenu.indexOf(foodMenu[j]))
                }
            }
        }

        console.log("----------------------")
        console.log("Your food order")
        console.log("----------------------")

        // Now I loop through the foodMenuOrderIndex array and I access the price for each item by calling the foodMenuPrices array and then using the foodMenuOrderIndex[i] to target the price for that item.
        for (let i = 0; i < foodMenuOrderIndex.length; i++) {
            console.log(`${customerOrder[i]}: £${foodMenuPrices[foodMenuOrderIndex[i]]}`)

            orderTotal += parseFloat(foodMenuPrices[foodMenuOrderIndex[i]])
        }

        console.log("----------------------")
        console.log(`The total cost of your food order is £${orderTotal.toFixed(2)}`)
        console.log(`Thank you for visiting the ${this.branch} branch`)
        console.log("----------------------")

    }
}


coffeeShop.drinksOrdered("americano", "americano", "frappe", "latte", "espresso", "espresso")
// coffeeShop.foodOrdered("cheeseOnToast", "salad", "panini", "panini", "panini", "burger", "burger", "burger")

// Items on drinks menu
// "latte": "2.50",
// "americano": "2.00",
// "espresso": "1.90",
// "frappe": "3.10"

// Items on food menu
// "cheeseOnToast": "2.50",
// "salad": "3.50",
// "panini": "4.20",
// "burger": "5.50"
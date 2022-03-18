// let myName = "Michael"
// let favColour = "Blue"
// let age = 34

// console.log(`Hello my name is ${myName} my favourate colour is ${favColour} and I am ${age} years old`)

// myName = "Bob"
// favColour = "orange"
// age = 32

// console.log(`Hello my name is ${myName} my favourate colour is ${favColour} and I am ${age} years old`)

// //////////////////////// MY solution /////////////////////////////////

// // todays date
// const todaysDate = new Date()

// // my birthday
// const myBirthDayDate = new Date(2023, 1, 11)

// // calculate time difference
// let timeDifference = myBirthDayDate.getTime() - todaysDate.getTime()

// // calaculate dates difference by dividing total milliseconds in a day
// let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

// // log result to the console
// console.log(daysDifference)

/////////////////////// solution from the group /////////////

// let myBirthDayDate, todaysDate, birthday, difference, numberOfDays
// myBirthDayDate = [11, 2]

// todaysDate = new Date()
// birthday = new Date(todaysDate.getFullYear(), myBirthDayDate[1] - 1, myBirthDayDate[0])


// if (todaysDate.getTime() > birthday.getTime()) {
//     birthday.setFullYear(birthday.getFullYear() + 1)
// }

// difference = birthday.getTime() - todaysDate.getTime()
// days = Math.floor(difference/(1000 * 60 * 60 * 24))
// console.log(`There are ${days} until your next birthday`)

///////////////////////// solution from the group /////////

// function getNumberOfDays(start, end) {
//     const date1 = new Date(start);
//     const date2 = new Date(end);

//     // One day in milliseconds
//     const oneDay = 1000 * 60 * 60 * 24;

//     // Calculating the time difference between two dates
//     const diffInTime = date2.getTime() - date1.getTime();

//     // Calculating the no. of days between two dates
//     const daysUntilBirthday = Math.round(diffInTime / oneDay);

//     return daysUntilBirthday;
// }

// let today = new Date()
// let myBirthday = new Date(2023, 1, 11)
// console.log(getNumberOfDays(today, myBirthday))
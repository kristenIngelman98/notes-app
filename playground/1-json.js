// const fs = require('fs')

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const user = JSON.parse(dataJSON)

// user.name = 'Kristen'
// user.age = 24

// const userJSON = JSON.stringify(user)
// fs.writeFileSync('1-json.json', userJSON)

// const square = function (x) {
//     return x * x
// }

// console.log(square(3))

// const squareArrow = x => x * x

// console.log(squareArrow(3))

// const event = {
//     name: 'birthday party',
//     guestList: ['kristen', 'spencer', 'matt'],
//     printGuestList() {
//         console.log('guest list for', this.name)
//         this.guestList.forEach((guest) => {
//             console.log(guest + ' is attending ' + this.name)
//         })
//     }
// }

// event.printGuestList()

// challenge - Arrow functions

//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
        return this.tasks.filter((task) => task.completed === false)   
    }
}

console.log(tasks.getTasksToDo())
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

const getNotes = require('./notes')


// customize yargs version
yargs.version('1.1.0')

// add, remove, read, list

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note!')
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note')
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'List all items',
    handler: function() {
        console.log('List items!')
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Reading all items',
    handler: function() {
        console.log('Reading items!')
    }
})
// const command = process.argv[2]

console.log(process.argv)
console.log(yargs.argv)



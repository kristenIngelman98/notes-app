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
    builder: {
        title: {
            describe: 'Note title'
        },
        body: {
            describe: 'Note description',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Title: ', argv.title)
        console.log('Body: ', argv.body)
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

// console.log(process.argv)
// console.log(yargs.argv)
yargs.parse()



const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title) 

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const updatedNotes = notes.filter((note) => note.title !== title
    )
    saveNotes(updatedNotes)

    if(notes.length !== updatedNotes.length) {
        console.log(chalk.bgGreen('Note removed!'))
    } else {
        console.log(chalk.bgRed('No note found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    
    if (note) {
        console.log(chalk.bgBlue(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.bgRed('Cannot find note!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
 // return array of all notes
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        // return empty array if notes.json file does not exist
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes, listNotes,
    readNote, readNote
}
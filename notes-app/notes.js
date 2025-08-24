const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
    return "Your notes...";
}

const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicates = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added!"));
    } else {
        console.log(chalk.red.inverse("Note title taken!"));
    }

    saveNotes(notes);
}

const removeNote = (title) => {
    const notes = loadNotes();
    const keptNotes = notes.filter((note) => note.title !== title);

    if (notes.length > keptNotes.length) {
        console.log(chalk.green.inverse("Note removed!"));
        saveNotes(keptNotes);
    } else {
        console.log(chalk.red.inverse("Note not found"));
    }

    saveNotes(keptNotes);
}

const listNotes = () => {

    const notes = loadNotes();

    console.log(chalk.inverse("Your notes"));

    notes.forEach((note) => {
        console.log(note.title);
    })
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse("Note not found"));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuff = fs.readFileSync("notes.json");
        const dataJSON = dataBuff.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = { //exporting an object
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
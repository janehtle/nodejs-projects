// const fs = require("fs");

// fs.writeFileSync("notes.txt", "Jane created this!");

// // Challenge: Append a message (str) to the notes.txt file using .appendFileSync
// // DO NOT override pre-existing message
// fs.appendFileSync("notes.txt", " Jane is learning Node.js!");
// // Make sure to start every new message with a space when appending to an existing str for proper spacing


// const add = require("./utils.js");

// const sum = add(4, -2);
// console.log(sum);


// Challenge: Define and use a function in a new file
// 1. Create a new file: notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes func
// 4. From app.js, load in and call the func printing message to console

// const validator = require("validator");

// console.log(validator.isURL("https://mead.io")); //Output: true
// console.log(validator.isEmail("jgmail.com")); // Output: false

// const notes = getNotes();
// console.log(notes);

// Challenge: Use chalk library in this project
// 1. Install latest ver of chalk
// 2. Load it into app.js
// 3. Use it to print str "Success!" to the console in green
// 4. Test your work
// Bonus: Mess around with other StyleSheet, make text bold and inversed!


// import chalk from "chalk" //pure ESM-only, can only work if package.json has type module

// console.log(chalk.green("Success!"));
// console.log(chalk.bold("Hello world!"));
// console.log(chalk.inverse.bold("Type Script!"));
// console.log(chalk.red("Type Script!"));

const notes = require("./notes"); //no need to add .js at the end
const chalk = require("chalk"); // npm install chalk@4 - this allows use of require() instead of import and w/o type module
const yargs = require("yargs");

// Customize Yargs ver
yargs.version("1.1.0");

// create add command
yargs.command({
    command: "add",
    describe: "add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },

        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: "remove",
    describe: "removing note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

// create read command
yargs.command({
    command: "read",
    describe: "reading note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})

// create list command
yargs.command({
    command: "list",
    describe: "listing notes",
    handler() {
        notes.listNotes();
    }
})


// console.log(yargs.argv);

//process.argv v yargs:
//process.argv is a func that returns an array containing the args given to the current running Node process. 
//yargs is a library for building command line interfaces.

yargs.parse(); //prints everything on single line in terminal




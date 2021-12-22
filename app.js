console.log("starting app.js");

const yargs = require(`yargs`);
const notes = require(`./notes.js`);
const argv = yargs.argv;


let title =yargs.argv.title
let body = yargs.argv.body
let command = yargs.argv._[0]

if (command === "add") {
    console.log("adding notes");
    notes.addingNote(title, body);
}
 else if (command === 'remove'){
    console.log('removing notes')
    notes.removeNote(title);
}
else if (command === 'read'){
    console.log('reading notes')
    notes.readNote(title);
}
else if (command === 'list'){
    console.log('listing all notes')
    notes.getAll()
}
else{
    console.log("unknown command used!");
}


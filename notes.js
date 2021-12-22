
const fs = require('fs')

let  fetchNotes =() => {
    try {
        return JSON.parse(fs.readFileSync('notes.txt'))
    } catch (err) {
        return []
    }
}

let  addingNote =(title, body) => {
    var notes = fetchNotes()

    var note ={ 
        title,
        body
    };
    let double = notes.filter((note) => note.title=== title);
    if (double.length === 0) {
        notes.push(note)
    fs.writeFileSync('notes.txt', JSON.stringify(notes))

    logNote(note);
    } else{
        console.log("Stop! Title already exists.");
    }

}

let removeNote =(title) =>{
    var notes = fetchNotes()
    let filteredNotes = notes.filter((notes=> notes.title !== title))
    fs.writeFileSync('notes.txt', JSON.stringify(filteredNotes))
}

let readNote =(title) =>{
    var notes = fetchNotes()
    let filteredNotes = notes.filter((notes => notes.title === title))
    logNote(filteredNotes[0])
}

let getAll =() =>{
    let notes = fetchNotes()
    notes.forEach(note => logNote(note))
}

let logNote=(note) =>{
    console.log("******************************** ");
    console.log(`Title:${note.title}`);
    console.log(`Body:${note.body}`);
}

module.exports={
    addingNote,
    removeNote,
    readNote,
    getAll
}
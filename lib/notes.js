const fs = require('fs');
const path = require('path');

function newNote(body, notesArr) {
    console.log(notesArr);
    const note = body;
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArr }, null, 2)
    );
    return note;
}

module.exports = {
    newNote
}
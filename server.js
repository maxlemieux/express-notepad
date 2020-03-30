// Dependencies
// =============================================================
const express = require('express');
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

/* Setup Express app */
const app = express();
const PORT = process.env.PORT || 3000;

/* Middleware */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Static routes */
app.use(express.static('public'));

/* File DB */
const fileDbPath = path.join(__dirname, 'db/db.json');

/* Routes */
app.get('/notes', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});

/* Displays all notes */
app.get('/api/notes', function(req, res) {
  fs.readFile(fileDbPath, (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    res.json(notes);
  });
});
  
/* Load index page - this catchall route must be the last GET route */
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

/* API endpoint to create a new note */
app.post('/api/notes', function(req, res) {
  /* Read the existing notes from the file DB */
  fs.readFile(fileDbPath, (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    const newNote = req.body;

    /* Set Version 4 (Random) UUID for this note */
    newNote.id = uuid.v4();
    
    notes.push(newNote);
    console.log(notes);

    /* Write the notes back to the file DB with the new note included */
    fs.writeFile(fileDbPath, JSON.stringify(notes), (err) => {
      if (err) throw err;
    });
    /* Send the new note back to the client */
    res.json(newNote);
  });
});

/* API endpoint to delete a specific note */
app.delete('/api/notes/:id', function(req, res) {
  const noteId = req.params.id;
  console.log(noteId);
  fs.readFile(fileDbPath, (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    const remainingNotes = [];
    for (let i=0; i<notes.length; i++) {
      if (notes[i].id !== noteId) {
        remainingNotes.push(notes[i]);
      };
    };
    /* Write the notes back to the file DB with the deleted note omitted */
    fs.writeFile(fileDbPath, JSON.stringify(remainingNotes), (err) => {
      if (err) throw err;
    });
  });
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});

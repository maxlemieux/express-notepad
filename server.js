// Dependencies
// =============================================================
const express = require('express');
const fs = require('fs');
const path = require('path');

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
  
// Basic route that sends the user first to the AJAX Page
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Create New Notes
app.post('/api/notes', function(req, res) {
  const newCharacter = req.body;
  characters.push(newCharacter);
  res.json(newCharacter);
});

// Displays a single character, or returns false
app.delete('/api/notes/:id', function(req, res) {
  const note = req.params.note;

  console.log(note);

  for (const i = 0; i < notes.length; i++) {
    if (note === notes[i].id) {
      return res.json(notes[i]);
    }
  }

  return res.json(false);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});

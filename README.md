# express-notepad
![dependencies status](https://img.shields.io/david/maxlemieux/express-notepad?style=for-the-badge)
![code size](https://img.shields.io/github/languages/code-size/maxlemieux/express-notepad?style=for-the-badge)

## Table of Contents
* [About](#about)
* [Installation](#installation)
* [Usage](#usage)
* [Demo](#demo)
* [Technologies](#technologies)

## About
Create and manage simple text notes with an Express.js backend. Notes are stored in a flat file on the server, containing data in JSON format.

## Installation

Clone the repo:

`git clone https://github.com/maxlemieux/express-notepad`

Change directories to `express-notepad`:

`cd express-notepad`

Install the dependencies (`express` and `uuid`):

`npm i`

### Local installation

Run the app:

`node server.js`

This should launch an Express server on port 3000. Visit http://localhost:3000 to use the app.

### Heroku installation
Log into Heroku:

`heroku login`

Initialize a new project:

`heroku create`

Push the app to Heroku:

`git push heroku master`

Visit the app at the link provided at the end of the output of the Heroku remote log.

## Usage

Once you've installed the application either locally or on Heroku, visit it in a browser and click "Get Started" to begin.

You will see the notes screen. The left side shows stored notes, the right side is a simple form allowing you to enter the title and contents of a note. 

### Creating notes
Click the "pencil" icon at top right of the screen at any time to create a new note.

Once you've filled in the title and contents of your note, you can click the "Save" icon on the top right of the screen.

### Viewing notes
Click the name of a note on the left side to view that note.

### Removing notes
To delete a note, click the "trash" icon next to the name of the note on the left hand side of the screen.

### Help! I want to edit an existing note.
Editing is not currently supported by this version of express-notepad, however if there is enough interest it may be added to a future release.

## Demo
The app is deployed to Heroku (beware, notes may have been inserted from the wild...)

[https://immense-eyrie-52876.herokuapp.com/](https://immense-eyrie-52876.herokuapp.com/)

## Technologies used
* Node.js
* Express.js
* uuid
* JSON
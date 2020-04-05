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
Create and manage simple text notes with an Express.js backend.

## Installation

Clone the repo:

`git clone https://github.com/maxlemieux/express-notepad`

Change directories to `express-notepad`, then install the dependencies (`express` and `uuid`):

`cd express-notepad`
`npm i`

### Local installation

Run the app:

`node server.js`

This should launch an Express server on port 3000. Visit http://localhost:3000 and click "Get Started" to begin.

### Heroku installation
Log into Heroku:
`heroku login`

Initialize a new project:
`heroku create`

Push the app to Heroku:
`git push heroku master`

Visit the app at the link provided at the end of the output of the Heroku remote log.

## Usage

You will see the notes screen. The left side shows stored notes, the right side is a simple form allowing you to enter the title and contents of a note. 

### Creating notes
Click the "pencil" icon at top right of the screen at any time to create a new note.

Once you've filled in the title and contents of your note, you can click the "Save" icon on the top right of the screen.

### Editing notes
Click the name of a note on the left side to load that note. Click "Save" when done editing it to save your changes.

### Removing notes
To delete a note, click the "trash" icon next to the name of the note on the left hand side of the screen.

## Demo
The app is deployed to Heroku (beware, notes may have been inserted from the wild...)

[https://secure-woodland-11919.herokuapp.com/](https://secure-woodland-11919.herokuapp.com/)


## Technologies used
* Node.js
* Express.js
* uuid
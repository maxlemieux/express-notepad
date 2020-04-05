# express-notepad
![dependencies status](https://img.shields.io/david/maxlemieux/express-notepad?style=for-the-badge)

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

`npm i`

Run the app:

`node server.js`

This should launch an Express server on port 3000. Visit http://localhost:3000 and click "Get Started" to begin.


## Usage

You will see the notes screen. The left side shows stored notes, the right side is a simple form allowing you to enter the title and contents of a note. 

Once you've filled in the title and contents of your note, you can click the "Save" icon on the top right of the screen.

Click the "pencil" icon at top right of the screen at any time to create a new note.

Click the name of a note on the left side to load that note. Click "Save" when done editing it to save your changes.

## Demo
The app is deployed to Heroku (beware, notes may have been inserted from the wild...)

heroku link here



## Technologies used
* Node.js
* Express.js
* uuid
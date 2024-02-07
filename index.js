const readlineSync = require('readline-sync');
const fs = require('fs');

// Prompt for text
const text = readlineSync.question('Enter up to three characters for the logo text: ', {
  limit: input => input.length <= 3,
  limitMessage: 'Sorry, you can only enter up to three characters.'
});

// Prompt for text color
const textColor = readlineSync.question('Enter the color for the text: ');

// Prompt for shape
const shapes = ['circle', 'triangle', 'square'];
const index = readlineSync.keyInSelect(shapes, 'Choose a shape: ');

// Prompt for shape color
const shapeColor = readlineSync.question('Enter the color for the shape: ');

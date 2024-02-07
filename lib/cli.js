const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./shapes');
const SVG = require('./svg');
const { writeFile } = require('fs/promises');

class CLI {
    run() {
      return inquirer
        .prompt([
          {
            type: "input",
            name: "text",
            message:
              "Enter logo text: (Maximum is 3 characters.)",
            validate: (text) =>
              text.length <= 3 ||
              "The message must not contain more than 3 characters",
          },
          {
            type: "input",
            name: "textColor",
            message: "Enter color for your text:",
          },
          {
            type: "list",
            name: "shapeType",
            message: "Choose shape for your logo",
            choices: ["circle", "square", "triangle"],
          },
          {
            type: "input",
            name: "shapeColor",
            message: "Enter a shape color",
          },
        ])
        .then(({ text, textColor, shapeType, shapeColor }) => {
          let shape;
          switch (shapeType) {
            case "circle":
              shape = new Circle();
              break;
  
            case "square":
              shape = new Square();
              break;
  
            default:
              shape = new Triangle();
              break;
          }
          shape.setColor(shapeColor);
  
          const svg = new SVG();
          svg.setText(text, textColor);
          svg.setShape(shape);
          return writeFile("logo.svg", svg.render());
        })
        .then(() => {
          console.log("Created logo.svg");
        })
        .catch((error) => {
          console.log(error);
          console.log("Oops! Something went wrong.");
        });
    }
  }
  
  module.exports = CLI;
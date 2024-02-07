# SVG_Logo_Maker

## Overview
SVG Logo Maker is a command-line application designed to empower freelance web developers to quickly generate simple logos for their projects without the need for a graphic designer. This tool offers an easy-to-use interface where users can customize their logo by selecting text, colors, and shapes.

## Features
- **Customizable Text:** Users can input up to three characters to appear in the logo.
- **Text and Shape Colors:** Offers the flexibility to choose any color by keyword or hexadecimal value for both text and the chosen shape.
- **Shape Selection:** Users can choose from three different shapes - circle, triangle, and square - to add to their logo.
- **SVG Output:** Generates an SVG file named `logo.svg` that can be used across various platforms and resolutions.

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 12.x or higher)
- A modern web browser to view the SVG file

## Installation
Clone the repository to your local machine:

GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

Mock-Up
The following image shows a mock-up of the generated SVG given the following input entered by the user: SVG for the text, white for the text color, circle from the list of shapes, and green for the shape color. Note that this is just an image of the output SVG and not the SVG file itself:

 
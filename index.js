const inquirer = require("inquirer");
const fs = require("fs");

const { Triangle, Square, Circle } = require("./lib/shapes");

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message:
          "What text would you like to display in your logo? Enter up to 3 characters",
      },
      {
        type: "input",
        name: "textColor",
        message: "What color is the text? Keyword or hexidecimal value with an #.",
          
      },
      {
        type: "list",
        name: "shape",
        message: "What shape would you like to use?",
        choices: ["Triangle", "Square", "Circle"],
      },
      {
        type: "input",
        name: "shapeColor", 
        message: "What color is the shape? Keyword or hexidecimal value with an #.",
      },
      {
        type: "input",
        name: "backgroundColor",
        message:
          "What color is the background? You can choose a color keyword or hexadecimal value with a #.",
      },
    ])
    .then((answers) => {
      if (answers.text.length > 3) {
        //requires no more than 3 characters
        console.log("Please enter up to 3 characters.");
        return promptUser();
      } else {
        writeToFile("logo.svg", answers);
      }
    });
};

const generateSVG = (answers) => {
  let shape = "";
  switch (answers.shape) {
    //get the chosen shape
    case "Triangle":
      shape = new Triangle();
      break;
    case "Square":
      shape = new Square();
      break;
    case "Circle":
      shape = new Circle();
      break;
    default:
      break;
  }

  shape.setColor(answers.shapeColor);
//helps with centering the shape
  const centerX = 150;
  const centerY = 100;

  //xmnls was missing from the svg tag which was why I couldn't open with live server. That fixes the issue.
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
    <rect x="0" y="0" width="300" height="200" fill="${
      answers.backgroundColor
    }" />
    <g transform="translate(${centerX}, ${centerY})">
      ${shape.render()}
      <text x="0" y="0" dominant-baseline="middle" text-anchor="middle" fill="${answers.textColor}">${
        answers.text
      }</text>
    </g>
  </svg>`;
};

const writeToFile = (fileName, data) => {
  const svgString = generateSVG(data);
  try {
    fs.writeFileSync(fileName, svgString);
    console.log("Success! SVG generated.");
  } catch (error) {
    console.error("An error occurred while writing the SVG file.", error);
  }
};

promptUser();

const inquirer = require('inquirer');
const fs = require('fs');

const { Triangle, Square, Circle } = require('./lib/shapes');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'What text would you like to display in your logo? Enter up to 3 characters',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'What color is the shape? Keyword or hexidecimal value with an #.',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like to use?',
      choices: ['Triangle', 'Square', 'Circle'],
    },
    {
      type: 'input',
      name: 'backgroundColor',
      message: 'What color is the background? You can choose a color keyword or hexadecimal value with a #.',
    }
  ])
  .then((answers) => {
    if (answers.text.length > 3) {
      console.log('Please enter up to 3 characters.');
      return promptUser();
    } else {
      writeToFile('logo.svg', answers);
    }
  
});
};

const generateSVG = (answers) => {
  let shape = "";
  switch (answers.shape) {
    case 'Triangle':
      shape = new Triangle();
      break;
    case 'Square':
      shape = new Square();
      break;
    case 'Circle':
      shape = new Circle();
      break;
      default:
        break;
  }

  shape.setColor(answers.textColor);

  return `
  <svg width="300" height="300" style="background-color:${answers.backgroundColor}">
      ${shape.render()}
      <text x="150" y="150" dominant-baseline="middle" text-anchor="middle" fill="white">${answers.text}</text>
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
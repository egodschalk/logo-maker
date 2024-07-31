const {writeFile} = require('fs/promises');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes')
const SVG = require('./lib/text')


class Questions {
    run () {
        return inquirer.prompt([
            {
                type: "input",
                message: "Please enter 3 letters for the text of your logo",
                name: "logoText"
            },
            {
                type: "input",
                message: "Please enter the text color for your logo, using either the color name or a hexidecimal code",
                name: "textColor",
            },
            {
                type: "list",
                message: "Please choose the shape you would like to use for your logo",
                name: "logoShape",
                choices: ["circle", "square", "triangle"],
            },
            {
                type: "input",
                message: "Please enter the shape color for your logo, using either the color name or a hexidecimal code",
                name: "shapeColor",
            },
        ])
        .then(({logoText, textColor, logoShape, shapeColor}) => {
            let shape;
            switch (logoShape) {
                case "circle":
                    shape = new Circle()
                    break;
                case "square":
                    shape = new Square()
                    break;
                default:
                    shape = new Triangle()
                    break;
            }
        shape.setColor(shapeColor);
        const svg = new SVG();
        svg.setText(logoText, textColor);
        svg.setShape(shape);

        console.log(svg.render());
        return writeFile('logo.svg', svg.render());

        })

        .then(() => {
            console.log('success')
            
        }) .catch ((error) => console.log(error));
    }
}
    
new Questions().run()


// function writeToFile(fileName, answers) {
//     fs.writeFile('logo.svg', generateMarkdown(answers), (err) =>
//         err ? console.error(err) : console.log('Success!')
//       );
//  }

//  function init() { 
//     inquirer.prompt(questions).then(answers => {
//         writeToFile('logo.svg', answers)
//     })
// }

// // Function call to initialize app
// init();






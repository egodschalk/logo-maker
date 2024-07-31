const {writeFile} = require('fs/promises');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes')
const SVG = require('./lib/text')


class Questions {
    run () {
        return inquirer.prompt([
            {
                type: "input",
                message: "Please enter up to 3 letters for the text of your logo:",
                name: "logoText"
            },
            {
                type: "input",
                message: "Please enter the text color for your logo (color name or hex code):",
                name: "textColor",
            },
            {
                type: "list",
                message: "Please choose the shape you would like to use for your logo:",
                name: "logoShape",
                choices: ["circle", "square", "triangle"],
            },
            {
                type: "input",
                message: "Please enter the shape color for your logo (color name or hex code):",
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
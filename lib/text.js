class SVG {
    constructor() {
        this.textEl = "";
        this.shapeEl = "";
    }
    render() {
        return `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`
    }
    setText(message, color) {
        if (message.length > 3) {
            throw new Error("Must be 3 characters or less")
        }
        this.textEl = `<text x="150" y="150" font-size="54" text-anchor="middle" fill="${color}">${message}</text>`
    }

    setShape(shape) {
        this.shapeEl = shape.render()
    }
}

module.exports = SVG;
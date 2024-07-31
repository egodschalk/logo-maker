class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render () {
        return `<circle cx="150" cy="130" r="100" stroke="red" fill="${this.color}" stroke-width="0"/>`
    }
}

class Square extends Shape {
    render () {
        return `<rect x="50" y="35" width="200" height="200" stroke="black" fill="${this.color}" stroke-width="0"/>`
    }
}

class Triangle extends Shape {
    render () {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}


module.exports = {Circle, Square, Triangle};


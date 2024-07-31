const { Circle, Square, Triangle } = require('./shapes');

describe ('Shapes', () => {
    
    describe('Circle', () => {
        it('should return a cyan colored circle', () => {
            const shape = new Circle();
            shape.setColor("cyan");
            expect(shape.render()).toEqual('<circle cx="150" cy="130" r="100" stroke="red" fill="cyan" stroke-width="0"/>');
        });
    });

    describe('Square', () => {
        it('should return a circle with color #FF2D5D', () => {
            const shape = new Square();
            shape.setColor("#FF2D5D");
            expect(shape.render()).toEqual('<rect x="50" y="35" width="200" height="200" stroke="black" fill="#FF2D5D" stroke-width="0"/>');
        });
    });

    describe('Triangle', () => {
        it('should return a blue colored triangle', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
        });
    });
        
});
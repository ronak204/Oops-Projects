
class Shape {
    rectangleArea(width, height) {
        if (width <= 0 || height <= 0) {
            throw new Error("Width and height must be positive numbers.");
        }
        return width * height;
    }

    circleArea(radius) {
        if (radius <= 0) {
            throw new Error("Radius must be a positive number.");
        }
        const pi = 3.14;
        return pi * radius * radius;
    }
}

const shape = new Shape();

try {
    const width = 5;
    const height = 10;
    const rectangleArea = shape.rectangleArea(width, height);
    console.log(`The area of the rectangle is: ${rectangleArea}`);

    const radius = 7;
    const circleArea = shape.circleArea(radius);
    console.log(`The area of the circle is: ${circleArea}`);
} catch (error) {
    console.error(error.message);
}


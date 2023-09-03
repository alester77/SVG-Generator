const { Triangle, Square, Circle } = require('./shapes');  // Update the path

describe('Shape classes', () => {
  test('Triangle should render correctly', () => {
    const triangle = new Triangle();
    triangle.setColor("red"); //setting color to red to see that it fills the string correctly
    expect(triangle.render()).toBe('<polygon points="150,64 100,193 200,193" fill="red" />');
  });

  test('Square should render correctly', () => {
    const square = new Square();
    square.setColor("blue"); //setting color to blue to see that it fills the string correctly
    expect(square.render()).toBe('<rect x="100" y="100" width="100" height="100" fill="blue" />');
  });

  test('Circle should render correctly', () => {
    const circle = new Circle();
    circle.setColor("green"); //setting color to green to see that it fills the string correctly
    expect(circle.render()).toBe('<circle cx="150" cy="150" r="50" fill="green" />');
  });
  
});
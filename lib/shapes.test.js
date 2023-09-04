const { Triangle, Square, Circle } = require('./shapes');

describe('Shape classes', () => {
  test('Triangle should render correctly', () => {
    const triangle = new Triangle();
    triangle.setColor('red');
    expect(triangle.render()).toEqual(
      '<polygon points="0,-86 -75,43 75,43" fill="red" />'
    );
  });

  test('Square should render correctly', () => {
    const square = new Square();
    square.setColor('blue');
    expect(square.render()).toEqual(
      '<rect x="-50" y="-50" width="100" height="100" fill="blue" />'
    );
  });

  test('Circle should render correctly', () => {
    const circle = new Circle();
    circle.setColor('green');
    expect(circle.render()).toEqual(
      '<circle cx="0" cy="0" r="50" fill="green" />'
    );
  });
});
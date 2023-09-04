class Shape {
  constructor() {
    this.color = '';
  }
  setColor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  render() {
    // Adjusted points for a centered triangle
    return `<polygon points="0,-86 -75,43 75,43" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    // Adjusted position for a centered square
    return `<rect x="-50" y="-50" width="100" height="100" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    // Adjusted position for a centered circle
    return `<circle cx="0" cy="0" r="50" fill="${this.color}" />`;
  }
}

module.exports = {Triangle, Square, Circle};

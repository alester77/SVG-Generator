class Shape {
  constructor(){
    this.color = "";
  }
  setColor(color){
    this.color = color;
  }
}

class Triangle extends Shape {
  render(){
    // the points return a more equal-ish sided triangle
    return `<polygon points="150,64 100,193 200,193" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render(){
    return `<rect x="100" y="100" width="100" height="100" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render(){
    return `<circle cx="150" cy="150" r="50" fill="${this.color}" />`;
  }
}

module.exports = {Triangle, Square, Circle};

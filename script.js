class Room {
  constructor(name, length, width) {
    this.name = name;
    this.length = length;
    this.width = width;
  }

  getArea() {
    return "Area: " + this.length * this.width;
  }

  getPerimeter() {
    return "Perimeter: " + this.length * this.width * 2;
  }

  available = true;

  capacity = 15;
}

const room1 = new Room("Sun", 30, 20);
const room2 = new Room("Green", 15, 20);

room2.available = false;

console.log(room1.available);
console.log(room2.available);

console.log("--------");

console.log(room1.name);
console.log(room1.length);
console.log(room1.width);
console.log(room1.getArea());
console.log(room1.getPerimeter());

console.log("--------");

console.log(room2.name);
console.log(room2.length);
console.log(room2.width);
console.log(room2.getArea());
console.log(room2.getPerimeter());

console.log("--------");

room2.capacity = 18;
console.log(room1.capacity);
console.log(room2.capacity);

// Define a prototype object
const carPrototype = {
  make: "unknown",
  model: "unknown",
  year: "unknown",
  getCarInfo: function () {
    return `${this.make} ${this.model} (${this.year})`;
  },
};

function run() {
  // Create a new object using the prototype
  const car1 = Object.create(carPrototype);
  console.log(car1);
  car1.make = "Honda";
  car1.model = "Civic";
  car1.year = 2020;

  // Create another new object using the prototype
  const car2 = Object.create(carPrototype);
  car2.make = "Toyota";
  car2.model = "Corolla";
  car2.year = 2021;

  // Test the new objects
  console.log(car1.getCarInfo()); // Output: "Honda Civic (2020)"
  console.log(car2.getCarInfo()); // Output: "Toyota Corolla (2021)"
}

run();

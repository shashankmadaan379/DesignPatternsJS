// context(person) (should hold the referance to the strategy object)
// strategy (car,bus,train,swim)
// Person => car,bus,train,swim => office

function JobPerson(strategy) {
  this.strategy = strategy;
}
JobPerson.prototype.goToOffice = function () {
  return this.strategy();
};
const trainStrategy = function () {
  console.log("Train");
};
const busStrategy = function () {
  console.log("Bus");
};
const carStrategy = function () {
  console.log("Car");
};
const swimStrategy = function () {
  console.log("Swim");
};

const officeViaTrain = new JobPerson(trainStrategy);
const officeViaCar = new JobPerson(carStrategy);
const officeViaBus = new JobPerson(busStrategy);
console.log(officeViaCar.goToOffice());
console.log(officeViaTrain.goToOffice());

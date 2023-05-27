// context(person) (should hold the referance to the strategy object)
// strategy (car,bus,train,swim)
// Person => car,bus,train,swim => office

function Shipping(strategy) {
  this.strategy = strategy;
}
Shipping.prototype.getShippingProductCost = function () {
  return this.strategy();
};

//group of strategies
const trainStrategy = function () {
  console.log("It cost 200$ via train.");
};
const busStrategy = function () {
  console.log("It cost 100$ via bus.");
};
const carStrategy = function () {
  console.log("It cost 150$ via car.");
};
const swimStrategy = function () {
  console.log("cost 20$");
};

const arr = [];
const shippedViaTrain = new Shipping(trainStrategy);
arr.push(shippedViaTrain);
const shippedViaCar = new Shipping(carStrategy);
arr.push(shippedViaCar);
const shippedViaBus = new Shipping(busStrategy);
arr.push(shippedViaBus);

arr.forEach(function (shipping) {
  console.log(shipping.getShippingProductCost());
});

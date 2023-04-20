/* 
  prototype ---- set of rules  
  object (Car)
*/




//function ---car prototype

function CarPrototype(proto){
    this.clone=function(){
        const car=new Car();  //empty car

        //clone
        car.wheels=proto.wheels;
        car.engines=proto.engines;
        return car;

    }
}

//constructor function
function Car(wheels,engines){
    this.wheels=wheels;
    this.engines=engines;
    this.start=function(){
        console.log("Car started");
    }
    this.break=function(){
        console.log("Car Stopped");
    }
}


// clone using Object.create()
// var car=new Car(4,2);
// console.log(car);

// var car1=Object.create(car)
// console.log(car1);


// console.log(car1.wheels);
// console.log(car.wheels);


// console.log(car1.start());
// console.log(car.start());





//user
function run(){
    const proto=new Car(4,2); // first car
    console.log(proto);


   const prototype=new CarPrototype(proto);
   const car1=prototype.clone();   //copied car 1
   console.log(car1.wheels)
   console.log(car1.start());


   const car2=prototype.clone();  //copied car 2
   console.log(car2.engines);
   console.log(car2.break());

}

run();




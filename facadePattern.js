/*
The Facade Design Pattern is a structural design pattern that provides a simplified interface 
to a complex system of objects, making it easier to use and understand. 
It involves creating a unified interface that hides the complexity of the underlying system 
by providing a simpler, high-level interface for the client to interact with 
*/

//Subsystem-1
class Processor {
  constructor() {
    this.speed = "2.5GHz";
  }
  runProgram(program) {
    console.log(
      `Running ${program} on processor with a speed of ${this.speed}`
    );
  }
}

//Subsystem-2
class HardDisk {
  constructor() {
    this.capacity = "1TB";
  }
  readData(location) {
    console.log(
      `Reading data from ${location} on a hard disk with a capacity of ${this.capacity}`
    );
  }
}

//Subsystem-3
class GraphicsCard {
  constructor() {
    this.model = "Nvidia GeForce RTX 3080";
  }
  renderImage(image) {
    console.log(
      `Rendering ${image} on graphics card with a model ${this.model}`
    );
  }
}

//Subsystem-4
class NetworkInterface {
  constructor() {
    this.speed = "1Gbps";
  }
  sendData(data) {
    console.log(
      `Sending ${data} with speed ${this.speed} on Network Interface`
    );
  }
}

//Facade

class Facade {
  constructor() {
    this.processor = new Processor();
    this.harddisk = new HardDisk();
    this.graphicsCard = new GraphicsCard();
    this.networkinterface = new NetworkInterface();
  }

  boot() {
    this.processor.runProgram("BIOS");
    this.harddisk.readData("Boot sector");
    this.processor.runProgram("Operating System");
  }

  openImage() {
    this.graphicsCard.openImage(image);
  }

  sendData(data) {
    this.networkinterface.sendData(data);
  }
}

//Client
function run() {
  const computer = new Facade();
  computer.boot();
  computer.sendData("Hello World !");
}

run();

/* 

  In this example, we have four subsystems: Processor, HardDisk, GraphicsCard, and NetworkInterface. 
  Each of these subsystems has its own set of operations that can be performed on it.
  We then create a Facade class called Facade that provides a simplified interface to all of the 
  subsystems. The client can then use the Facade class to interact with the subsystems without 
  having to worry about the complexities of the underlying system.
  In the client code, we create an instance of the Facade class and call its methods to perform 
  the desired tasks. The client code doesn't need to know anything about the individual subsystems or 
  their operations - it simply interacts with the Facade class, which takes care of all the 
  underlying details.
 
*/

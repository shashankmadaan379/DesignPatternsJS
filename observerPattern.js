// Observer Design Pattern

class YoutubeChannel {
  subscriptionArray = [];
  subscribe(subscriber) {
    this.subscriptionArray.push(subscriber);
  }
  unsubscribe(subscriber) {
    this.subscriptionArray = this.subscriptionArray.filter(
      (sub) => sub.id !== subscriber.id
    );
  }
  publish(msg) {
    for (let subscriber of this.subscriptionArray) {
      subscriber.notify(msg);
    }
  }
}
class Subscriber {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  notify(msg) {
    console.log(`Hey ${this.name}: ${msg}`);
  }
}

const sub1 = new Subscriber(1, "Shashank");
const sub2 = new Subscriber(2, "Rohit");
const sub3 = new Subscriber(3, "Madaan");
// const subArray = [sub1, sub2, sub3];
// console.log(subArray);

const channel = new YoutubeChannel();
channel.subscribe(sub1);
channel.subscribe(sub2);
channel.subscribe(sub3);
channel.publish("Welcome to my youtube channel");

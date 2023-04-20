// IIFE -- Immediately Invoked Function Expression  (enclosed scope) closure + privacy

//global namespace not get polluted
const singleTon = (function () {
  let instance = null;
  function createInstance() {
    return { name: "SKM", age: 21, luckno: Math.floor(Math.random() * 100) };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instance1 = singleTon.getInstance();
const instance2 = singleTon.getInstance();
const instance3 = singleTon.getInstance();
console.log(instance1);
console.log(instance2);
console.log(instance3);

//output

// { name: 'SKM', age: 21, luckno: 78 }
// { name: 'SKM', age: 21, luckno: 78 }
// { name: 'SKM', age: 21, luckno: 78 }

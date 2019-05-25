// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const carName = () => {
  let carType = "Pruis";
  let oldCar = () => {
    console.log(`I have an old ${carType}`);
  };
  return oldCar;
};

const newCar = carName();
newCar();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let number = 0;
  return () => {
    return ++number;
  };
};
const newCounter = counter();
console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let number = 0;
  return {
    increment: () => ++number,
    decrement: () => --number
  };
};

const anotherCounterFactory = counterFactory();
anotherCounterFactory.increment();
anotherCounterFactory.decrement();

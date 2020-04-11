class Vehicle {
  constructor(name, wheelCount, maxSpeed){
this.name = name;
this.wheelCount = wheelCount;
this.maxSpeed = maxSpeed;
this.speed = 0;
// ✕ increases the speed by a third of maxSpeed (1ms)
// ✕ doesn't set the speed higher than the maxSpeed

  }
  accelerate(){
  return ` ${this.speed} + ${this.maxSpeed} / 3 `
    // return this.speed + this.maxSpeed / 3
  } 
}

class Car extends Vehicle {
  constructor(wheelCount){
    super(wheelCount, 4)
  }
  // constructor(maxSpeed){
  //   super(maxSpeed, 80)
  
  // wheelCount = 4
  // this.wheelCount = 4

  // sayVroom() {
  //   constructor(c){
  //   return 'Vroom';
  }

class Ferrari extends Car {
}


module.exports = {
  Vehicle,
  Car,
  Ferrari
}

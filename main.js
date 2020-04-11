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
    if(this.speed < this.maxSpeed)
    this.speed = this.speed + (1/3 * this.maxSpeed)
  } 
    // return this.speed + this.maxSpeed / 3
  } 


class Car extends Vehicle {
  constructor(name){
    super(name, 4)
  }
  // constructor(maxSpeed){
  //   super(maxSpeed, 80)
  
  // wheelCount = 4
  // this.wheelCount = 4

//   drive(){ 
//  return "Vroom."
//   }    
}
class Ferrari extends Car { 
  constructor(){
    super(name, 'Ferrari')
    
  }
}

module.exports = {
  Vehicle,
  Car,
  Ferrari
}

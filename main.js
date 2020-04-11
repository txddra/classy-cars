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
  constructor(name, value){
    super(name, 4, value)
  }
  // constructor(maxSpeed){
  //   super(maxSpeed, 80)
  
  // wheelCount = 4
  // this.wheelCount = 4

  drive(){ 
 return "Vroom. "
  }    // I kept getting this wrong because of the space!!
}
class Ferrari extends Car { 
  constructor(){
    super('Ferrari', 180)
    
  }
  drive(){
    return "Vroom. I'm a Ferrari!"
  }
  accelerate(){
    if(this.speed < this.maxSpeed)
    this.speed = this.speed + (1/2 * this.maxSpeed)
}

}

module.exports = {
  Vehicle,
  Car,
  Ferrari
}

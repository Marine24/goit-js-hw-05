"use strict";
class Car {
  static getSpecs(car) {
    console.log(
      `Maxspeed: ${car.maxSpeed}, speed: ${car.speed}, isOn ${car.isOn}, distance: ${car.distance}, price ${car.price}.`
    );
  }
  constructor({ maxSpeed, speed = 0, price, isOn = false, distance = 0 }) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this._price = price;
    this.isOn = isOn;
    this.distance = distance;
  }
  get price() {
    return this._price;
  }
  set price(newprice) {
    this._price = newprice;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    if (this.speed < this.maxSpeed) {
      this.speed += value;
    }
  }
  decelerate(value) {
    if (this.speed > 0) {
      this.speed -= value;
    }
  }
  drive(hours) {
    if (this.isOn === true) {
      this.distance = this.distance + hours * this.speed;
    }
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 120, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

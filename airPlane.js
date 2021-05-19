// Write an Airplane object that initializes name.
// Give airplanes the ability to .takeOff() and .land():
// If a plane takes off, its isFlying property is set to true.
// If a plane lands, its isFlying property is set to false.

const Airplane = {
  name: "Armenia",
  isFlying: false,
  takeOff: function () {
    this.isFlying = true;
  },
  land: function () {
    this.isFlying = false;
  },
};

const Armenia = Object.create(Airplane);
Object.assign(Armenia, { isFlying: false });

console.log(Armenia.isFlying);
Armenia.takeOff();
console.log(Armenia.isFlying);

// Airplane.takeOff();
// console.log(Airplane.isFlying);
// Airplane.land();
// console.log(Airplane.isFlying);

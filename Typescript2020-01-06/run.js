"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = __importDefault(require("./Car"));
var myCar = new Car_1.default(60);
// Turning on verbose logging
myCar.turnOnActionLog();
console.log('Initial fuel level: ', myCar.fuelLevel);
// Refill fuel
myCar.refillFuel();
console.log('New fuel level: ', myCar.fuelLevel);
// Turn car on
myCar.turnEngineOn();
myCar.engineOn ? console.log('Car engine is running') : console.log('Car enging is off');
// Accelerate
myCar.accelerate();
console.log('Current speed is ', myCar.speed);
// Accelerate
myCar.accelerate();
console.log('Current speed is ', myCar.speed);
// Accelerate
myCar.accelerate();
console.log('Current speed is ', myCar.speed);
// Brake
myCar.brake();
console.log('Current speed is ', myCar.speed);
// Brake
myCar.brake();
console.log('Current speed is ', myCar.speed);
// Brake
myCar.brake();
console.log('Current speed is ', myCar.speed);
// Turn car off
myCar.turnEngineOff();
myCar.engineOn ? console.log('Car engine is running') : console.log('Car enging is off');

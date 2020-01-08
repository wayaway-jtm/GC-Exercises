"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(fuelLevel) {
        if (fuelLevel === void 0) { fuelLevel = 100; }
        this.speed = 0;
        this.engineOn = false;
        this.fuelLevel = fuelLevel;
        this.actionLogOn = false;
    }
    Car.prototype.accelerate = function () {
        if (this.fuelLevel >= 1) {
            if (this.actionLogOn) {
                console.log('Accelerating...');
            }
            this.fuelLevel -= 1;
            this.speed += 1;
        }
    };
    Car.prototype.brake = function () {
        if (this.speed > 0) {
            if (this.actionLogOn) {
                console.log('Braking...');
            }
            this.speed -= 1;
        }
    };
    Car.prototype.turnEngineOn = function () {
        if (this.actionLogOn) {
            console.log('Starting engine...');
        }
        this.engineOn = true;
    };
    Car.prototype.turnEngineOff = function () {
        if (this.actionLogOn) {
            console.log('Stopping engine...');
        }
        this.engineOn = false;
    };
    Car.prototype.refillFuel = function () {
        if (this.actionLogOn) {
            console.log('Refueling...');
        }
        this.fuelLevel = 100;
    };
    Car.prototype.turnOnActionLog = function () {
        this.actionLogOn = true;
    };
    Car.prototype.turnOffActionLog = function () {
        this.actionLogOn = false;
    };
    return Car;
}());
exports.default = Car;

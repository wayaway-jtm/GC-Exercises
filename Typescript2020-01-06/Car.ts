import IVehicle from './IVehicle';

class Car implements IVehicle {
    public speed: number;
    public engineOn: boolean;
    public fuelLevel: number;
    public actionLogOn: boolean;

    constructor(fuelLevel: number = 100) {
        this.speed = 0;
        this.engineOn = false;
        this.fuelLevel = fuelLevel;
        this.actionLogOn = false;
    }

    accelerate() {
        if (this.fuelLevel >= 1) {
            if (this.actionLogOn) {
                console.log('Accelerating...')
            }
            this.fuelLevel -= 1;
            this.speed += 1;
        }
    }

    brake() {
        if (this.speed > 0) {
            if (this.actionLogOn) {
                console.log('Braking...');
            }
            this.speed -= 1;
        }
    }

    turnEngineOn() {
        if (this.actionLogOn) {
            console.log('Starting engine...');
        }
        this.engineOn = true;
    }

    turnEngineOff() {
        if (this.actionLogOn) {
            console.log('Stopping engine...');
        }
        this.engineOn = false;
    }

    refillFuel() {
        if (this.actionLogOn) {
            console.log('Refueling...');
        }
        this.fuelLevel = 100;
    }

    turnOnActionLog() {
        this.actionLogOn = true;
    }

    turnOffActionLog() {
        this.actionLogOn = false;
    }
}

export default Car;
interface IVehicle {
    speed: number;
    engineOn: boolean;
    fuelLevel: number;

    accelerate(): void;
    brake(): void;
    turnEngineOn(): void;
    turnEngineOff(): void;
    refillFuel(): void;
}

export default IVehicle;
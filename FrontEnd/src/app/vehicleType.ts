export interface VehicleType {
    vehicleId: string;
    name: string;
    autonomy: number;
    cost: number;
    averageSpeed: number;
    energySource: {
        props: {
            description: string;
            fuelType: number;
        }
    }
    consumption: number;
    emissions: number;
}
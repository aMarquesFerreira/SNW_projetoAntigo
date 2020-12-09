// import { ValueObject } from "../core/domain/ValueObject";

// interface EnergySourceProps {
//     fuelType: number;
//     description: string;
// }

// export class EnergySource extends ValueObject<EnergySourceProps> {
//     get fuelType(): number {
//         return this.props.fuelType;
//     }

//     get description(): string {
//         return this.props.description;
//     }

//     private constructor(props: EnergySourceProps) {
//         super(props);
//     }
    
//     set description (value: string) {
//         this.props.description = value;
//     }

//     public static create(fuel: number): EnergySource {
//         let description: string;
//         switch (fuel) {
//             case 1: description = "Gasolina"; break;
                
//             case 20: description = "GPL"; break; 

//             case 23: description = "Gasóleo"; break;

//             case 50: description = "Hidrogénio"; break;

//             case 75: description = "Elétrico"; break;
//         }
//         return new EnergySource({ fuelType: fuel, description: description });
//     }
// }
// import { Mapper } from "../core/infra/Mapper";
// import { IVehicleTypeDTO } from "../dto/IVehicleTypeDTO";
// import { VehicleType } from "../domain/VehicleType";
// import { UniqueEntityID } from "../core/domain/UniqueEntityID";
// import { EnergySource } from "../domain/EnergySource"

// export class VehicleTypeMap extends Mapper<VehicleType> {

//   public static toDTO(vehicleType: VehicleType): IVehicleTypeDTO {
//     return {
//       vehicleId: vehicleType.vehicleId,
//       name: vehicleType.name,
//       autonomy: vehicleType.autonomy,
//       cost: vehicleType.cost,
//       averageSpeed: vehicleType.averageSpeed,
//       energySource: vehicleType.energySource,
//       consumption: vehicleType.consumption,
//       emissions: vehicleType.emissions,
//     } as IVehicleTypeDTO;
//   }

//   public static async toDomain(raw: any): Promise<VehicleType> {
//     const vehicleTypeOrError = VehicleType.create({
//         vehicleId: raw.vehicleId,
//         name: raw.name,
//         autonomy: raw.autonomy,
//         cost: raw.cost,
//         averageSpeed: raw.averageSpeed,
//         energySource: EnergySource.create(raw.fuelType),
//         consumption: raw.consumption,
//         emissions: raw.emissions,
//     }, new UniqueEntityID(raw.vehicleId))

//     vehicleTypeOrError.isFailure ? console.log(vehicleTypeOrError.error) : '';

//     return vehicleTypeOrError.isSuccess ? vehicleTypeOrError.getValue() : null;
//   }

//   public static toPersistence(vehicleType: VehicleType): any {
//     const a = {
//       base_vehicleType_id: vehicleType.vehicleId,
//       vehicleId: vehicleType.vehicleId,
//       name: vehicleType.name,
//       autonomy: vehicleType.autonomy,
//       cost: vehicleType.cost,
//       averageSpeed: vehicleType.averageSpeed,
//       fuelType: vehicleType.energySource.fuelType,
//       description: EnergySource.create(vehicleType.energySource.fuelType).description,
//       consumption: vehicleType.consumption,
//       emissions: vehicleType.emissions,
//     }
//     return a;
//   }
// }
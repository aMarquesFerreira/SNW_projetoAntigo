import { Repo } from "../../core/infra/Repo";
import { VehicleType } from "../../domain/VehicleType";

export default interface IVehicleTypeRepo extends Repo<VehicleType> {
  save(vehicleType: VehicleType): Promise<VehicleType>;
  findAll(): Promise<VehicleType[]>;
  findByVehicleId(vehicleId: string): Promise<VehicleType>;
}
import { Service, Inject } from 'typedi';
import config from "../../config";
import { IVehicleTypeDTO } from '../dto/IVehicleTypeDTO';
import { VehicleType } from "../domain/VehicleType";
import IVehicleTypeRepo from './IRepos/IVehicleTypeRepo';
import IVehicleTypeService from './IServices/IVehicleTypeService';
import { Result } from "../core/logic/Result";
import { VehicleTypeMap } from "../mappers/VehicleTypeMap";

@Service()
export default class VehicleTypeService implements IVehicleTypeService {
  constructor(
    @Inject(config.repos.vehicleType.name) private vehicleTypeRepo: IVehicleTypeRepo
  ) { }

  public async createVehicleType(vehicleTypeDTO: IVehicleTypeDTO): Promise<Result<IVehicleTypeDTO>> {
    try {

      const vehicleTypeOrError = await VehicleType.create(vehicleTypeDTO);

      if (vehicleTypeOrError.isFailure) {
        return Result.fail<IVehicleTypeDTO>(vehicleTypeOrError.errorValue());
      }

      const vehicleTypeResult = vehicleTypeOrError.getValue();

      await this.vehicleTypeRepo.save(vehicleTypeResult);

      const vehicleTypeDTOResult = VehicleTypeMap.toDTO(vehicleTypeResult) as IVehicleTypeDTO;
      return Result.ok<IVehicleTypeDTO>(vehicleTypeDTOResult)
    } catch (e) {
      throw e;
    }
  }

  public async getAllVehicleTypes(): Promise<Result<IVehicleTypeDTO[]>> {
    try {
      const vehicleTypeList = this.vehicleTypeRepo.findAll();

      let vehicleTypeDTOList: IVehicleTypeDTO[] = new Array;

      (await vehicleTypeList).forEach(function (value) {
        vehicleTypeDTOList.push(VehicleTypeMap.toDTO(value) as IVehicleTypeDTO);
      });

      return Result.ok<IVehicleTypeDTO[]>(vehicleTypeDTOList)

    } catch (e) {
      throw e;
    }
  }

  public async getVehicleTypesByVehicleId(vehicleId: string): Promise<Result<IVehicleTypeDTO>> {
    try {
      const vehicleType = await this.vehicleTypeRepo.findByVehicleId(vehicleId);

      const vehicleTypeDTOResult = VehicleTypeMap.toDTO(vehicleType) as IVehicleTypeDTO;

      return Result.ok<IVehicleTypeDTO>(vehicleTypeDTOResult)

    } catch (e) {
      throw e;
    }
  }

}

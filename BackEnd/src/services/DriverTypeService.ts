import { Inject, Service } from "typedi";
import config from "../../config";
import { Result } from "../core/logic/Result";
import { DriverType } from "../domain/DriverType";
import { IDriverTypeDTO } from "../dto/IDriverTypeDTO";
import { DriverTypeMap } from "../mappers/DriverTypeMap";
import IDriverTypeRepo from "./IRepos/IDriverTypeRepo";
import IDriverTypeService from "./IServices/IDriverTypeService";

@Service()
export default class DriverTypeService implements IDriverTypeService {
    constructor(
        @Inject(config.repos.driverType.name) private driverTypeRepo: IDriverTypeRepo
    ) { }
    
    
        
    public async createDriverType(driverTypeDTO: IDriverTypeDTO): Promise<Result<IDriverTypeDTO>> {
        try {
            
            const driverTypeOrError = await DriverType.create(driverTypeDTO);

            if (driverTypeOrError.isFailure) {
                return Result.fail<IDriverTypeDTO>(driverTypeOrError.errorValue());
            }

            const driverTypeResult = driverTypeOrError.getValue();

            await this.driverTypeRepo.save(driverTypeResult);

            const driverTypeDTOResult = DriverTypeMap.toDTO(driverTypeResult) as IDriverTypeDTO;
            return Result.ok<IDriverTypeDTO>(driverTypeDTOResult)
        } catch (e) {
            throw e;
        }
    }

    public async updateDriverType(driverTypeDTO: IDriverTypeDTO): Promise<Result<IDriverTypeDTO>> {
        throw new Error("Method not implemented.");
    }

    public async getAllDriverTypes(): Promise<Result<IDriverTypeDTO[]>> {
        try { 
            const driverTypeList = this.driverTypeRepo.findAll();

            let driverTypeDTOList: IDriverTypeDTO[] = new Array;

            (await driverTypeList).forEach(function (value) {
                driverTypeDTOList.push(DriverTypeMap.toDTO(value) as IDriverTypeDTO);               
            });

            return Result.ok<IDriverTypeDTO[]>(driverTypeDTOList)
        } catch (e) {
            throw e;
        }
    }

    public async getDriverTypeByCode(code: string): Promise<Result<IDriverTypeDTO>> {
        try {
            const driverType = await this.driverTypeRepo.findByCode(code);
      
            const driverTypeDTOResult = DriverTypeMap.toDTO(driverType) as IDriverTypeDTO;
      
            return Result.ok<IDriverTypeDTO>(driverTypeDTOResult);
      
          } catch (e) {
            throw e;
          }
    }
    
}
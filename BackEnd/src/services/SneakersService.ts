import { Inject, Service } from "typedi";
import config from "../../config";
import { Result } from "../core/logic/Result";
import { Sneakers } from "../domain/Sneakers";
import { ISneakersDTO } from "../dto/ISneakersDTO";
import { SneakersMap } from "../mappers/Map";
import ISneakersRepo from "./IRepos/ISneakersRepo";
import ISneakersService from "./IServices/ISneakersService";

@Service()
export default class SneakersService implements ISneakersService { 
    constructor(
        @Inject(config.repos.path.name) private sneakersRepo: ISneakersRepo
    ) { }

    public async createSneakers(sneakersDTO: ISneakersDTO): Promise<Result<ISneakersDTO>> {
        try{
            const sneakerOrError = Sneakers.create(sneakersDTO);

            if (sneakerOrError.isFailure) {
                return Result.fail<ISneakersDTO>(sneakerOrError.errorValue());
            }

            const sneakersResult = sneakerOrError.getValue();

            await this.sneakersRepo.save(sneakersResult);

            const sneakersDTOResult = SneakersMap.toDTO(sneakersResult) as ISneakersDTO;
            return Result.ok<ISneakersDTO>(sneakersDTOResult)            
        }catch (e) {
            throw e;
        }
    }
    
    updateSneakers(sneakersDTO: ISneakersDTO): Promise<Result<ISneakersDTO>> {
        throw new Error("Method not implemented.");
    }

    public async getAllSneakers(): Promise<Result<ISneakersDTO[]>> {
        try {
            const pathList = this.sneakersRepo.findAll();

            let pathDTOList: ISneakersDTO[] = new Array;

            (await pathList).forEach(function (value) {
                pathDTOList.push(SneakersMap.toDTO(value) as ISneakersDTO);                
            });

            return Result.ok<ISneakersDTO[]>(pathDTOList)
        } catch (e) {
            throw e;
        }
    }
    
    public async getSneakerByCode(sneakerCode: number): Promise<Result<ISneakersDTO>> {
        try {
            const path = await this.sneakersRepo.getSneakerByCode(sneakerCode);

            const pathDTOResult = SneakersMap.toDTO(path) as ISneakersDTO;

            return Result.ok<ISneakersDTO>(pathDTOResult);
        } catch (e) {
            throw e;
        }
    }
}
import { Inject, Service } from "typedi";
import config from "../../config";
import { Result } from "../core/logic/Result";
import { Sneakers } from "../domain/Sneakers";
import { ISneakersDTO } from "../dto/ISneakersDTO";
import { SneakersMap } from "../mappers/SneakersMap";
import ISneakersRepo from "./IRepos/ISneakersRepo";
import ISneakersService from "./IServices/ISneakersService";

@Service()
export default class SneakersService implements ISneakersService { 
    constructor(
        @Inject(config.repos.sneakers.name) private sneakersRepo: ISneakersRepo
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
            const sneakersList = this.sneakersRepo.findAll();

            let sneakersDTOList: ISneakersDTO[] = new Array;

            (await sneakersList).forEach(function (value) {
                sneakersDTOList.push(SneakersMap.toDTO(value) as ISneakersDTO);                
            });

            return Result.ok<ISneakersDTO[]>(sneakersDTOList)
        } catch (e) {
            throw e;
        }
    }
    
    public async getSneakersByName(sneakerName: string): Promise<Result<ISneakersDTO>> {
        try {
            const sneakers = await this.sneakersRepo.findSneakersByName(sneakerName);

            const sneakersDTOResult = SneakersMap.toDTO(sneakers) as ISneakersDTO;

            return Result.ok<ISneakersDTO>(sneakersDTOResult);
        } catch (e) {
            throw e;
        }
    }

    public async getSneakersByCondition(sneakerCondition: string): Promise<Result<ISneakersDTO>> {
        try {
            const sneakers = await this.sneakersRepo.findSneakersByName(sneakerCondition);

            const sneakersDTOResult = SneakersMap.toDTO(sneakers) as ISneakersDTO;

            return Result.ok<ISneakersDTO>(sneakersDTOResult);
        } catch (e) {
            throw e;
        }
    }
}
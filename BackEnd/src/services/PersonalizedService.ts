import { Inject, Service } from "typedi";
import config from "../../config";
import { Result } from "../core/logic/Result";
import { Personalized } from "../domain/Personalized";
import { Sneakers } from "../domain/Sneakers";
import { IPersonalizedDTO } from "../dto/IPersonalizedDTO";
import { PersonalizedMap } from "../mappers/PersonalizedMap";
import IPersonalizedRepo from "./IRepos/IPersonalizedRepo";
import ISneakersRepo from "./IRepos/ISneakersRepo";
import IPersonalizedService from "./IServices/IPersonalizedService";

@Service()
export default class PersonalizedService implements IPersonalizedService { 
    constructor(
        @Inject(config.repos.personalized.name) private personalizedRepo: IPersonalizedRepo
    ) { }

    public async createPersonalized(personalizedDTO: IPersonalizedDTO): Promise<Result<IPersonalizedDTO>> {
        try{
            const personalizedOrError = Personalized.create(personalizedDTO);

            if (personalizedOrError.isFailure) {
                return Result.fail<IPersonalizedDTO>(personalizedOrError.errorValue());
            }

            const personalizedResult = personalizedOrError.getValue();

            const dbResult = await this.personalizedRepo.save(personalizedResult);

            const personalizedDTOResult = PersonalizedMap.toDTO(dbResult) as IPersonalizedDTO;
            return Result.ok<IPersonalizedDTO>(personalizedDTOResult)            
        }catch (e) {
            throw e;
        }
    }
    
    updatePersonalized(personalizedDTO: IPersonalizedDTO): Promise<Result<IPersonalizedDTO>> {
        throw new Error("Method not implemented.");
    }

    public async getAllPersonalized(): Promise<Result<IPersonalizedDTO[]>> {
        try {
            const personalizedList = this.personalizedRepo.findAll();
            let personalizedDTOList: IPersonalizedDTO[] = new Array;

            (await personalizedList).forEach(function (value) {
                personalizedDTOList.push(PersonalizedMap.toDTO(value) as IPersonalizedDTO);                
            });

            return Result.ok<IPersonalizedDTO[]>(personalizedDTOList)
        } catch (e) {
            throw e;
        }
    }
    
    public async getPersonalizedByName(name: string): Promise<Result<IPersonalizedDTO>> {
        try {
            const personalized = await this.personalizedRepo.findPersonalizedByName(name);

            const personalizedDTOResult = PersonalizedMap.toDTO(personalized) as IPersonalizedDTO;

            return Result.ok<IPersonalizedDTO>(personalizedDTOResult);
        } catch (e) {
            throw e;
        }
    }

    public async getPersonalizedByAuthor(author: string): Promise<Result<IPersonalizedDTO>> {
        try {
            const personalized = await this.personalizedRepo.findPersonalizedByAuthor(author);

            const personalizedDTOResult = PersonalizedMap.toDTO(personalized) as IPersonalizedDTO;

            return Result.ok<IPersonalizedDTO>(personalizedDTOResult);
        } catch (e) {
            throw e;
        }
    }
    
    public async getPersonalizedBySize(size: Number): Promise<Result<IPersonalizedDTO>> {
        try {
            const personalized = await this.personalizedRepo.findPersonalizedBySize(size);

            const personalizedDTOResult = PersonalizedMap.toDTO(personalized) as IPersonalizedDTO;

            return Result.ok<IPersonalizedDTO>(personalizedDTOResult);
        } catch (e) {
            throw e;
        }
    }
}
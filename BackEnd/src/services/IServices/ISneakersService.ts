import { Result } from "../../core/logic/Result";
import { ISneakersDTO } from "../../dto/ISneakersDTO";

export default interface ISneakersService {
    createSneakers(sneakersDTO: ISneakersDTO): Promise<Result<ISneakersDTO>>;
    updateSneakers(sneakersDTO: ISneakersDTO): Promise<Result<ISneakersDTO>>;
    getAllSneakers(): Promise<Result<ISneakersDTO[]>>;
    getSneakersByName(name: string): Promise<Result<ISneakersDTO>>;
    getSneakersByCondition(condition: Number): Promise<Result<ISneakersDTO>>;
    getSneakersBySize(size: Number): Promise<Result<ISneakersDTO>>;
}
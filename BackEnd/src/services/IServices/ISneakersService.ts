import { Result } from "../../core/logic/Result";
import { ISneakersDTO } from "../../dto/ISneakersDTO";

export default interface ISneakersService {
    createSneakers(sneakersDTO: ISneakersDTO): Promise<Result<ISneakersDTO>>;
    updateSneakers(sneakersDTO: ISneakersDTO): Promise<Result<ISneakersDTO>>;
    getAllSneakers(): Promise<Result<ISneakersDTO[]>>;
    getSneakersByCode(code: string): Promise<Result<ISneakersDTO>>;
    getSneakersByCondition(condition: string): Promise<Result<ISneakersDTO>>;
}
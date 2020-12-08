import { Result } from "../../core/logic/Result";
import { ISneakersDTO } from "../../dto/ISneakersDTO";

export default interface ISneakersService {
    createSneakers(pathDTO: ISneakersDTO): Promise<Result<ISneakersDTO>>;
    updateSneakers(pathDTO: ISneakersDTO): Promise<Result<ISneakersDTO>>;
    getAllSneakers(): Promise<Result<ISneakersDTO[]>>;
    getPathByPathId(pathId: number): Promise<Result<ISneakersDTO>>;
}
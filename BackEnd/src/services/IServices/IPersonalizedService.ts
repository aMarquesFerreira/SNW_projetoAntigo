import { Result } from "../../core/logic/Result";
import { IPersonalizedDTO } from "../../dto/IPersonalizedDTO";

export default interface IPersonalizedService {
    createPersonalized(personalizedDTO: IPersonalizedDTO): Promise<Result<IPersonalizedDTO>>;
    updatePersonalized(personalizedDTO: IPersonalizedDTO): Promise<Result<IPersonalizedDTO>>;
    getAllPersonalized(): Promise<Result<IPersonalizedDTO[]>>;
    getPersonalizedByName(name: string): Promise<Result<IPersonalizedDTO>>;
    getPersonalizedByAuthor(author: string): Promise<Result<IPersonalizedDTO>>;
    getPersonalizedBySize(size: Number): Promise<Result<IPersonalizedDTO>>;
}
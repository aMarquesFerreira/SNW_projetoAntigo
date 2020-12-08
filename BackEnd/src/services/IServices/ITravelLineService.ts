import { Result } from "../../core/logic/Result";
import { ITravelLineDTO } from "../../dto/ITravelLineDTO";

export default interface ITravelLineService {
  createTravelLine(lineDTO: ITravelLineDTO): Promise<Result<ITravelLineDTO>>;
  getAllLines(): Promise<Result<ITravelLineDTO[]>>;
  getLinesByCodeSearch(codeSearch: string): Promise<Result<ITravelLineDTO[]>>;
}

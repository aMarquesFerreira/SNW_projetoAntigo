import { Service, Inject } from 'typedi';
import config from "../../config";
import { ITravelLineDTO } from '../dto/ITravelLineDTO';
import { TravelLine } from "../domain/TravelLine";
import ITravelLineRepo from './IRepos/ITravelLineRepo';
import ITravelLineService from './IServices/ITravelLineService';
import { Result } from "../core/logic/Result";
import { TravelLineMap } from "../mappers/TravelLineMap";
import INodeRepo from './IRepos/INodeRepo';
import { throwError } from 'rxjs';

@Service()
export default class TravelLineService implements ITravelLineService {
  constructor(
    @Inject(config.repos.travelLine.name) private lineRepo: ITravelLineRepo,
    @Inject(config.repos.node.name) private nodeRepo: INodeRepo
  ) { }

  public async createTravelLine(lineDTO: ITravelLineDTO): Promise<Result<ITravelLineDTO>> {
    try {
      const lineOrError = TravelLine.create(lineDTO);

      if (lineOrError.isFailure) {
        return Result.fail<ITravelLineDTO>(lineOrError.errorValue());
      }

      const lineResult = lineOrError.getValue();
      var node1 = await this.nodeRepo.findByShortName(lineResult.terminalNode1);
      var node2 = await this.nodeRepo.findByShortName(lineResult.terminalNode2);
      if (node1 != null && node2 != null) {
        await this.lineRepo.save(lineResult);
        const lineDTOResult = TravelLineMap.toDTO(lineResult) as ITravelLineDTO;
        return Result.ok<ITravelLineDTO>(lineDTOResult)
      } else {
        
      }
      throwError(new Error('Invalid Terminal Nodes'));
    } catch (e) {
      throw e;
    }
  }

  public async getAllLines(): Promise<Result<ITravelLineDTO[]>> {
    try {
      const lineList = this.lineRepo.findAll();

      let lineDTOList: ITravelLineDTO[] = new Array;

      (await lineList).forEach(function (value) {
        lineDTOList.push(TravelLineMap.toDTO(value) as ITravelLineDTO);
      });

      return Result.ok<ITravelLineDTO[]>(lineDTOList)

    } catch (e) {
      throw e;
    }
  }

  public async getLinesByCodeSearch(codeSearch: string): Promise<Result<ITravelLineDTO[]>> {
    try {
      const lineList = this.lineRepo.findByCodeSearch(codeSearch);

      let lineDTOList: ITravelLineDTO[] = new Array;

      (await lineList).forEach(function (value) {
        lineDTOList.push(TravelLineMap.toDTO(value) as ITravelLineDTO);
      });

      return Result.ok<ITravelLineDTO[]>(lineDTOList)

    } catch (e) {
      throw e;
    }
  }

}

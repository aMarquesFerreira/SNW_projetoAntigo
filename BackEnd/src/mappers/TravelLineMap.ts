// import { Mapper } from "../core/infra/Mapper";
// import { ITravelLineDTO } from "../dto/ITravelLineDTO";
// import { TravelLine } from "../domain/TravelLine"
// import { UniqueEntityID } from "../core/domain/UniqueEntityID";
// import { Name } from "../domain/Name";


// export class TravelLineMap extends Mapper<TravelLine> {

//   public static toDTO(line: TravelLine): ITravelLineDTO {
//     return {
//       id: line.id.toString(),
//       name: line.name,
//       code: line.code,
//       color:line.color,
//       terminalNode1: line.terminalNode1,
//       terminalNode2: line.terminalNode2,
//       linePaths: line.linePaths,
//     } as ITravelLineDTO;
//   }

//   public static async toDomain(raw: any): Promise<TravelLine> {
//     const travelLineOrError = TravelLine.create({
//       name: Name.create(raw.name),
//       code: raw.code,
//       color:raw.color,
//       terminalNode1: raw.terminalNode1,
//       terminalNode2: raw.terminalNode2,
//       linePaths: raw.linePaths,
//     }, new UniqueEntityID(raw.code))

//     travelLineOrError.isFailure ? console.log(travelLineOrError.error) : '';

//     return travelLineOrError.isSuccess ? travelLineOrError.getValue() : null;
//   }

//   public static toPersistence(travelLine: TravelLine): any {
//     const a = {
//       base_line_id: travelLine.id.toString(),
//       name: travelLine.name,
//       code: travelLine.code,
//       color:travelLine.color,
//       terminalNode1: travelLine.terminalNode1,
//       terminalNode2: travelLine.terminalNode2,
//       linePaths: travelLine.linePaths,
//     }
//     return a;
//   }
// }
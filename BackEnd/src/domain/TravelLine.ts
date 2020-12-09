// import { AggregateRoot } from "../core/domain/AggregateRoot";
// import { UniqueEntityID } from "../core/domain/UniqueEntityID";
// import { Result } from "../core/logic/Result";
// import { Guard } from "../core/logic/Guard";
// import { Name } from "../domain/Name";
// import { LinePath } from "../domain/LinePath";

// interface TravelLineProps {
//     code: string;
//     name: Name;
//     color?: string;
//     terminalNode1: string;
//     terminalNode2: string;
//     linePaths: LinePath[];
// }

// export class TravelLine extends AggregateRoot<TravelLineProps> {

//     get id(): UniqueEntityID {
//         return this._id;
//     }

//     get code(): string {
//         return this.props.code;
//     }

//     get name(): Name {
//         return this.props.name;
//     }

//     get color(): string {
//         return this.props.color;
//     }

//     get terminalNode1(): string {
//         return this.props.terminalNode1;
//     }

//     get terminalNode2(): string {
//         return this.props.terminalNode2;
//     }

//     get linePaths(): LinePath[] {
//         return this.props.linePaths;
//     }

//     set code(value: string) {
//         this.props.code = value;
//     }

//     set name(value: Name) {
//         this.props.name = value;
//     }

//     set color(value: string) {
//         this.props.color = value;
//     }

//     set terminalNode1(value: string) {
//         this.props.terminalNode1 = value;
//     }

//     set terminalNode2(value: string) {
//         this.props.terminalNode2 = value;
//     }

//     set paths(value: LinePath[]) {
//         this.props.linePaths = value;
//     }

//     private constructor(props: TravelLineProps, id?: UniqueEntityID) {
//         super(props, id);
//     }

//     public static create(props: TravelLineProps, id?: UniqueEntityID): Result<TravelLine> {

//         var guardedProps = [];
//         if (props.color == undefined) {
//             guardedProps = [
//                 { argument: props.code, argumentName: 'code' },
//                 { argument: props.name, argumentName: 'name' },
//                 //{ argument: props.color, argumentName: 'color' },
//                 { argument: props.terminalNode1, argumentName: 'terminalNode1' },
//                 { argument: props.terminalNode2, argumentName: 'terminalNode2' },
//                 { argument: props.linePaths, argumentName: 'linePaths' },
//             ];
//         } else {
//             guardedProps = [
//                 { argument: props.code, argumentName: 'code' },
//                 { argument: props.name, argumentName: 'name' },
//                 { argument: props.color, argumentName: 'color' },
//                 { argument: props.terminalNode1, argumentName: 'terminalNode1' },
//                 { argument: props.terminalNode2, argumentName: 'terminalNode2' },
//                 { argument: props.linePaths, argumentName: 'linePaths' },
//             ];
//         }


//         const guardResult = Guard.againstNullOrUndefinedBulk(guardedProps);
//         if (!guardResult.succeeded) {
//             return Result.fail<TravelLine>(guardResult.message)
//         } else {
//             const travelLine = new TravelLine({
//                 ...props
//             }, id);
//             return Result.ok<TravelLine>(travelLine);
//         }
//     }

// }
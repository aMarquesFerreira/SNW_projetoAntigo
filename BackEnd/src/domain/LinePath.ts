// import { ValueObject } from "../core/domain/ValueObject";

// interface LinePathProps {
//     pathId: number;
//     orientation: string;
// }

// export class LinePath extends ValueObject<LinePathProps> {
//     get pathId(): number {
//         return this.props.pathId;
//     }

//     get orientation(): string {
//         return this.props.orientation;
//     }

//     set pathId(value: number) {
//         this.props.pathId = value;
//     }

//     set orientation(value: string) {
//         this.props.orientation = value;
//     }

//     private constructor(props: LinePathProps) {
//         super(props);
//     }

//     public static create(pathId: number, orientation: string): LinePath {
//         return new LinePath({ pathId: pathId, orientation: orientation });
//     }
// }
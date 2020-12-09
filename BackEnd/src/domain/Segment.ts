// import { ValueObject } from "../core/domain/ValueObject";
// import { Node } from "./Node";

// interface SegmentProps {
//     initialNode: string /*Node*/;
//     finalNode: string;
//     duration: number;
//     distance: number;
// }

// export class Segment extends ValueObject<SegmentProps> {
//     get finalNode(): string /*Node*/{
//         return this.props.finalNode;
//     }

//     get initialNode(): string {
//         return this.props.initialNode;
//     }

//     get duration(): number {
//         return this.props.duration;
//     }

//     get distance(): number {
//         return this.props.distance;
//     }

//     private constructor(props: SegmentProps) {
//         super(props);
//     }

//     public static create(newInitialNode: string /*Node*/, newFinalNode: string, newDuration: number, newDistance: number) {
//         return new Segment({
//             initialNode: newInitialNode,
//             finalNode: newFinalNode,
//             duration: newDuration,
//             distance: newDistance,
//         })
//     }
// }
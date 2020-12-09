// import { ValueObject } from "../core/domain/ValueObject";

// interface CrewTravelTimeProps {
//     duration: number;
// }

// export class CrewTravelTime extends ValueObject<CrewTravelTimeProps> {
//     get duration(): number {
//         return this.props.duration;
//     }

//     set duration(value: number) {
//         this.props.duration = value;
//       }

//     private constructor(props: CrewTravelTimeProps) {
//         super(props);
//     }

//     public static create(duration: number): CrewTravelTime {
//         return new CrewTravelTime({duration: duration});
//     }
// }
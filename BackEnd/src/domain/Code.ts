// import { ValueObject } from "../core/domain/ValueObject";

// interface CodeProps {
//     code: string;
// }

// export class Code extends ValueObject<CodeProps> {
//     get code(): string {
//         return this.props.code;
//     }

//     private constructor(props: CodeProps){
//         super(props);
//     }

//     public static create(newCode: string): Code {
//         return new Code({ code: newCode });
//     }
// }
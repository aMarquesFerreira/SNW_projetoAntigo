import { HighlightSpanKind } from "typescript";
import { AggregateRoot } from "../core/domain/AggregateRoot";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Result } from "../core/logic/Result";
import { Guard } from "../core/logic/Guard";
import { Name } from "./Name";
import { Code } from "./Code";
import { Description } from "../domain/Description";

interface DriverTypeProps {
    name: Name;
    code: Code;
    description: Description;
}

export class DriverType extends AggregateRoot<DriverTypeProps> {
    get id (): UniqueEntityID {
        return this._id;
    }

    get name (): Name {
        return this.props.name;
    }

    get description (): Description {
        return this.props.description;
    }

    get code (): Code {
        return this.props.code;
    }

    set name (value: Name) {
        this.props.name = value;
    }

    set description (value: Description) {
        this.props.description = value;
    }

    set code (value: Code) {
        this.props.code = value;
    }

    private constructor (props: DriverTypeProps, id?: UniqueEntityID) {
        super(props, id);
    }

    public static create(props: DriverTypeProps, id?: UniqueEntityID): Result<DriverType> {
        
        const guardedProps = [
            { argument: props.name, argumentName: 'name' },
            { argument: props.code, argumentName: 'code' },
            { argument: props.description, argumentName: 'description' },
        ];

        const guardResult = Guard.againstNullOrUndefinedBulk(guardedProps);
        
        if (!guardResult.succeeded) {
            return Result.fail<DriverType>(guardResult.message)
        }else{
            const driverType = new DriverType({
                ...props
            }, id);
            return Result.ok<DriverType>(driverType);
        }
    }

}
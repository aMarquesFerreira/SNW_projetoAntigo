import { AggregateRoot } from "../core/domain/AggregateRoot";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Guard } from "../core/logic/Guard";
import { Result } from "../core/logic/Result";

interface SneakersProps {
    size: string[];
    name: string;
    condition: string[];
}

export class Sneakers extends AggregateRoot<SneakersProps> {
    get id (): UniqueEntityID {
        return this._id;
    }

    get size(): string[] {
        return this.props.size;
    }

    set size (newSize : string[]) {
        this.props.size = newSize;
    }
    
    get name(): string {
        return this.props.name;
    }

    set name (newName : string) {
        this.props.name = newName;
    }

    get condition(): string[] {
        return this.props.condition;
    }

    set condition (newCondition : string[]) {
        this.props.condition = newCondition;
    }

    private constructor (props : SneakersProps, id? : UniqueEntityID) {
        super(props, id);
    }

    public static create(props : SneakersProps, id? : UniqueEntityID) {

        const guardedProps = [
            { argument: props.name, argumentName: 'name'},
        ]
        const guardResult = Guard.againstNullOrUndefinedBulk(guardedProps);
        
        if (!guardResult.succeeded) {
            return Result.fail<Sneakers>(guardResult.message)
        }else{
            const sneaker = new Sneakers({
                ...props
            }, id);
            return Result.ok<Sneakers>(sneaker);
        }
    }
}
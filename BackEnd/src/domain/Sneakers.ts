import { AggregateRoot } from "../core/domain/AggregateRoot";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Guard } from "../core/logic/Guard";
import { Result } from "../core/logic/Result";

interface SneakersProps {
    size: number[];
    name: string;
    condition: number[];
}

export class Sneakers extends AggregateRoot<SneakersProps> {
    get id (): UniqueEntityID {
        return this._id;
    }

    get size(): number[] {
        return this.props.size;
    }

    set size (newSize : number[]) {
        this.props.size = newSize;
    }
    
    get name(): string {
        return this.props.name;
    }

    set name (newName : string) {
        this.props.name = newName;
    }

    get condition(): number[] {
        return this.props.condition;
    }

    set condition (newCondition : number[]) {
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
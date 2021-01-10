import { AggregateRoot } from "../core/domain/AggregateRoot";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Guard } from "../core/logic/Guard";
import { Result } from "../core/logic/Result";

interface PersonalizedProps {
    size: number[];
    name: string;
    author: string;
}

export class Personalized extends AggregateRoot<PersonalizedProps> {
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

    get author(): string {
        return this.props.author;
    }

    set author (newAuthor : string) {
        this.props.author = newAuthor;
    }

    private constructor (props : PersonalizedProps, id? : UniqueEntityID) {
        super(props, id);
    }

    public static create(props : PersonalizedProps, id? : UniqueEntityID) {

        const guardedProps = [
            { argument: props.name, argumentName: 'name'},
            { argument: props.author, argumentName: 'author'},
        ]
        const guardResult = Guard.againstNullOrUndefinedBulk(guardedProps);
        
        if (!guardResult.succeeded) {
            return Result.fail<Personalized>(guardResult.message)
        }else{
            const personalized = new Personalized({
                ...props
            }, id);
            return Result.ok<Personalized>(personalized);
        }
    }
}
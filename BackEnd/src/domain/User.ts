import { HighlightSpanKind } from "typescript";
import { AggregateRoot } from "../core/domain/AggregateRoot";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Result } from "../core/logic/Result";
import { Guard } from "../core/logic/Guard";

interface UserProps {
    name: string;
    email: string;
    age: Date;
    size: number;
    address: string;
    postalCode: string;
    password: string;
}

export class User extends AggregateRoot<UserProps> {
    get id (): UniqueEntityID {
        return this._id;
    }

    get name (): string {
        return this.props.name;
    }

    get age (): Date {
        return this.props.age;
    }

    get email (): string {
        return this.props.email;
    }

    set name (value: string) {
        this.props.name = value;
    }

    set age (value: Date) {
        this.props.age = value;
    }

    set email (value: string) {
        this.props.email = value;
    }

    get size(): number {
        return this.props.size;
    }

    set size (newSize : number) {
        this.props.size = newSize;
    }

    get address(): string {
        return this.props.address;
    }

    set address (value : string) {
        this.props.address = value;
    }

    get postalCode(): string {
        return this.props.address;
    }

    set postalCode (value : string) {
        this.props.postalCode = value;
    }

    get password(): string {
        return this.props.password;
    }

    set password (value : string) {
        this.props.password = value;
    }

    private constructor (props: UserProps, id?: UniqueEntityID) {
        super(props, id);
    }

    public static create(props: UserProps, id?: UniqueEntityID): Result<User> {
        
        const guardedProps = [
            { argument: props.name, argumentName: 'name' },
            { argument: props.email, argumentName: 'email' },
            { argument: props.age, argumentName: 'age' },
            { argument: props.size, argumentName: 'size' },
            { argument: props.address, argumentName: 'address' },
            { argument: props.postalCode, argumentName: 'postalCode' },
            { argument: props.password, argumentName: 'password' },
        ];

        const guardResult = Guard.againstNullOrUndefinedBulk(guardedProps);
        
        if (!guardResult.succeeded) {
            return Result.fail<User>(guardResult.message)
        }else{
            const user = new User({
                ...props
            }, id);
            return Result.ok<User>(user);
        }
    }

}
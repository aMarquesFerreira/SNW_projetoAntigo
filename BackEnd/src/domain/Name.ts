import { ValueObject } from "../core/domain/ValueObject";

interface NameProps {
    name: string;
}

export class Name extends ValueObject<NameProps> {
    get name(): string {
        return this.props.name;
    }

    private constructor(props: NameProps){
        super(props);
    }

    public static create(newName: string): Name {
        return new Name({ name: newName });
    }
}
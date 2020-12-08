import { ValueObject } from "../core/domain/ValueObject";

interface DescriptionProps {
    description: string;
}

export class Description extends ValueObject<DescriptionProps> {
    get description(): string {
        return this.props.description;
    }

    private constructor(props: DescriptionProps){
        super(props);
    }

    public static create(newDescription: string): Description {
        return new Description({ description: newDescription });
    }
}
import {Identifier} from './Identifier'

export class NumberID extends Identifier<number>{
    constructor(id: number){
        super(id);
    }
}
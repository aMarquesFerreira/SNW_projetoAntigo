import {Identifier} from './Identifier'

export class StringID extends Identifier<string>{
    constructor(id: string){
        super(id);
    }
}
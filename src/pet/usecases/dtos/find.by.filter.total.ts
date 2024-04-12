import { Pet } from "src/pet/schemas/pet.shema";

export default class FindByFilterAndTotal {
    items: Pet[];
    total: number;

    constructor(data: Partial<FindByFilterAndTotal>){
        Object.assign(this, data);
    }
}
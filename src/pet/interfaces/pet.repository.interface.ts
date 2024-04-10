import { Pet } from "../schemas/pet.shema";

export default interface IPetRepository{
   create(data: Partial<Pet>): Promise<Pet>
   getById(id: string): Promise<Pet>
}
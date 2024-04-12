import { Pet } from "../schemas/pet.shema";
import FindByFilterAndTotal from "../usecases/dtos/find.by.filter.total";
import GetPetsUseCaseInput from "../usecases/dtos/get.pets.usecase.input";

export default interface IPetRepository{
   create(data: Partial<Pet>): Promise<Pet>
   getById(id: string): Promise<Pet>
   updateById(data: Partial<Pet>): Promise<void>
   deleteById(id: string): Promise<void>
   findByFilter(input: GetPetsUseCaseInput): Promise<FindByFilterAndTotal>;
}
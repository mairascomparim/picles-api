import { IUseCase } from "src/domain/iusecase.interface";
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usecase.output";

export default class GetShelterDetailsUseCase implements IUseCase<null, GetShelterDetailsUseCaseOutput>{
    run(Input: null): Promise<GetShelterDetailsUseCaseOutput> {
        return Promise.resolve(new GetShelterDetailsUseCaseOutput({
            shelterName: 'Caravana dos dogs',
            shelterEmail: 'Caravanadd@gmail.com',
            shelterPhone: '19982360999',
            shelterWhatsApp: '19982340548',
            createdAt: new Date(),
            updatedAt: new Date()
        }))
    }
}
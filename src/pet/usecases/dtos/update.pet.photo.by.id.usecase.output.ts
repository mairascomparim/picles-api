import CreatePetUseCaseOutput from "./create.pet.usecase.output"
import UpdatePetByIdUseCaseOutput from "./update.pet.by.id.usecase.output"

export default class UpdatePetPhotoByIdUseCaseOutput extends CreatePetUseCaseOutput {
   
    constructor(data: Partial<UpdatePetPhotoByIdUseCaseOutput>){
        super(data)
        Object.assign(this, data)
    }
}
export default class UpdateShelterDetailsUseCaseOutput{
    name: string
    WhatsApp: string
    Email: string
    Phone: string
   
    constructor(data: Partial<UpdateShelterDetailsUseCaseOutput>){
        Object.assign(this, data)
    }
}
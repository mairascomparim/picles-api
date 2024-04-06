export default class UpdateShelterDetailsUseCaseInput{
    name: string
    WhatsApp: string
    Email: string
    Phone: string
   
    constructor(data: Partial<UpdateShelterDetailsUseCaseInput>){
        Object.assign(this, data)
    }
}
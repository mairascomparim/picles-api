import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type PetDocument = HydratedDocument<Pet>;

@Schema({
    versionKey: false,
})

export class Pet{
    @Prop({required: true, auto: true, type: mongoose.Schema.Types.ObjectId})
    _id: string;
    
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    type: string;

    @Prop({required: true})
    size: string;

    @Prop({required: true})
    gender: string;

    @Prop({required: true})
    bio: string;

    @Prop({required: false, default:null})
    photo: string;

    @Prop({required: true})
    createdAt: Date;

    @Prop({required: true})
    updatedAt: Date;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
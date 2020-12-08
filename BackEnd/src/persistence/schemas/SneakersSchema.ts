import mongoose from "mongoose";
import { ISneakersPersistence } from "../../dataschema/ISneakersPersistence";

const SneakersSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: [true, 'Please enter code'],
            index: true,
        },

        name: {
            type: String,
            required: [true, 'Please enter name'],
            index: true,
        }, 

        size: {
            type: Number,
            required: [true, 'Please enter size'],
            index: true,
        },

        condition: {
            type: Number,
            required: [true, 'Please enter condition'],
            index: true,
        },
    }
);

export default mongoose.model<ISneakersPersistence & mongoose.Document>('Sneakers', SneakersSchema);
import mongoose from "mongoose";
import { ISneakersPersistence } from "../../dataschema/ISneakersPersistence";

const SneakersSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter name'],
            index: true,
        }, 

        size: {
            type: Array,
            required: [true, 'Please enter size'],
            index: true,
            default: [36,36.5,37,38,38.5,39,40,40.5,41,42,42.5,43,44,44.5,45,46,46.5,47,48,48.5,49,50,50.5,51,52,52.5,53,54,54.5]
        },

        condition: {
            type: Array,
            required: [true, 'Please enter condition'],
            index: true,
            default: [1,2,3,4,5,6,7,8,9,10]
        },

        url: {
            type: String,
            required: [true, 'Please enter url'],
            index: true,
        }, 
    }
);

export default mongoose.model<ISneakersPersistence & mongoose.Document>('Sneakers', SneakersSchema);
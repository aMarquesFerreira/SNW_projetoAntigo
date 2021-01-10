import mongoose from "mongoose";
import { IPersonalizedPersistence } from "../../dataschema/IPersonalizedPersistence";

const PersonalizedSchema = new mongoose.Schema(
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

        author: {
            type: String,
            required: [true, 'Please enter author'],
            index: true,
        }, 
    }
);

export default mongoose.model<IPersonalizedPersistence & mongoose.Document>('Personalized', PersonalizedSchema);
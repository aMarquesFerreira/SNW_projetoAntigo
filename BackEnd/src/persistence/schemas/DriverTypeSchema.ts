import { IDriverTypePersistence } from "../../dataschema/IDriverTypePersistence";
import mongoose from "mongoose";

const DriverTypeSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'Please enter a name'],
            index: true,
        },

        code:{
            type: String,
            required: [true, 'Please enter a code'],
            index: true,
        },

        description:{
            type: String,
            required: [true, 'Please enter a description'],
            index: true,
        }
    },
    { timestamps: true},
);

export default mongoose.model<IDriverTypePersistence & mongoose.Document>('DriverType', DriverTypeSchema);
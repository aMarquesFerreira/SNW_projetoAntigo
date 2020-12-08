import mongoose from "mongoose";
import { IPathPersistence } from "../../dataschema/IPathPersistence";

const PathSchema = new mongoose.Schema(
    {
        pathId: {
            type: Number,
            required: [true, 'Please enter pathId'],
            index: true,
        },

        isEmpty: {
            type: Boolean,
            required: [true, 'Please enter isEmpty'],
            index: true,
        }, 

        distance: {
            type: Number,
            required: [true],
            index: true,
        },

        duration: {
            type: Number,
            required: [true],
            index: true,
        },

        segments: {
            type: Array,
            required: [true, 'Please enter segments'],
            index: true,
        },
    }
);

export default mongoose.model<IPathPersistence & mongoose.Document>('Path', PathSchema);
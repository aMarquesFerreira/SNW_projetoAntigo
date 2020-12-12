import { IUserPersistence } from "../../dataschema/IUserPersistence";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'Please enter a name'],
            index: true,
        },

        email:{
            type: String,
            required: [true, 'Please enter an email'],
            index: true,
        },

        age:{
            type: Number,
            required: [true, 'Please enter a description'],
            index: true,
        },
        size:{
            type: Array,
            required: [true, 'Please enter your size'],
            index: true,
        },
        address:{
            type: String,
            required: [true, 'Please enter an address'],
            index: true,
        },
        postalCode:{
            type: String,
            required: [true, 'Please enter a postal code'],
            index: true,
        },
        password:{
            type: String,
            required: [true, 'Please enter a password'],
            index: true,
        }
    },
    { timestamps: true},
);

export default mongoose.model<IUserPersistence & mongoose.Document>('User', UserSchema);
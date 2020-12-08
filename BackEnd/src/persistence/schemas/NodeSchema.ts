import { INodePersistence } from '../../dataschema/INodePersistence';
import mongoose from 'mongoose';

const NodeSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Please enter full name'],
      index: true,
    },

    latitude: {
      type: Number,
      required: [true, 'Please enter latitude'],
      index: true,
    },

    longitude: {
      type: Number,
      required: [true, 'Please enter longitude'],
      index: true,
    },

    shortName: {
      type: String,
      required: [true, 'Please enter short name'],
      index: true,
    },

    isDepot: {
      type: Boolean,
      required: [true, 'Please say if the node is a depot'],
      index: true,
    },

    isReliefPoint: {
      type: Boolean,
      required: [true, 'Please say if the node is a relief point'],
      index: true,
    },

    duration: {
      type: Number,
      index:true,
    }
  },
  { timestamps: true },
);

export default mongoose.model<INodePersistence & mongoose.Document>('Node', NodeSchema);

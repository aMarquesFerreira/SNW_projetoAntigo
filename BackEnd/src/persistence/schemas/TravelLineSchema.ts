import { ITravelLinePersistence } from '../../dataschema/ITravelLinePersistence';
import mongoose from 'mongoose';

const TravelLineSchema = new mongoose.Schema(
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

    color:{
      type: String,
      index: true,
    },

    terminalNode1: {
      type: Object,
      required: [true, 'Please enter terminal node'],
      index: true,
    },

    terminalNode2: {
      type: Object,
      required: [true, 'Please enter terminal node'],
      index: true,
    },

    linePaths: {
      type: Array,
      required: [true, 'Please enter line paths'],
      index: true, 
    }
  },
  { timestamps: true },
);

export default mongoose.model<ITravelLinePersistence & mongoose.Document>('TravelLine', TravelLineSchema);

// import { IVehicleTypePersistence } from '../../dataschema/IVehicleTypePersistence';
// import mongoose from 'mongoose';

// const VehicleTypeSchema = new mongoose.Schema(
//   {
//     vehicleId: {
//       type: String,
//       required: [true, 'Please enter vehicle ID'],
//       index: true,
//     },

//     name: {
//       type: String,
//       required: [true, 'Please enter name'],
//       index: true,
//     },

//     autonomy: {
//       type: Number,
//       required: [true, 'Please enter autonomy'],
//       index: true,
//     },

//     cost: {
//       type: Number,
//       required: [true, 'Please enter cost'],
//       index: true,
//     },

//     averageSpeed: {
//       type: Number,
//       required: [true, 'Please enter average speed'],
//       index: true,
//     },

//     fuelType: {
//       type: Number,
//       required: [true, 'Please enter fuel type'],
//       index: true,
//     },

//     description: {
//       type: String,
//       index: true,
//     },

//     consumption: {
//       type: Number,
//       required: [true, 'Please enter consumption'],
//       index: true,
//     },

//     emissions: {
//       type: Number,
//       required: [true, 'Please enter emissions'],
//       index: true,
//     }
//   },
//   { timestamps: true },
// );

// export default mongoose.model<IVehicleTypePersistence & mongoose.Document>('VehicleType', VehicleTypeSchema);

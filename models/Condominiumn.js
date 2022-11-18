import { Schema, model } from "mongoose";

const condominiumnSchema = new Schema(
  {
    name: {
      type: String,
      required: true,      
      trim: true,
    },   
    rut: {
      type: String,
      required: true,      
      trim: true,
    },
    properties: {
      type: Number,
      required: true,      
      trim: true,
    },
    parkings: {
      type: Number,
      required: true,
      trim: true,
    },
    commonPlaces: {
      type: Number,
      required: true,
      trim: true,
    },
    province: {
      type: String,
      required: true,      
      trim: true,
    },
  }, 
  {
    timestamps: true,
    versionKey: false,
  }
);


export default model("Condominiumn", condominiumnSchema);

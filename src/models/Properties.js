import { Schema, model } from "mongoose";
import Condominiumn from "./Condominiumn";
import mongoose from "mongoose";

const propertiesSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      trim: true,
    },
    number: {
      type: Number,
      required: true,
      trim: true,
    },
    size: {
      type: Number,
      required: true,
      trim: true,
    },
    condominiumn: {
      type: Schema.Types.ObjectId,
      ref: 'Condominiumn'
      
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Properties", propertiesSchema);

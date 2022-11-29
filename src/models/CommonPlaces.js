import { Schema, model, Types } from "mongoose";

const commonPlacesSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    condominium: {
      type: Schema.Types.ObjectId,
      ref: 'Condominiumn'
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("CommonPlace", commonPlacesSchema);

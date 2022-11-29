import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,      
      trim: true,
    },
    role: {
      type: String,
      required: true,      
      trim: true,
    },
    email: {
      type: String,
      required: true,      
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
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

export default model("User", userSchema);

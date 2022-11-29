import { Schema, model, Types } from "mongoose";

const reservationSchema = new Schema(
  {
    place: {
      type:  String,
      required: true
    },
    condominium: {
      type:  Schema.Types.ObjectId,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Reservation", reservationSchema);

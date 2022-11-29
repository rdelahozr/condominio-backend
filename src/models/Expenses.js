import { Schema, model } from "mongoose";

const expenseSchema = new Schema(
  {
    condominium: {
      type: Schema.Types.ObjectId,
      required: true,      
      trim: true,
    },   
    appartment: {
      type: Schema.Types.ObjectId,
      required: true,      
      trim: true,
      ref: 'Properties'
    },
    amount: {
      type: Number,
      required: true,      
      trim: true,
    },
    year: {
      type: Number,
      required: true,
      trim: true,
    },
    month: {
      type: Number,
      required: true,
      trim: true,
    },
    dueDate: {
      type: String,
      required: true,      
      trim: true,
    },
    status: {
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


export default model("Expense", expenseSchema);

import { InferSchemaType, Schema, model } from "mongoose";
const noteSchema = new Schema(
  {
    NAME: { type: String, required: true },
    EMAIL: { type: String },
    PHONE: { type: String },
    ENROLLNUMBER: { type: String },
    DATEOFADMISSION: { type: String },
  },
  { timestamps: true }
);

type Note = InferSchemaType<typeof noteSchema>;

export default model<Note>("Note", noteSchema);

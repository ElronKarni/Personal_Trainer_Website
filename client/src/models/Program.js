import { Schema, model, models } from "mongoose";

const ProgramSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Program = models.Program || model("Program", ProgramSchema);

export default Program;

import { Schema, model, models } from "mongoose";

const optionScheme = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Option = models.Option || model("Option", optionScheme);

export default Option;

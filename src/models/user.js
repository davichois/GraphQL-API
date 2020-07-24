import { Schema, model } from "mongoose";

const userSchema = new Schema({
  nickname: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  city: {
    type: String,
  },
});

export default model("User", userSchema);

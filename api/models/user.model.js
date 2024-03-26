import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://tse1.mm.bing.net/th?id=OIP.TSdjZaOzQAo_pkVZWysyUAHaHa&pid=Api&P=0&h=180",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

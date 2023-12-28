import mongoose from "mongoose";

const burgerSchema = new mongoose.Schema(
  {
    url: String,
    title: String,
    content: String,
    description: String,
    price: String,
  },
  {
    timestamps: true,
  }
);

const Burger = mongoose.models.Burger || mongoose.model("Burger", burgerSchema);
export default Burger;

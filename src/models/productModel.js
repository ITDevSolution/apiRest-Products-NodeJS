import mongoose from "mongoose"
const { Schema, model } = mongoose

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    images: {
      type: Array,
    },
    deletedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

const Product = model("product", productSchema)

export default Product

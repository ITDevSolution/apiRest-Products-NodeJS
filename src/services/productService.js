import Product from "../models/productModel.js"

export const productService = {
  getAll: () => {
    try {
      return Product.find({ deletedAt: null })
    } catch (err) {
      console.log(err)
    }
  },

  getOne: (id) => {
    try {
      return Product.findOne({ _id: id })
    } catch (err) {
      console.log(err)
    }
  },

  store: (newProduct) => {
    try {
      return Product.create(newProduct)
    } catch (err) {
      console.log(err)
    }
  },

  delete: (id) => {
    try {
      // En caso quiera mantener el objeto y solo actualiza el campo deleteAt
      //   return PRODUCT.findByIdAndUpdate(
      //     id,
      //     { deletedAt: new Date },
      //     { new: true }
      // );
      return Product.findByIdAndDelete(id)
    } catch (err) {
      console.log(err)
    }
  },

  update: (id, newProductData) => {
    try {
      return Product.updateOne({ _id: id }, { $set: newProductData })
    } catch (err) {
      console.log(err)
    }
  },
}

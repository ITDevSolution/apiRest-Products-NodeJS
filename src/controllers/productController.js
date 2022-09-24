import { productService } from "../services/productService.js"

const productController = {
  getAll: async (req, res) => {
    const allProducts = await productService.getAll()
    return res.status(200).json({
      status: 200,
      total: allProducts.length,
      data: allProducts,
    })
  },

  getOne: async (req, res) => {
    const { id } = req.params
    const product = await productService.getOne(id)
    return res.status(200).json({
      status: 200,
      data: product,
    })
  },

  store: async (req, res) => {
    // console.log(req.body)
    if (!req.body.name || !req.body.category) {
      return res.status(400).json({
        status: 400,
        isStored: false,
        message: "The product name and category are required",
      })
    }

    const newProduct = { ...req.body }
    const productStored = await productService.store(newProduct)
    return res.status(200).json({
      isStored: true,
      data: productStored,
    })
  },
  delete: async (req, res) => {
    const { id } = req.params
    const response = await productService.delete(id)
    return res.status(200).json({
      status: 200,
      isDeleted: true,
      data: response,
    })
  },

  update: async (req, res) => {
    const { id } = req.params
    //if not exists
    const oldProduct = await productService.getOne(id)
    if (!oldProduct) {
      return res.status(404).json({
        status: 404,
        message: "The product is not found",
      })
    }
    // if exists the product
    const updateProduct = {
      ...oldProduct._doc, //
      ...req.body,
    }
    console.log(oldProduct._doc)
    console.log(req.body)
    const response = await productService.update(id, updateProduct)
    return res.status(200).json({
      status: 200,
      isUpdated: true,
      data: response,
    })
  },
}

export default productController

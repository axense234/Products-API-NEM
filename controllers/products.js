const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const randomString = require("@supercharge/strings");
const productsData = require("../data");
const Product = require("../models/Product");

const tagsList = [
  "fruit",
  "vegetable",
  "condiment",
  "canned",
  "grain",
  "beverage",
  "meat",
  "dairy",
  "hygiene",
  "animals",
];

const getAllProducts = async (req, res) => {
  const {
    name,
    sale,
    tag,
    numericFilters,
    sort,
    fields,
    page,
    limit,
    expDate,
  } = req.query;
  const queryObject = {};

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (tag && tagsList.find((tagInList) => tagInList === tag)) {
    queryObject.tag = tag;
  }

  if (expDate) {
    queryObject.expDate = expDate;
  }

  if (numericFilters) {
    const operatorMap = {
      ">=": "$gte",
      ">": "$gt",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const regEx = /\b(>=|>|=|<|<=)\b/g;

    // Numeric filters are for ex price>90,purchases>=0
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );

    const options = ["price", "purchases"];
    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  let allProducts = Product.find(queryObject);

  if (sort) {
    const sortList = sort.split(",").join(" ");
    allProducts = allProducts.sort(sortList);
  } else {
    allProducts = allProducts.sort("createdAt");
  }

  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    allProducts = allProducts.select(fieldsList);
  }

  const pageNumber = page || 1;
  const limitNumber = limit || 10;
  const skip = (pageNumber - 1) * limitNumber;

  allProducts = allProducts.skip(skip).limit(limit);

  let products = await allProducts;

  if (sale && sale === "true") {
    products = products.filter((product) => {
      const productSaleProcentage = product.sale.split("%")[0];
      if (productSaleProcentage !== "0") {
        return product;
      }
      return null;
    });
  }

  if (products.length < 1) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ nbHits: 0, msg: "No products found." });
  }

  return res.status(StatusCodes.OK).json({
    nbHits: products.length,
    msg: "Successfully found products.",
    products,
  });
};

const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  const singleProduct = await Product.findById(id);
  if (!singleProduct) {
    return res.status(StatusCodes.NOT_FOUND).json({
      product: {},
      msg: `Didn't find any products with the id: ${id}`,
    });
  }
  return res.status(StatusCodes.OK).json({
    product: singleProduct,
    msg: `Successfully found product with id:${id}`,
  });
};

const createProduct = async (req, res) => {
  const { ...product } = req.body;
  const createdProduct = await Product.create(product);
  if (!createdProduct) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ product: {}, msg: "Could not create product." });
  }
  return res
    .status(StatusCodes.CREATED)
    .json({ msg: "Successfully created product.", product: createdProduct });
};

const updateProduct = async (req, res) => {
  const { id} = req.params;
  const {originalProductPrice} = req.query
  const { ...product } = req.body;
  product.price = Number(originalProductPrice)
  const updatedProduct = await Product.findOneAndUpdate({_id:id},product, {
    new: true,
    runValidators: true,
  });
  if (!updatedProduct) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ product: {}, msg: `Could not update product with id:${id}.` });
  }
  return res.status(StatusCodes.OK).json({
    product: updatedProduct,
    msg: `Successfully updated product with id:${id}.`,
  });
};

const purchaseProduct = async (req, res) => {
  const { id } = req.params;
  const { amount } = req.query;

  const { purchases } = await Product.findById(id);

  const foundProduct = await Product.findByIdAndUpdate(
    id,
    { purchases: purchases + (Number(amount) || 1) },
    { new: true, runValidators: true }
  );

  if (!foundProduct) {
    return res.status(StatusCodes.NOT_FOUND).json({
      purchases: "not found",
      msg: `Could not find product with id:${id}.`,
    });
  }

  return res.status(StatusCodes.OK).json({
    purchases: foundProduct.purchases,
    msg: `Successfully simulated the purchase of product with id:${id}.`,
  });
};

const setProductSale = async (req, res) => {
  const { id } = req.params;
  const { saleAmount } = req.query;

  const convertedSaleAmount = Number(saleAmount) || 0;
  if (convertedSaleAmount >= 100) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      saleAmount: convertedSaleAmount,
      msg: `Please provide a lower sale amount(<${convertedSaleAmount})`,
    });
  }

  const foundProduct = await Product.findById(id);

  if (!foundProduct) {
    return res.status(StatusCodes.NOT_FOUND).json({
      purchases: "not found",
      msg: `Could not find product with id:${id}.`,
    });
  }

  const calculatedNewPrice = (
    foundProduct.price -
    (foundProduct.price * convertedSaleAmount) / 100
  ).toFixed(2);

  await Product.updateOne(
    { _id: id },
    {
      sale: `${convertedSaleAmount}%`,
      price: Number(calculatedNewPrice),
    }
  );

  return res.status(StatusCodes.OK).json({
    newSale: convertedSaleAmount,
    newPrice: Number(calculatedNewPrice),
    msg: `Successfully changed the sale of the product with id:${id}.`,
  });
};

const insertTemplateProducts = async (req, res) => {
  const insertedProducts = await Product.create(productsData);
  if (insertedProducts.length < 1) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ products: [], msg: "Could not insert template products." });
  }
  return res.status(StatusCodes.CREATED).json({
    products: insertedProducts,
    msg: "Successfully inserted template products.",
  });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  if (!deletedProduct) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ product: {}, msg: `Could not delete product with id:${id}.` });
  }
  return res.status(StatusCodes.OK).json({
    product: deletedProduct,
    msg: `Successfully deleted product with id:${id}.`,
  });
};

const deleteAllProducts = async (req, res) => {
  const deletedProducts = await Product.deleteMany(
    {},
    { new: true, runValidators: true }
  );
  if (!deletedProducts) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something went wrong,could not delete all products." });
  }
  return res
    .status(StatusCodes.OK)
    .json({ msg: "Successfully deleted all products." });
};

const authorizeSwaggerUI = async (req, res) => {
  const { username, password } = req.body;
  let token = "No token";
  if (
    username === process.env.SWAGGER_UI_USERNAME &&
    password === process.env.SWAGGER_UI_PASS
  ) {
    token = jwt.sign(
      { id: randomString.random(50), username },
      process.env.SECRET_JWT_KEY,
      { expiresIn: "2d" }
    );
  } else {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Username or password do not match." });
  }
  return res.status(StatusCodes.OK).json({ token });
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  purchaseProduct,
  setProductSale,
  deleteAllProducts,
  insertTemplateProducts,
  authorizeSwaggerUI,
};

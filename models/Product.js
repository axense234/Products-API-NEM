const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: [3, "Please provide a longer name for the product."],
      maxLength: [15, "Please provide a shorter name for the product"],
      required: [true, "Your product must have a name!"],
      trim: true,
    },
    tag: {
      type: String,
      enum: {
        values: [
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
        ],
        message: "{VALUE} is not a supported tag",
      },
      required: [true, "Please provide a tag for your product."],
    },
    macros_100g: {
      type: Object,
      default: {
        carbs: "0 grams",
        proteins: "0 grams",
        fats: "0 grams",
      },
    },
    price: {
      type: Number,
      min: [1, "Please provide a bigger price for your product."],
      max: [150, "Please provide a less expensive price for your product."],
      required: [true, "Please provide a price for your product."],
    },
    originalPrice: {
      type: Number,
    },
    thumb: {
      type: String,
      default:
        "https://res.cloudinary.com/birthdayreminder/image/upload/v1668862177/Products%20API/Default_Product_Image.png_pvscwn.png",
    },
    sale: {
      type: String,
      default: "0%",
    },
    purchases: {
      type: Number,
      default: 0,
    },
    expDate: {
      type: Date,
      default: "03/02/2023",
    },
  },
  { timestamps: true }
);

// Set price in relation with initial sale,then set the originalPrice to the new calculated price
ProductSchema.pre("save", function () {
  this.originalPrice = this.price;
  const convertedSaleAmount = Number(this.sale.split("%")[0]);
  const calculatedNewPrice = (
    this.price -
    (this.price * convertedSaleAmount) / 100
  ).toFixed(2);
  this.price = calculatedNewPrice;
});

module.exports = mongoose.model("products", ProductSchema);

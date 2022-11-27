const express = require("express");

const router = express.Router();

const AuthenticationMiddleware = require("../middleware/authentication");

const {
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
} = require("../controllers/products");

router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);

router.post("/create", createProduct);
router.post("/insert-all", AuthenticationMiddleware, insertTemplateProducts);
router.post("/authorize", authorizeSwaggerUI);

router.patch("/update/:id", updateProduct);
router.patch("/buy/:id", purchaseProduct);
router.patch("/sale/:id", AuthenticationMiddleware, setProductSale);

router.delete("/delete/:id", AuthenticationMiddleware, deleteProduct);
router.delete("/delete-all", AuthenticationMiddleware, deleteAllProducts);

module.exports = router;

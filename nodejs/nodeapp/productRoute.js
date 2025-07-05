import express from "express";
const Router = express.Router();
// GET > localhost:8080/api/products/show
Router.get("/show", (req, res) => {
  res.send("Show Products API");
});
// DELETE > localhost:8080/api/products/1
Router.delete("/:id", (req, res) => {
  res.send("Delete product API");
});
export default Router
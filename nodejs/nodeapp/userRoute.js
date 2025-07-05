import express from 'express'
const Router = express.Router()
// GET > localhost:8080/api/users/show
Router.get("/show", (req, res) => {
  res.send("Show Users API");
});
// POST > localhost:8080/api/users/register
Router.post("/register", (req, res) => {
  res.send("Register User API");
});

// POST > localhost:8080/api/users/login
Router.post("/login", (req, res) => {
  res.send("User Login API");
});
export default Router
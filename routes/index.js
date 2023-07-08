const route = require("express").Router();

//Your API Home
route.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome To Your Documentation",
  });
});


//Define The Routes
const firstRoute = require("./first_route");
route.use("/api/first", firstRoute);

module.exports = route;
const firstRoute = require("express").Router();

const { firstController } = require("../controllers");
const { uploadImage } = require("../services/multer");

//You Can Change Your Custom Routes Here
firstRoute.get("/get", firstController.getFunction);
firstRoute.post("/post", firstController.postFunction);
firstRoute.put("/put/:id", firstController.putFunction);
firstRoute.delete("/delete/:id", firstController.deleteFunction);

module.exports = firstRoute;

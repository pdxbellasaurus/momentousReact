const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router
  .route("/")
  .post(usersController.create);

router
  .route("/login")
  .post(usersController.login);

module.exports = router;
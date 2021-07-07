const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router
  .route("/")
  .post(usersController.create);

router
  .route("/login")
  .post(usersController.login);

  router
  .route("/logout")
  .post(usersController.logout); 

module.exports = router;
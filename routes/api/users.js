const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router
  .route("/")
  .post(usersController.create);

router
  .route("/login")
  .post(usersController.login);

  router.get("/users/login", usersController.login);
  router.post("/users/login", usersController.authenticate,
   usersController.redirectView);

  router
  .route("/logout")
  .post(usersController.logout); 

module.exports = router;
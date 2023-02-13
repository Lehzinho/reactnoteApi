const { Router } = require("express");

const multer = require("multer");
const uploadConfig = require("../configs/upload");

const usersRouters = Router();

const UsersController = require("../controllers/UsersController");
const UserAvatarController = require("../controllers/UserAvatarController");

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();
const upload = multer(uploadConfig.MULTER);

const ensureAuthenticated = require("../middleware/ensureAuthenticated");

usersRouters.post("/", usersController.create);
usersRouters.put("/", ensureAuthenticated, usersController.update);
usersRouters.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  userAvatarController.update
);

module.exports = usersRouters;

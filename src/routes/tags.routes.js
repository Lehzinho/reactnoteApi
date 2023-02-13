const { Router } = require("express");

const TagsController = require("../controllers/TagsController");

const tagsRouters = Router();

const tagsController = new TagsController();

const ensureAuthenticated = require("../middleware/ensureAuthenticated");

tagsRouters.get("/", ensureAuthenticated, tagsController.index);

module.exports = tagsRouters;

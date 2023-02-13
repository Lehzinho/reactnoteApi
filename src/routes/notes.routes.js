const { Router } = require("express");

const NotesController = require("../controllers/NotesController");

const notesRouters = Router();

const notesController = new NotesController();

const ensureAuthenticated = require("../middleware/ensureAuthenticated");

notesRouters.use(ensureAuthenticated);

notesRouters.get("/", notesController.index);
notesRouters.post("/", notesController.create);
notesRouters.get("/:id", notesController.show);
notesRouters.delete("/:id", notesController.delete);

module.exports = notesRouters;

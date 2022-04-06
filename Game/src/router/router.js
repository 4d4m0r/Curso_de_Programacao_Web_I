import express from "express"
import mainController from "../controllers/main";
import areaController from "../controllers/area";
const cursoController = require("../controllers/curso")
const router = express.Router();

//Main controller
router.get("/about",mainController.about);
router.get("/game",mainController.game);
router.get("/ui",mainController.ui);

//Area controller
router.get("/areas",areaController.index);

router.get("/curso",cursoController.index);
router.get("/curso/create",cursoController.create);
router.post("/curso/create",cursoController.create);

export default router;
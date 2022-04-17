import express from "express"
import mainController from "../controllers/main";
import areaController from "../controllers/area";
import jogoController from "../controllers/jogo";
const cursoController = require("../controllers/curso")
const router = express.Router();

//Main controller
router.get("/about",mainController.about);
router.get("/ui",mainController.ui);

//Area controller
router.get("/areas",areaController.index);
router.get("/curso", cursoController.index);
router.get("/curso/create", cursoController.create);
router.post("/curso/create", cursoController.create);
router.get("/curso/update", cursoController.update);
router.post("/curso/update", cursoController.update);
router.get("/curso/:id", cursoController.read);
router.delete("/curso/:id", cursoController.remove);




export default router;
import express from "express"
import mainController from "../controllers/main";
import areaController from "../controllers/area";
import jogoController from "../controllers/jogo";
const cursoController = require("../controllers/curso")
const router = express.Router();

//Main controller
router.get("/about",mainController.about);
router.get("/ui",mainController.ui);
router.get("/game",mainController.game);

//Area controller
router.get("/areas",areaController.index);
router.get("/curso", cursoController.index);
router.get("/curso/create", cursoController.create);
router.post("/curso/create", cursoController.create);
router.get("/curso/update", cursoController.update);
router.post("/curso/update", cursoController.update);
router.get("/curso/:id", cursoController.read);
router.delete("/curso/:id", cursoController.remove);

router.get("/jogo/index",jogoController.index);
router.get("/jogo/ranking", jogoController.ranking);
router.get("/jogo/save", jogoController.save);




export default router;
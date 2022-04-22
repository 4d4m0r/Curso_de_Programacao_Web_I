import express from "express"
import mainController from "../controllers/main";
import areaController from "../controllers/area";
import jogoController from "../controllers/jogo";
const cursoController = require("../controllers/curso");
import authCheck from "../utils/authCheck";
const router = express.Router();

//Main controller
router.get("/about",mainController.about);
router.get("/ui",mainController.ui);
router.get("/game",authCheck,mainController.game);
router.get("/signup",mainController.signup);
router.post("/signup",mainController.signup);
router.get("/login",mainController.login);
router.post("/login",mainController.login);
router.get("/logout",mainController.logout);



//Area controller
router.get("/areas",authCheck,areaController.index);
router.get("/curso",authCheck,cursoController.index);
router.get("/curso/create",authCheck, cursoController.create);
router.post("/curso/create",authCheck, cursoController.create);
router.get("/curso/update",authCheck, cursoController.update);
router.post("/curso/update",authCheck,cursoController.update);
router.get("/curso/:id",authCheck, cursoController.read);
router.delete("/curso/:id",authCheck, cursoController.remove);

router.get("/jogo/index",authCheck,jogoController.index);
router.get("/jogo/ranking",authCheck, jogoController.ranking);
router.get("/jogo/save",authCheck, jogoController.save);




export default router;
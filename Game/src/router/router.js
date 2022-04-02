import express from "express"
import mainController from "../controllers/main";
import areaController from "../controllers/area";
const router = express.Router();

//Main controller
router.get("/about",mainController.about);
router.get("/game",mainController.game);
router.get("/ui",mainController.ui);

//Area controller
router.get("/areas",areaController.index);

export default router;
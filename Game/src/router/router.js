import express from "express"
import mainController from "../controllers/main"
const router = express.Router();


router.get("/about",mainController.about);
router.get("/game",mainController.game);

export default router;
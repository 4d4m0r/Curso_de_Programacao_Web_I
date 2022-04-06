import express from "express"
const router = express.Router();
import userController from "../controllers/user";

router.get("/user",userController.index);

router.get("/", (req,res) => {
    res.send("Hello world!!");
});

router.get("/about",(req,res) => {
    res.send("pag about");
});

export default router;

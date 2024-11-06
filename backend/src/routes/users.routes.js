import { Router } from "express";
import { addToHistory, getUserHistory, login, register } from "../controllers/user.controller.js";



const router = Router();

router.route("/login").post(login)
router.route("/register").post(register)
router.route("/add_to_activity").get(addToHistory)
router.route("/get_all_activity").post(getUserHistory)

export default router;
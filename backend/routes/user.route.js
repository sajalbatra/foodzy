import {getUser, updateUser, userLogin, userSignup} from "../controllers/user.controller.js"
import { Router } from "express";

const router=Router()

//public routes
router.post("/register", userSignup);
router.post("/login",userLogin);
router.get("/getuser",getUser)
router.patch("/updateuser",updateUser)


export default router
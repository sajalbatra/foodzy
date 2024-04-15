import {getUser, updateUser, userLogin, userSignup} from "../controllers/user.controller.js"
import { Router } from "express";
import checkUserAuth from "../middlewares/Auth.middleware.js";

const router=Router()

//public routes
router.post("/register", userSignup);
router.post("/login",userLogin);
router.get("/getuser",checkUserAuth,getUser)
router.patch("/updateuser",checkUserAuth,updateUser)


export default router
import express from "express";
const router=express.Router();
//controller
import * as authrouter from "../controller/auth.js";

router.get('/set-time',authrouter.profile)







export default router;
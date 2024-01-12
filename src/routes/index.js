import express from "express";

const router = express.Router();

router.use(express.json()); 

import {ctrl} from "../services/service.js";

//OAMP V4 Login()
router.post('/authenticate',ctrl.Login);


export default router;
import { Router } from "express";
const router = Router();

import { getUserEmail, addUserData } from "../controller/user.controller.js";

router.get(
  "/:email", getUserEmail
);

router.post(
  "/addUser", addUserData
);


export default router;
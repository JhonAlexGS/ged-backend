import { Router } from "express";
const router = Router();

import { statusUser, getUserEmail, addUserData, sendUserEmail, validateCode } from "../controller/user.controller.js";

router.get(
  "/", statusUser
);

router.get(
  "/sendCode/:email", sendUserEmail
);

router.post(
  "/validateCode/:email", validateCode
);

router.get(
  "/:email", getUserEmail
);

router.post(
  "/addUser", addUserData
);


export default router;
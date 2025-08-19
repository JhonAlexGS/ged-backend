import { Router } from "express";
const router = Router();
import { authGoogle, authGoogleCallback } from "../auth/auth.auth.js";

router.get(
  "/google", authGoogle
);

router.get(
  "/google/callback", authGoogleCallback
);

export default router;
 
import { Router } from "express";
const router = Router();
import { authGoogle, authGoogleCallback } from "../auth/auth.auth.js";

router.get(
  "/text", authGoogle
);

export default router;
 
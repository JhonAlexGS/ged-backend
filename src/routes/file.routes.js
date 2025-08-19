import { Router } from "express";
const router = Router();
const upload = multer({ dest: 'uploads/' }); 
import multer from 'multer';
import { saveFileEmail } from "../controller/file.controller.js";


router.post(
  "/uploadFile/:email", upload.single('file'), saveFileEmail
);


export default router;
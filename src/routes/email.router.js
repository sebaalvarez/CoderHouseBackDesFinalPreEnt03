import { Router } from "express";
import {
  sendEmail,
  sendEmailWithAttachments,
} from "../services/db/controllers/email.controller.js";

const router = Router();

router.get("/", sendEmail);
router.get("/attachments", sendEmailWithAttachments);

export default router;

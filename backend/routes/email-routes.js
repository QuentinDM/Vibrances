import express from "express";
import { emailController } from "../controllers/email-controller.js";

const router = express.Router();

router.post("/bookings", emailController);

export default router;
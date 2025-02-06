import { Router } from "express";
import {
  login,
  logout,
  signup,
  checkAuth,
} from "../controllers/auth.controller.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = Router();

router.get("/check-auth", verifyToken, checkAuth);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;

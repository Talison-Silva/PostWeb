import {
  get,
  authenticate,
  register,
  myAccount,
} from "@/api/controllers/users-controller.ts";
import verifyToken from "@/api/middleware/verifytoken.js";
import { Router } from "express";

const usersRoutes = Router();

//
usersRoutes.post("/authenticate", authenticate);
usersRoutes.get("/myAccount", verifyToken, myAccount);
usersRoutes.post("/register", register);
usersRoutes.get("/", get);

export { usersRoutes };

import { get, post, deleted, put } from "@/api/controllers/posts-controller.ts";
import verifyToken from "@/api/middleware/verifytoken.js";
import { Router } from "express";

const postsRoutes = Router();

//
postsRoutes.get("/:id?", get);
postsRoutes.post("/", verifyToken, post);
postsRoutes.delete("/:id", verifyToken, deleted);
postsRoutes.put("/", verifyToken, put);

export { postsRoutes };

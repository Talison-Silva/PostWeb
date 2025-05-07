import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import { join } from "path";

import { postsRoutes } from "@/routes/posts.ts";
import { usersRoutes } from "@/routes/users.ts";

export default (instance) => {
  instance.use(bodyParser.urlencoded({ extended: false }));
  instance.use(cors({ origin: "http://localhost:5173" }));
  instance.use(fileUpload({ createParentPath: true }));
  instance.use((req, res, next) => {
    res.setHeader(
      "Content-Security-Policy",
      "default-src 'none'; img-src 'self';",
    );
    next();
  });
  instance.use(
    "/static",
    express.static(join(import.meta.dirname, "assets", "upload")),
  );
  instance.use(express.json());

  // Routes
  instance.use("/users", usersRoutes);
  instance.use("/posts", postsRoutes);

  return instance;
};

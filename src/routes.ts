import { Router, Request, Response } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import uploadConfig from "./config/multer";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

router.post("/users", new CreateUserController().handle);

router.post("/", new AuthUserController().handle);

router.get("/user_detail", isAuthenticated, new DetailUserController().handle);

router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);

router.get(
  "/all_categories",
  isAuthenticated,
  new ListCategoryController().handle
);

router.post(
  "/products",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);

export { router };

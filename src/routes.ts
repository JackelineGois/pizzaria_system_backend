import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryService } from "./services/category/CreateCategoryService";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

const router = Router();

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

export { router };

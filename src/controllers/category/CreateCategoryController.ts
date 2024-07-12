import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const createCategory = new CreateCategoryService();
    const { name } = req.body;

    try {
      const category = await createCategory.execute({ name });

      return res.json(category);
    } catch (err) {
      res.status(401).json({ error: err.message });
    }
  }
}

export { CreateCategoryController };

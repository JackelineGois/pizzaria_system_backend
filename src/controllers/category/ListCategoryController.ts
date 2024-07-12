import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {
  async handle(req: Request, res: Response) {
    const listCategory = new ListCategoryService();

    try {
      const list = await listCategory.execute();
      return res.json(list);
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }
  }
}

export { ListCategoryController };

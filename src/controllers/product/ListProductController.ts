import { Request, Response } from "express";
import { ListProductService } from "../../services/product/ListProductService";

class ListProductController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;
    const listProducts = new ListProductService();

    const products = await listProducts.execute({ category_id });

    return res.json(products);
  }
}

export { ListProductController };

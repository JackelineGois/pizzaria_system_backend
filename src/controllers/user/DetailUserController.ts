import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController {
  async handle(req: Request, res: Response) {
    const detailUser = new DetailUserService();

    try {
      const detail = await detailUser.execute();
      return res.json(detail);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export { DetailUserController };

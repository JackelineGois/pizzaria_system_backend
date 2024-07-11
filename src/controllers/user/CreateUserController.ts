import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserServise";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const CreateUser = new CreateUserService();

    try {
      const user = await CreateUser.execute({ name, email, password });
      return res.json(user);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export { CreateUserController };

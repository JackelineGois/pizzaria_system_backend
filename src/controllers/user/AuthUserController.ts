import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const AuthUser = new AuthUserService();

    try {
      const auth = await AuthUser.execute({ email, password });
      return res.json(auth);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export { AuthUserController };

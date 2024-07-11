import prisma from "../../../prisma/index";
import { compare } from "bcryptjs";

interface AuthLogin {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthLogin) {
    const userLogin = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!userLogin) {
      throw Error("User/password incorrect");
    }

    const passwordMatch = await compare(password, userLogin.password);

    if (!passwordMatch) {
      throw Error("User/password incorrect");
    }

    //gerar um token JWT e devolver os dados do usuário como id, name e email
    return { passwordMatch };
  }
}

export { AuthUserService };

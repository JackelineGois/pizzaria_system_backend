import prisma from "../../../prisma/index";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

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

    const token = sign(
      {
        name: userLogin.name,
        email: userLogin.email,
      },
      process.env.JWT_SECRET,
      {
        subject: userLogin.id,
        expiresIn: "30d",
      }
    );
    return {
      id: userLogin.id,
      name: userLogin.name,
      email: userLogin.email,
      token: token,
    };
  }
}

export { AuthUserService };

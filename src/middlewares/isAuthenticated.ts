import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export interface PayLoad {
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //Receiving token;
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }
  //splitting the token to take off the Bearer and getting only the token.
  const [, token] = authToken.split(" ");

  try {
    //Verifing if the tokes exists and is valid
    const { sub } = verify(token, process.env.JWT_SECRET) as PayLoad;
    console.log(sub);
  } catch (err) {

    return res.status(401).end();
  }
  next();
}

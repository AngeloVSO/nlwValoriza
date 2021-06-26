import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export let userId = null

export const ensureAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).end();
  }

  try {
    const { sub } = verify(
      token,
      "aa354cf2553712ffaf47dbd4c36fe356"
    ) as IPayload;

    if (sub) { 
        userId = sub 
        return next()
    }
  } catch (error) {
    return res.status(401).send({error: "Unauthorized"});
  }
};

import { Request, Response } from "express";
import jwt, { Jwt } from "jsonwebtoken";
import { NextFunction } from "express";
import { ApiKeyModel } from "../models/api_key";

export class AuthMiddleware {
  static verifyAcces(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies.access_token;
    
    if (!token) {
      return res.status(403).send("Access not Authorized");
    }

    try {
      const data = jwt.verify(token, process.env.SECRET_KEY as string);
      } catch (error) {
      return res.status(403).send("Access not Authorized Error");
    }
    
    next();
    return
  }

  static async verifyApiKeyToken(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const token = req.headers?.authorization?.split(" ")[1];
      const payload = jwt.verify(token as string, process.env.SECRET_KEY as string) as payload

      if (!(payload && token)) {
        res.status(403).json({ message: "not auth query" });
      }
      ApiKeyModel.getByName({ name: payload.name }).then((key) => {
        if (key?.status) next();
        else res.status(403).json({ message: "Not Access" });
      });
    } catch (error) {
      res.status(401).json({ Message: "Api Key Not Provide" });
    }
  }
}

type payload = {
  name: string;
  iat: number;
};

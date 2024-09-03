import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { NextFunction } from "express";

export class AuthMiddleware {
  static async verifyAcces(req: Request, _res: Response, next: NextFunction) {
    const token = req.cookies.access_token;
    try {
      const data = jwt.verify(token, process.env.SECRET_KEY as string);
    } catch (error) {}

    next();
  }

  static async verifyApiKEyToken(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const token = req.headers?.authorization?.split(" ")[1];
      const data = jwt.verify(
        token as string,
        process.env.SECRET_KEY as string
      );
      if (!(data && token)) {
        res.status(403).json({ message: "Bad query" });
      }
      if (data) next();
    } catch (error) {
      res.status(401).json({ Message: "Api Key Not Provide" });
    }
  }
}

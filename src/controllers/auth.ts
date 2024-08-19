import { Request, Response } from "express";
import { validateLogin, validateRegister } from "../schemas/auth";
import { UserModel } from "../models/user";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export class AuthController {
  static async login(req: Request, res: Response) {
    var inputv = validateLogin(req.body);
    if (inputv.error) {
      return res.status(400).json(inputv.error.message);
    } else {
      const userLoguin = await UserModel.getByEmail({
        email: inputv.data.email,
      });
      if (userLoguin) {
        const validPassw = bcrypt.compareSync(
          inputv.data.password,
          userLoguin.password
        );
        if (validPassw) {
          const token = jwt.sign(
            {
              id: userLoguin.id,
              nickname: userLoguin.nickname,
            },
            process.env.SECRET_KEY as string,
            {
              expiresIn: "1h",
            }
          );

          const infoOut = {
            nickname: userLoguin.nickname,
            email: userLoguin.email,
            token: token,
          };

          res
            .cookie("access_token", token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === "production",
              sameSite: "strict",
              maxAge: 1000 * 60 * 60,
            })
            .send(infoOut);
        } else {
          res.status(400).json({ message: "Wrong password" });
        }
      } else res.status(400).json({ message: "Email does not exist" });
    }
    return;
  }

  static async register(req: Request, res: Response) {
    var inputv = validateRegister(req.body);
    if (inputv.error) {
      return res.status(400).json(inputv.error.message);
    } else {
      const checkUniq = await UserModel.uniqueCheck({
        input: {
          email: inputv.data.email,
          nickname: inputv.data.nickname,
          phone: inputv.data.phone,
        },
      });
      if (checkUniq) {
        return res.status(400).json({ message: "User already exist" });
      } else {
        const hashedpassword = bcrypt.hashSync(
          inputv.data.password,
          Number(process.env.SALT_ROUNDS)
        );
        const userCreate: newUser = {
          ...inputv.data,
          role: "client",
          password: hashedpassword,
        };
        try {
          const outInfo = await UserModel.create({ input: userCreate });
          return res.status(201).json({
            username: outInfo.username,
            email: outInfo.email,
          });
        } catch {
          res.status(400).json({ message: "Error on creating" });
        }
        return;
      }
    }
  }
  static async logout(_req: Request, res: Response) {
    res.clearCookie('access_token')
    .json(
      {
        message: 'Logout successful'
      }
    )
  }
  static async protected(_req: Request, res: Response) {
    return res.send("Protected Content")
  }
}

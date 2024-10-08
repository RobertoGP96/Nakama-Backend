import { Request, Response } from "express";
import { ApiKeyModel } from "../models/api_key";

import jwt from "jsonwebtoken";
import { validateApiKey } from "../schemas/api_key";

export class ApiKeyController {
  static async getAll(_req, res: Response) {
    const getall = await ApiKeyModel.getAll();
    if (!getall) {
      return res.status(400).json({ message: "Is Empty" });
    }
    return res.status(200).json(getall);
  }
  static async getByID(_req, res) {
    const { id } = _req.params;

    const getbyId = await ApiKeyModel.getByID({ id });

    if (!getbyId)
      return res.staus(400).json({ message: "ApiKey id not found" });

    return res.status(200).json(getbyId);
  }
  static async create(req: Request, res: Response) {
    const newApiKey: newApiKey = req.body;

    //Input Validation
    const newAKV = validateApiKey(newApiKey);
    if (newAKV.error) {
      res.status(400).json(newAKV.error.message);
    }

    const createdApiKey: ApiKey = await ApiKeyModel.create({
      input: {
        name: newApiKey.name,
        status: newApiKey.status,
        token: jwt.sign(
          {
            name: newApiKey.name,
          },
          process.env.SECRET_KEY as string
        ),
      },
    });
    return res.status(201).json({
      name: createdApiKey.name,
      token: createdApiKey.token,
    });
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const editApiKey: updateApiKey = req.body;

    //Input Validation
    const editAKV = validateApiKey(editApiKey);
    if (editAKV.error) {
      res.status(400).json(editAKV.error.message);
    }
    //Check ID
    if (await ApiKeyModel.checkID({ id }))
      return res.status(400).json({
        message: "Check unique fields",
      });
    try {
      const updatedApiKey = ApiKeyModel.update({ id, input: editApiKey });
      return res.status(200).json({
        name: (await updatedApiKey).name,
        token: (await updatedApiKey).token,
        status: (await updatedApiKey).status,
      });
    } catch {
      return res.status(400).json({ message: "Error updating" });
    }
  }
  static async generate(req: Request, res: Response) {
    const { id } = req.params;

    ApiKeyModel.getByID({ id }).then((data) => {
      if (!data)
        return res.status(400).json({
          message: "Check unique fields",
        });

      return ApiKeyModel.generate({
        id,
        token: jwt.sign(
          {
            id: data?.id,
            name: data?.name,
          },
          process.env.SECRET_KEY as string
        ),
      }).then((data) => {
        return res.status(200).json({
          message: "Api Key generated",
          token: data,
        });
      });
    });
  }
  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    ApiKeyModel.getByID({ id }).then((data) => {
      if (!data)
        return res.status(404).json({
          message: "Id no encontrado",
        });

      return ApiKeyModel.delete({ id }).then((e) => {
        return res.status(200).send(e);
      });
    });
  }

  static async changeStatus(req: Request, res: Response) {
    const { id } = req.params;

    ApiKeyModel.getByID({ id }).then((data) => {
      if (!data) res.status(404).send({ message: "Id not found" });

      const tmp: updateApiKey = {
        name: data?.name as string,
        status: !data?.status as boolean,
      };

      ApiKeyModel.update({ id, input: tmp }).then(() => {
        res.status(200).json({ message: "Change status" });
      });
    });
  }
}

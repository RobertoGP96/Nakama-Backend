import { UserModel } from "../models/user";
import { validateUser } from "../schemas/user";

export class UserController {
  static async getAll(_req, res) {
    try {
      const getall = await UserModel.getAll();
      if (getall.length>0) {
        res.status(200).json(getall);
      }else{
        res.status(404).json({ message: "Is Empty" });
      }
    } catch {
      return res.status(500).json({ message: "Something is wrong" });
    }
  }
  static async getByID(req, res) {
    const { id } = req.params;
    const getbyId = await UserModel.getByID({ id });
    //Id check
    if (!getbyId) {
      return res.status(404).json({ message: "Id not foud" });
    } else {
      res.status(200).json(getbyId);
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    //Check ID
    const idCheck = await UserModel.getByID({ id });
    if (!idCheck) {
      return res.status(404).json({ message: "Id not foud" });
    } else {
      try {
        var deleted = await UserModel.delete({ id });
        return res.status(200).json(deleted);
      } catch (error) {
        return res
          .status(400)
          .json({ message: "Resource not deleted", error: error });
      }
    }
  }

  static async create(req, res) {
    const input: newUser = req.body;
    //ljjkdhsf

    const inputV = validateUser(req.body);
    if (inputV.error)
      res.status(400).json({ message: JSON.parse(inputV.error.message) });
    else if (inputV.success) {
      //Check unique
      const uniqueInput: uniqueUser = {
        nickname: input.nickname,
        email: input.email,
        phone: input.phone,
      };
      const uqcheck = await UserModel.uniqueCheck({ input: uniqueInput });
      if (!uqcheck) {
        try {
          const createdL = await UserModel.create({ input });
          return res.status(201).json({ message: "Resource created" });
        } catch {
          return res.status(400).json({ message: "Resource not created" });
        }
      } else {
        //Unespected error
        return await res
          .status(409)
          .json({ message: "Email, Nick and Phone must be unique" });
      }
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const input: User = req.body;

    const inputV = validateUser(req.body);
    //Schema Validation
    if (inputV.error)
      res.status(400).json({ message: JSON.parse(inputV.error.message) });
    else if (inputV.success) {
      //Check id
      const idCheck = await UserModel.getByID({ id });
      if (!idCheck) {
        return res.status(404).json({ message: "Id not foud" });
      }
      //Check unique
      const uniqueInput: uniqueUser = {
        nickname: input.nickname,
        email: input.email,
        phone: input.phone,
      };
      const uqcheck = await UserModel.uniqueCheck({ input: uniqueInput });
      if (uqcheck) {
        //Unexpected error
        try {
          const updatedL = await UserModel.update({
            id: id,
            input: input,
          });
          if (updatedL)
            return await res.status(201).json({ message: "Resource updated" });
        } catch {
          return await res
            .status(500)
            .json({ message: "Resource not created " });
        }
      } else {
        return await res.status(409).json({ message: "Email, Nick and Phone must be unique" });
      }
    }
  }
}

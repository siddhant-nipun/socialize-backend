import express from "express";
import { dbCreateUser, dbFindUser, dbVerifyPassword } from "../models/user";
import { generateToken } from "../utils/auth.util";
export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, name, password } = req.body;

    const userExists = await dbFindUser({ email });
    if (userExists?.rowCount) {
      return res.status(400).send({ message: "User already exists" });
    }
    const user = await dbCreateUser(name, email, password);
    if (!user) {
      return res.status(500).send({ message: "Error creating user" });
    }
    const jwtToken = generateToken(user.rows[0]?.id);
    res.status(200).send({
      token: jwtToken,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ error: "There was a problem while registering the user." });
  }
};

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;

    const userExists = await dbFindUser({ email });
    if (!userExists?.rowCount) {
      return res
        .status(400)
        .send({ message: "Cannot find user with this email" });
    }
    const user = await dbVerifyPassword(email, password);
    if (!user?.rowCount) {
      return res.status(400).send({ message: "Incorrect password" });
    }
    const jwtToken = generateToken(user.rows[0]?.id);
    res.status(200).send({
      token: jwtToken,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ error: "There was a problem while registering the user." });
  }
};

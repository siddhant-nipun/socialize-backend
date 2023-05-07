import jwt from "jsonwebtoken";
import { jwtSecretKey } from "../constants/auth";
export const generateToken = (userId: string) => {
  const data = {
    time: Date(),
    userId: userId,
  };
  return jwt.sign(data, jwtSecretKey);
};

export const verifyToken = (token: string) => {
  try {
    const verified = jwt.verify(token, jwtSecretKey, {
      // maxAge: 15*60*1000,
    });
    if (verified) {
      return verified;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

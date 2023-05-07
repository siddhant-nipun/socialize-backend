import { Router } from "express";
import { login, register } from "../controller/public.controller";

export const publicRoutes = Router();

publicRoutes.post("/register", register);
publicRoutes.post("/login", login);

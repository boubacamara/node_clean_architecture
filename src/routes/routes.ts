import { Router } from "express";
import { welcomeRoutes } from "./welcome.routes";
import container from "../utils/service.providers";

const router = Router();

export const allRoutes = () => {
    welcomeRoutes(router, container);

    return router;
}
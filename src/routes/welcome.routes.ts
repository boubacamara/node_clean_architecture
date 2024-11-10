import { Router } from "express";
import { Container } from "inversify";
import { INTERFACE_TYPES } from "../utils/constants";
import { WelcomeController } from "../controllers/welcome.controller";

export const welcomeRoutes = (route: Router, container: Container) => {

    const controller = container.get<WelcomeController>(INTERFACE_TYPES.WelcomeController);
    
    route.get('/', controller.helloMethod.bind(controller));
}
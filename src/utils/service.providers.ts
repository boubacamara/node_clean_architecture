import { Container } from "inversify";
import { INTERFACE_TYPES } from "./constants";
import { WelcomeController } from "../controllers/welcome.controller";



const container = new Container;


container.bind(INTERFACE_TYPES.WelcomeController).to(WelcomeController);

export default container;
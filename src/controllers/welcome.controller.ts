import { Request, Response } from "express";
import { injectable } from "inversify";

@injectable()
export class WelcomeController {

    helloMethod(req: Request, res: Response) {
        res.status(200).json({msg: 'Hello world'})
    }
}


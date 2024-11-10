import { NextFunction, Request, Response } from "express";
import { ENV_MODE } from "../../utils/constants";
import { ZodError } from "zod";
import createError from 'http-errors';


export const errorHandler = (err:any, req: Request, res: Response, next: NextFunction) => {

    const isModeDev = ENV_MODE === 'development';

    if(err instanceof ZodError) {

        const validationErrors = err.errors.map(e => ({
            path: e.path.join('.'),
            msg: e.message
        }));

        if(isModeDev) {
            return res.status(400).json({
                msg: 'Erreur de la validation des données',
                errors: validationErrors,
                stack: err.stack
            })
        }

        return res.json(400).json({
            msg: 'Erreur de la validation des données',
            errors: validationErrors
        })
    }

    if(createError.isHttpError(err)) {
        return res.status(err.statusCode || 500).json({
            msg: err.message,
            ...(isModeDev && {stack: err.stack})
        })
    }

    const internalError = createError(500, 'Erreur interne du serveur');
    res.status(internalError.statusCode).json({
        msg: internalError.message,
        ...(isModeDev && {stack: err.stack})
    })
}
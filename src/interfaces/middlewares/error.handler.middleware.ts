import { BadRequestError } from "@error-custom/BadRequestError"
import { CustomError } from "@error-custom/CustomError"
import { NotFoundError } from "@error-custom/NotFoundError"
import { NextFunction, Request, Response } from "express";

export const ErrorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({
          message: err.message
        })
    }

    if (err instanceof NotFoundError) {
        return res.status(err.statusCode).json({
            message: err.message
        })
    }

    if (err instanceof BadRequestError) {
        return res.status(err.statusCode).json({
          message: err.message
        })
    }

    return res.status(500).json(err)
}
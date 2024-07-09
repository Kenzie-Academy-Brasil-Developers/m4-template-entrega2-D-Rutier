import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { findError } from "../errors/error";
import { ZodSchema } from "zod";

export function bookExists(req: Request, res:Response, next: NextFunction){
    const foundIndex = booksDatabase.findIndex(
        (item) => item.id === Number(req.params.bookId)
    );
    
    if (foundIndex === -1) {
        throw new findError ("Book not found.", 404)
    }

    res.locals.foundIndex = foundIndex

    return next()
}

export function checkBook(schema:ZodSchema){
    return(req:Request, res: Response, next:NextFunction) => {
        req.body = schema.parse(req.body)
        if(booksDatabase.find((item) => item.name === req.body.name)){
            throw new findError ("Book already registered.", 409) 
        }

        return next()
    }
}
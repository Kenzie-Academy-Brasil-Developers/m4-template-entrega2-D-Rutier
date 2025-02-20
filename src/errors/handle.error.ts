import { NextFunction, Request,Response } from "express";
import { findError } from "./error";
import { ZodError } from "zod";


export function handleGlobalErrors(
    error:Error,
    req:Request,
    res:Response,
    next: NextFunction
){
    if(error instanceof findError){
        return res.status(error.statusCode).json({error:error.message})
    }

    if(error instanceof ZodError){
        return res.status(400).json({error: error.errors})
    }

    console.log(error)
    return res.status(500).json({error:"Internal Server Error "})
}
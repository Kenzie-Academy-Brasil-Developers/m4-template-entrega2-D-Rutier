import express, { json } from "express";
import { bookRouter } from "./routers/route";
import { handleGlobalErrors } from "./errors/handle.error";

export const app = express();

app.use(json());

app.use("/books" , bookRouter)

app.use(handleGlobalErrors)
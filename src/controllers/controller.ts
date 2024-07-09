import { Request,Response } from "express";
import { BookService } from "../services/service";

export class BookController {

    public postBook = (req:Request, res:Response) => {

        const bookservice = new BookService()
        const  newBook = bookservice.postBook(req.body)

        return res.status(201).json(newBook);
    };

    public getBook = (req:Request, res:Response) => {
        const bookservice = new BookService()
        const books = bookservice.getBook()

        return res.json(books)
    }

    public getIndBook = (req:Request, res:Response) => {
        const bookservice = new BookService()

        const {foundIndex} = res.locals

        const book = bookservice.getIndBook(foundIndex)

        return res.json(book);
    }

    public patchBook = (req:Request, res:Response) => {        
        const bookservice = new BookService()

        const {foundIndex} = res.locals

        const updatedBook = bookservice.patchBook(foundIndex, req.body)
    
        return res.status(200).json(updatedBook);
    }   

    public deleteBook = (req:Request, res:Response) => {
        const bookservice = new BookService()

        const {foundIndex} = res.locals
        
        bookservice.deleteBook(foundIndex)
    
        return res.status(204).json();
    }   
}

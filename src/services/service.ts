import { booksDatabase, nextId } from "../database/database";
import { findError } from "../errors/error";
import { BookCreate, BookUpdate } from "../interface/interface";

export class BookService{

    public postBook = (payLoad:BookCreate) => {
        const newBook = {
            ...payLoad,
            id: nextId(),
            createdAt: new Date(),
            updatedAt: new Date()
        };
    
        booksDatabase.push(newBook);

        return newBook
    }

    public getBook = () => {
        return booksDatabase
    }

    public getIndBook = (foundIndex:number) => {

        return booksDatabase[foundIndex]
    }

    public patchBook = (foundIndex:number, payLoad:BookUpdate) => {

        const updatedBook = {
            ...booksDatabase[foundIndex],
            ...payLoad,
            updatedAt: new Date()
        }

        booksDatabase.splice(foundIndex, 1, updatedBook);

        return updatedBook
    }

    public deleteBook = (foundIndex:number) => {

        booksDatabase.splice(foundIndex, 1);
    }
}
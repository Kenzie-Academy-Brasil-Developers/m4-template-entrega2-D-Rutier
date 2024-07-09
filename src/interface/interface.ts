export type Book = {
    id:number;
    name:string;
    pages:number;
    category?:string;
    createdAt:Date;
    updatedAt:Date;
}

export type BookCreate = Omit<Book, "id"| "createdAt" | "updatedAt">

export type BookUpdate = Partial<BookCreate>
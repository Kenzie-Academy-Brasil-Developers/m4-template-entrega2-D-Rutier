import { Book } from "../interface/interface"

export const booksDatabase: Book[] = []

let generatedId = 0

export function nextId() {
    return ++generatedId
}



import {z} from "zod"

export const bookPostSchema = z.object({
    name: z.string().min(1),
    pages: z.number(),
    category: z.string().min(1).optional(),
})

export const bookPatchSchema = z.object({
    name: z.string().min(1).optional(),
    pages: z.number().optional(),
    category: z.string().min(1).optional(),
})
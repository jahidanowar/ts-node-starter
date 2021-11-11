import { Request, Response, NextFunction } from "express"
import { AnyZodObject } from "zod"

export function validate(schema: AnyZodObject){
    return (req: Request, res: Response, next: NextFunction) => {
        try{
            schema.parse(req)
            next();

        }catch(err:any){
           return res.status(400).json(err.errors);
        }
    }
}
import { Request, Response } from "express";

export function register(req: Request, res: Response) {
    res.send("store");
}

export function login(req: Request, res: Response) {
    res.send("login");
}
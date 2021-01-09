
import { Request, Response } from 'express'


export interface Controller {
    get?(request: Request, response: Response): void
    post?(request: Request, response: Response): void
}
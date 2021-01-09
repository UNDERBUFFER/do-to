
import { Request, Response } from 'express'
import { Controller } from './entities'


export class MainController implements Controller {
    get(request: Request, response: Response): void {
        response.send('hello get')
    }
    post(request: Request, response: Response): void {
        response.send('hello post')
    }
}


export class AccurateController implements Controller {
    get(request: Request, response: Response): void {
        response.send('hello get')
    }
    post(request: Request, response: Response): void {
        response.send('hello post')
    }
}

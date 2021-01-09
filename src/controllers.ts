
import { Request, Response } from 'express'
import { Controller, DatabaseMixin } from './entities'


export class MainController extends DatabaseMixin implements Controller {
    get(request: Request, response: Response): void {
        response.send('hello get')
    }
    post(request: Request, response: Response): void {
        response.send('hello post')
    }
}


export class AccurateController extends DatabaseMixin implements Controller {
    get(request: Request, response: Response): void {
        response.send('hello get')
    }
    post(request: Request, response: Response): void {
        response.send('hello post')
    }
}

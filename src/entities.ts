
import { Request, Response } from 'express'
import { Collection } from 'mongodb';


export interface Controller {
    collection: Collection
    get?(request: Request, response: Response): void
    post?(request: Request, response: Response): void
}

export class DatabaseMixin {
    collection: Collection
    constructor( collection: Collection ) {
        this.collection = collection
    }
}
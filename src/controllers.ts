
import { Request, Response } from 'express'
import {  MongoError } from 'mongodb'
import { Controller, DatabaseMixin } from './entities'
import { NoteList } from './model'


export class MainController extends DatabaseMixin implements Controller {
    get(request: Request, response: Response): void {
        response.render('main/index.hbs')
    }
    post = (request: Request, response: Response): void => {
        const descriptions: string[] = Object.values( request.body )
        const noteList: NoteList = { notes: [] }
        for (let description of descriptions) {
            noteList.notes.push( {
                done: false,
                fail: false,
                description: description
            } )
        }
        this.collection.insertOne( noteList, (error: MongoError, result: any): void => {
            if (error) throw error
            response.redirect(result.ops[0]._id)
        } )
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

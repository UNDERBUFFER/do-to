
import { Request, Response } from 'express'
import { MongoError } from 'mongodb'
import crypto from 'crypto'
import { Controller, DatabaseMixin } from './entities'
import { Note } from './model'


export class MainController extends DatabaseMixin implements Controller {
    get(request: Request, response: Response): void {
        response.render('main/index.hbs')
    }
    post = (request: Request, response: Response): void => {
        const descriptions: string[] = Object.values( request.body )
        const notes: Note[] = []
        const uniqueKey: string = crypto.randomBytes(64).toString('hex').slice(0, 20)
        for (let description of descriptions) {
            notes.push( {
                done: false,
                fail: false,
                description: description,
                key: uniqueKey
            } )
        }
        this.collection.insertMany( notes, (error: MongoError, result: any): void => {
            if (error) throw error
            response.redirect(`/${uniqueKey}`)
        } )
    }
}


export class AccurateController extends DatabaseMixin implements Controller {
    get = (request: Request, response: Response): void => {
        const key: string = request.params.id
        this.collection.find({ key }).toArray( (error: MongoError, notes: any): void => {
            response.render('accurate/index.hbs', { notes })
        } )
    }
    post = (request: Request, response: Response): void => {
        const requestData: Note = request.body
        if (requestData.hasOwnProperty('_id') === true) {
            this.collection.updateOne( {_id: requestData._id}, {$set: requestData}, (error: MongoError, result: any): void => {
                if (error) throw error
                response.redirect(`/${requestData.key}`)
            } )
        }
        else {
            const key: string = request.params.id
            const note: Note = {
                done: false,
                fail: false,
                description: requestData.description,
                key: key
            }
            this.collection.insertOne( note, (error: MongoError, result: any): void => {
                if (error) throw error
                response.redirect(`/${key}`)
            } )
        }
    }
}


import express from 'express'
import { Collection } from 'mongodb'
import { AccurateController, MainController } from './controllers'


export function setUpRouter( collection: Collection ): express.Router {
    const Router: express.Router = express.Router()

    const MainControllerObject: MainController = new MainController( collection )
    const AccurateControllerObject: AccurateController = new AccurateController( collection )

    Router.get('/', MainControllerObject.get)
    Router.get('/:id', AccurateControllerObject.get)
    Router.post('/', MainControllerObject.post)
    Router.post('/:id', AccurateControllerObject.post)

    return Router
}

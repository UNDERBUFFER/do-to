
import express from 'express'
import { AccurateController, MainController } from './controllers'


export const Router: express.Router = express.Router()
const MainControllerObject: MainController = new MainController()
const AccurateControllerObject: AccurateController = new AccurateController()

Router.get('/', MainControllerObject.get)
Router.get('/:id', AccurateControllerObject.get)
Router.post('/', MainControllerObject.post)
Router.post('/:id', AccurateControllerObject.post)
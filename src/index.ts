
import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import { MongoClient } from 'mongodb'
import { Router } from './router'
import { MONGODB_CONNECTION_STRING } from './settings'


const app = express()

app.set('views', path.join(__dirname, '/views'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('/static', express.static( path.join(__dirname, '/public') ))
app.use('/', Router)

app.listen( 3000, (): void => {
    console.log(`[server]: server is running`)
} )

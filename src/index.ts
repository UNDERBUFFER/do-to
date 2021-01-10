
import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import { MongoClient, MongoError } from 'mongodb'
import { setUpRouter } from './router'
import { MONGODB_CONNECTION_STRING } from './settings'


const app = express()

app.set('views', path.join(__dirname, '/views'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('/static', express.static( path.join(__dirname, '/public') ))

MongoClient.connect( MONGODB_CONNECTION_STRING, (error: MongoError, client: MongoClient) => {
    console.log(`[server]: connect to db...`)
    if (error) throw error

    app.use('/', setUpRouter( client.db('main').collection('notes') ))

    app.listen( 3000, (): void => {
        console.log(`[server]: server is running!`)
    } )        
} )

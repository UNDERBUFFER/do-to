
import express from 'express'
import { Router } from './router'

const app = express()

app.use('/', Router)

app.listen( 3000, (): void => {
    console.log(`[server]: server is running`)
} )
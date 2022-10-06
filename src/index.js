const express = require( 'express')
require( 'dotenv').config()

const morgan = require( 'morgan')
const { morganLogs } = require('./middlewares/morgan')

const v1Router = require( './v1/routes/index')
const v1AuthRouter = require( './v1/routes/auth.routes')

const app = express()

/**
 * MIDDLEWARES
 */
app.use( morgan('dev'))
app.use( morganLogs)
app.use( express.urlencoded({ extended: true}))
app.use( express.json())

/**
 * APP ROUTING
 */
 app.use("/api/v1", v1Router);
 app.use( "/api/v1/auth", v1AuthRouter)

module.exports =  app
const express = require( 'express')
require( 'dotenv').config()

const morgan = require( 'morgan')
const { morganLogs } = require('./middlewares/morgan')

const v1Router = require( './v1/routes/index')

const app = express()

/**
 * MIDDLEWARES
 */
app.use( morgan('dev'))
app.use( morganLogs)

/**
 * APP ROUTING
 */
 app.use("/api/v1", v1Router);

module.exports =  app
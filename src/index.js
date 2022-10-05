const express = require( 'express')
require( 'dotenv').config()

const v1Router = require( './v1/routes/index')

const app = express()

/**
 * MIDDLEWARES
 */

/**
 * APP ROUTING
 */
 app.use("/api/v1", v1Router);

module.exports =  app
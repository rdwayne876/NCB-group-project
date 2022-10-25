const express = require( 'express')
require( 'dotenv').config()

const morgan = require( 'morgan')
const { morganLogs } = require('./src/middlewares/morgan')
const database = require( './db/db')
const hostname = 'localhost';

const v1Router = require( './src/v1/routes/index')
const v1AccountRouter = require( './src/v1/routes/account.routes')
const v1AuthRouter = require( './src/v1/routes/auth.routes')
const v1TransactionRouter = require( './src/v1/routes/transaction.routes')
const v1BeneficiaryRouter = require( './src/v1/routes/beneficiary.routes')
const v1TransferRouter = require( './src/v1/routes/transfer.routes')
const v1UserRouter = require( './src/v1/routes/user.routes')
// const v101AccountRouter = require( './v1.0.1/routes/account.routes')

const app = express()

/**
 * MIDDLEWARES
 */
app.use( morgan('dev'))
app.use( morganLogs)
app.use( express.urlencoded({extended: true}))
app.use(express.json())

/**
 * APP ROUTING
 */
 app.use( "/api/v1", v1Router);
 app.use( "/api/v1/auth", v1AuthRouter)
 app.use( '/api/v1/accounts', v1AccountRouter)
 app.use( '/api/v1/transactions', v1TransactionRouter)
 app.use( '/api/v1/beneficiaries', v1BeneficiaryRouter)
 app.use( '/api/v1/transfers', v1TransferRouter)
 app.use( '/api/v1/users', v1UserRouter)

 /**
  * DB CONNECTION
  */
  database()

  /**
   * RUN APP SERVER
   */
   const server = app.listen( process.env.PORT, "localhost", () => {
        console.log(`Server running at http://${hostname}:${process.env.PORT}/api/v1`)
        console.log(`V1 Docs at https://documenter.getpostman.com/view/24048897/2s84LPvWs1`);
    })

module.exports =  app
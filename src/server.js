const database = require('./db')
require( 'dotenv').config()
app = require('./index')

//Run DB connection
database()

//Run app server
const server = app.listen( process.env.PORT, "0.0.0.0", () => {
    console.log(`Server running on PORT ${process.env.PORT}`);
})
const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

//API meta info
const options = {
    definition: {
        openapi: "3.0.0",
        info: { 
            title: "NCB Group Project API", 
            description: "This API will be used to drive a replica of the NCB mobile app.",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:3000/api/v2"
            }
        ]
    },
    apis: [ './routes/auth.routes.js']
}

// Docs in JSON format
const swaggerSpec = swaggerJSDoc(options);

//Serve swagger docs function
const swaggerDocs = ( app, port) => {
    // route to docs
    app.use("/api/v2/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

    app.get( "/api/v2/docs.json", ( req, res) => {
        res.setHeader( "Content-Type", "application/json")
        res.send( swaggerSpec)
    })

    console.log(
        `Version 2 Docs are available on http://localhost:${port}/api/v2/docs`
    );
}

module.exports = { swaggerDocs}
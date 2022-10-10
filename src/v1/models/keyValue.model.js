const mongoose = require( 'mongoose')

const keyValueSchema = new mongoose.Schema({
    key:{
        type: String,
    }, 
    value:{
        type: String
    }
})

module.exports = mongoose.model('KeyValue', keyValueSchema)
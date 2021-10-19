import mongoose from 'mongoose'

const converationSchema = new mongoose.Schema({
    members: {
        type: Array
    }},
    {
        timestamps: true
    }
)

const conversation = mongoose.model('conversation', converationSchema)

export default conversation 
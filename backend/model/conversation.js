import mongoose from 'mongoose'

const converationSchema = new mongoose.Schema({
    members: {
        type: Array
    },
    message: {
        type: String
    }
    },
    {
        timestamps: true
    }
)

const conversation = mongoose.model('conversation', converationSchema)

export default conversation 
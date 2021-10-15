import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    givenName: String,
    familyName: String,
})

const user = mongoose.model('user', userSchema)

export default user
import express, { response } from 'express'
import User from '../model/user.js'

const route = express.Router()

route.post('/add', async (req, res) => {
    // console.log(req.body)
    try {   
        const exist = await User.findOne({ googleId: req.body.googleId })

        if(exist)
        {
            res.status(200).json('User already exists')
            return
        }


        const newUser = new User(req.body)
        await newUser.save()
        res.status(200).json('User saved successfully')
    } catch(error) {
        response.status(500).json(error)
    }
})

export default route
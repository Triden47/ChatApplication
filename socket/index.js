import { Server } from 'socket.io'

const PORT = 8000

const io = new Server(PORT, {
    cors: {
        origin: 'http://localhost:3000'
    }
})

let users = []
const addUser = (userId, socketId) => {
    !users.some(user => user.userId === userId) && users.push({ userId, socketId })

}

io.on('connection', (socket) => {
    console.log('User Connected')

    socket.on('addUser', userId => {
        addUser(userId, socket.id)
        // console.log(userId)
        io.emit('getUsers', users)
    })
})
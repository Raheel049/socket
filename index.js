import express from 'express'
import { createServer } from 'node:http'
import { Server } from 'socket.io'

const app = express()
const server = createServer(app)
const io = new Server(server)

app.use(express.static('public'))

io.on('connection', (socket) => {
    console.log("message pass", socket.id)

    socket.on('message', (msg) => {
        console.log("message", msg);
        io.emit('message',msg)
    })
})


app.get('/', (req, res) => {
    return res.sendFile('index.html')
})
 
server.listen(3000, () => console.log("server running"));
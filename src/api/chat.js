import { io } from "socket.io-client";


const chat = () => {
    console.log(process.env.REACT_APP_SOCKET_SERVER)
    const socket = io(process.env.REACT_APP_SOCKET_SERVER);

    socket.on('connection', () => {
            console.log("Successfully Connected");
    }).on('connect_error', (err) => {
        console.log(err);
    })

    socket.on('message', () => {

        })
}


export default chat;
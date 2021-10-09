import React, { useState,useEffect } from 'react';
import { io } from "socket.io-client"; 
import Messages from './Messages.jsx';
import NewMessage from './NewMessage.jsx';
import './Chat.css'; 

//const URL = 'https://git.heroku.com/tranquil-fortress-48513.git';

function Chat() {
    const [username, setUsername] = useState("");
    const [socket, setSocket] = useState();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const PORT = 3334;

		setUsername(() => window.prompt('Please give us your username'));
		setSocket(io('ws://localhost:'+PORT));
        return () => {
            if(socket) socket.disconnect();
            //setMessages([ 'No connection :(' ]);
        }
	}, [])

    useEffect(() => {
        if(socket){
            socket.on("connect", () => {
                const msgObj = {
                    type: "NEW_USER",
                    payload: { message: "A new User appeared", username}
                } 
                socket.emit("newUser",  msgObj);
            });
        
            socket.on("message", (data) => {
                
                const { type, payload } = data;
                const message = {}
                
                switch(type) {
                  case "NEW_USER":
                    message.text = 'A wild ' + payload.username + ' appeared';
                    break;
                  case "NEW_MESSAGE":
                    message.text = `${payload.username}: ${payload.message}`;
                    break;
                  default: 
                    break;
                }
                showMessageReceived(message)
            });
        }
        
    }, [socket])
    

    const showMessageSent = message => showNewMessage(message, 'sending'); 
	const showMessageReceived = message => showNewMessage(message, 'receiving');

    //! nachfragen: warum geht es bei setMessages([...messages, {message: message.text, className}]) schief??
	const showNewMessage = (message, className) => setMessages((messages) => [...messages, {message: message.text, className}]);


    return (
        <div className="main">
            <h2>Chat</h2>
            <Messages messages={messages} />
            <NewMessage 
                username={username} 
                socket={socket}
                showMessageSent={showMessageSent}
                showMessageReceived={showMessageReceived} />
        </div>
    )
}

export default Chat

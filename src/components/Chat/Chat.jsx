import React, { useState,useEffect } from 'react';
import { io } from 'socket.io-client'; 
import ChatDetails from './ChatDetails.jsx';
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

		setUsername(() => /*window.prompt('Please give us your username')*/ 'Michele');
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
                console.log(payload)
                const msgObj = payload
                
                switch(type) {
                  case "NEW_USER":
                    msgObj.text = 'A wild ' + payload.username + ' appeared';
                    break;
                  case "NEW_MESSAGE":
                    msgObj.text = `${payload.username}: ${payload.text}`;
                    break;
                  default: 
                    break;
                }
                showMessageReceived(msgObj)
            });
        }
        
    }, [socket])
    

    const showMessageSent = message => showNewMessage(message, 'sending'); 
	const showMessageReceived = message => showNewMessage(message, 'receiving');

    //! nachfragen: warum geht es bei setMessages([...messages, {message: message.text, className}]) schief??
	const showNewMessage = (message, className) => setMessages((messages) => [...messages, {...message, className}]);


    return (
        <div className="chatContainer">
            <ChatDetails username={username}/>
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

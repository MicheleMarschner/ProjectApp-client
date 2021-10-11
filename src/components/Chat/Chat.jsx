import React, { useState, useEffect, useContext } from 'react';
import { ChatContext } from '../../context/ChatContext.js';
import ChatDetails from './ChatDetails.jsx';
import Messages from './Messages.jsx';
import NewMessage from './NewMessage.jsx';
import './Chat.css'; 

import { initialUser } from '../../utils/mockData.js';

function Chat() {
    const { socket } = useContext(ChatContext);
    const [user, setUser] = useState(initialUser);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if(socket){
            socket.on("connect", () => {
                const msgObj = { payload: { username: user.username }} 
                socket.emit("newUser",  msgObj);
            });
        
            socket.on("message", (data) => {
                const { event, payload } = data;
                const msgObj = payload
                
                if (event === "NEW_CHAT_MESSAGE") {
                    msgObj.text = `${payload.username}: ${payload.text}`;
                    return showMessageReceived(msgObj)
                }
                showMessageInfo(msgObj)
            });
        }
        //else initSocket()?  
    }, [socket])
    

    const showMessageSent = message => showNewMessage(message, 'sending'); 
	const showMessageReceived = message => showNewMessage(message, 'receiving');
    const showMessageInfo = message => showNewMessage(message, 'generalInfo');

    //! nachfragen: warum geht es bei setMessages([...messages, {message: message.text, className}]) schief??
	const showNewMessage = (message, className) => setMessages((messages) => [...messages, {...message, className}]);


    return (
        <div className="chatContainer">
            <ChatDetails />
            <Messages messages={messages} />
            <NewMessage 
                username={user.username} 
                socket={socket}
                showMessageSent={showMessageSent}
                showMessageReceived={showMessageReceived} />
        </div>
    )
}

export default Chat

import React, { useState, useEffect, useContext } from 'react';
import { ChatContext } from '../../context/ChatContext.js';
import ChatDetails from './ChatDetails.jsx';
import Messages from './Messages.jsx';
import NewMessage from './NewMessage.jsx';
import './Chat.css'; 

function Chat() {
    const chatContext = useContext(ChatContext);
    const { messages, isTyping, sendMessageToServer, sendIsTypingToServer, showMessageSent, user } = chatContext;
    
    return (
        <div className="chatContainer">
            <ChatDetails />
            <Messages messages={messages} isTyping={isTyping} />
            <NewMessage 
                username={user.username} 
                showMessageSent={showMessageSent}
                sendMessageToServer={sendMessageToServer}
                sendIsTypingToServer={sendIsTypingToServer} 
            />
        </div>
    )
}

export default Chat

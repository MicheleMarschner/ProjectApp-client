import React, { useEffect, useRef } from 'react'
import Message from './Message.jsx';

const loading = false;

function Messages ({messages, isTyping}) {

    const messagesBottom = useRef();

    useEffect(() => scrollToBottom(), [messages])

    const scrollToBottom = () => messagesBottom.current.scrollTop = messagesBottom.current.scrollHeight;

    const renderMessages = messages => {
        if (loading) return (<h1>loading...</h1>);
        return messages.map((message,index) => ( <Message key={index} message={message} /> ));
    };

    return (
        <div className="chat" ref={messagesBottom}>
            { messages.length>0 && renderMessages(messages) } 
            
            <div className={`messages receiving ${isTyping? "isTyping" : "isTyping none"}`}>
                <div className={`${isTyping? "avatar hidden" : "avatar"}`}><img src="http://res.cloudinary.com/michele-marschner/image/upload/v1633408359/avatar/ftgkqp804cmycgqn7ecp.jpg" alt="avatar"/></div>
               <div className="messageBox">
                    <div className="message">...</div>
                </div>
            </div>
        </div>
    )
}

export default Messages;

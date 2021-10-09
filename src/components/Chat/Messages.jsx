import React from 'react'
import Message from './Message.jsx';

const loading = false;

function Messages({messages}) {

    const renderMessages = messages => {
        if (loading) return (<h1>loading...</h1>);
        return messages.map((message,index) => ( <Message key={index} message={message.message} className={message.className} /> ));
    };

    return (
        <div className="chat">
            { messages.length>0 && renderMessages(messages) } 
        </div>
    )
}

export default Messages

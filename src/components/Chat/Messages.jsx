import React, { useEffect, useRef } from 'react'
import Message from './Message.jsx';

const loading = false;

function Messages({setIsScrolling, isScrolling, messages}) {

    const messagesBottom = useRef(null);

    useEffect(() => {
        if (isScrolling) {
            scrollToBottom();
        }
	}, [isScrolling])


    const scrollToBottom = () => {
        messagesBottom.current.scrollTop = messagesBottom.current.scrollHeight;
        setIsScrolling(false)
	}; 

    const renderMessages = messages => {
        if (loading) return (<h1>loading...</h1>);
        return messages.map((message,index) => ( <Message key={index} message={message} /> ));
    };

    return (
        <div className="chat" ref={messagesBottom}>
            { messages.length>0 && renderMessages(messages) } 
        </div>
    )
}

export default Messages

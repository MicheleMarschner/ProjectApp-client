import React from 'react'

function Message({message, className}) {

		//! wohin?? --> messages.scrollTop = messages.scrollHeight;

    return (
        <div className={`messages ${className}`}>
            <div className="message">{message}</div>
        </div>
    )
}

export default Message

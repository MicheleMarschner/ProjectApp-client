import React from 'react';


function Message({ message: {text, className, time}}) {

		//! wohin?? --> messages.scrollTop = messages.scrollHeight;
    const formatTimeStamp = time => {
        return new Date(time).toLocaleDateString('en-GB', {
            month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit"
        })
    }

    return (
        <div className={`messages ${className}`}>
            <div className="avatar"><img src="http://res.cloudinary.com/michele-marschner/image/upload/v1633408359/avatar/ftgkqp804cmycgqn7ecp.jpg"/></div>
            <div className="messageBox">
                <div className="message">{text}</div>
                <div className="timestamp">{formatTimeStamp(time)}</div>
            </div>
        </div>
    )
}

export default Message

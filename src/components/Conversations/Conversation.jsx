import React from 'react'

const formatTimeStamp = time => {
    return new Date(time).toLocaleDateString('en-GB', {
        month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit"
    })
}


function Conversation({ conversation }) {
    return (
        <div className="conversation flex_row">
            <div className="avatar">
                <img src={conversation.url} alt="avatar"/>
                <span className="dot"></span>
            </div>
            <div className="conversationBox flex_column">
                <div className="username">{conversation.username}</div>
                <div className="timestamp">{formatTimeStamp(conversation.lastLogin)}</div>
            </div>
           
        </div>
    )
}

export default Conversation

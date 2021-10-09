import React, { useState } from 'react'
import Conversation from './Conversation.jsx';
import './Conversations.css'

const loading = false;

function ConversationList() {

    const [ conversations, setConversations ] = useState([]);

    const renderConversations = conversations => {
        if (loading) return (<h1>loading...</h1>);
        return conversations.map((conversation,index) => ( <Conversation key={index} conversation={conversation} /> ));
    };

    return (
        <div className="conversationContainer" style={{ width: "40%"}}>
            { conversations.length>0 && renderConversations(conversations) } 
        </div>
    )
}

export default ConversationList

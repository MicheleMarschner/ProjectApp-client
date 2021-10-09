import React, { useEffect, useState } from 'react'
import Conversation from './Conversation.jsx';
import './Conversations.css';

import {initialConversations} from '../../utils/mockData.js'
const loading = false;

function ConversationList() {

    const [ conversations, setConversations ] = useState([]);

    useEffect(() => {
       setConversations(initialConversations)
    }, [])

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

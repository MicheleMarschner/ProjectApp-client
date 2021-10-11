import React from 'react';
import { useParams } from 'react-router-dom';
import Chat from '../components/Chat/Chat.jsx';
import ConversationList from '../components/Conversations/ConversationList.jsx';

function ChatPage() {
    const { id } = useParams();
    
    return (
        <div className="content flex_row">
            <ConversationList />
            <Chat />     
        </div>
    )
}

export default ChatPage

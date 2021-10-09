import React from 'react'
import Chat from '../components/Chat/Chat.jsx';
import ConversationList from '../components/Conversations/ConversationList.jsx';

function ChatPage() {
    return (
        <div className="content flex_row">
            <ConversationList />
            <Chat />     
        </div>
    )
}

export default ChatPage

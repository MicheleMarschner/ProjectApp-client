import React from 'react'
import Chat from '../components/Chat/Chat.jsx';
import ConversationList from '../components/Conversations/ConversationList.jsx';

import { initialUser } from '../utils/mockData.js';

function ChatPage() {
    return (
        <div className="content flex_row">
            <ConversationList />
            <Chat user={initialUser._id}/>     
        </div>
    )
}

export default ChatPage

import React from 'react';
import { useParams } from 'react-router-dom';
import { ChatProvider } from '../context/ChatContext.js'
import Chat from '../components/Chat/Chat.jsx';
import ConversationList from '../components/Conversations/ConversationList.jsx';


function ChatPage() {
    const { id } = useParams();
    
    return (
        <ChatProvider>
            <div className="content flex_row">
                <ConversationList />
                <Chat />     
            </div>
        </ChatProvider>
        
    )
}

export default ChatPage

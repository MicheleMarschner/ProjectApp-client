import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext.js';
import { useParams } from 'react-router-dom';
import ConversationList from '../components/Conversations/ConversationList.jsx';
import ChatDetails from '../components/Chat/ChatDetails.jsx';
import Messages from '../components/Chat/Messages.jsx';
import NewMessage from '../components/Chat/NewMessage.jsx';
import '../components/Chat/Chat.css'; 



function ChatPage() {
    const chatContext = useContext(ChatContext);
    const { messages, isTyping, sendMessageToServer, sendIsTypingToServer, showMessageSent, user } = chatContext;
    const { id } = useParams();

    return (
        
            <div className="content flex_row">
                <ConversationList />
                <div className="chatContainer">
                    <ChatDetails />
                    <Messages messages={messages} isTyping={isTyping} />
                    <NewMessage 
                        username={user.username} 
                        showMessageSent={showMessageSent}
                        sendMessageToServer={sendMessageToServer}
                        sendIsTypingToServer={sendIsTypingToServer} 
                    />
                </div>   
            </div>
      
        
    )
}

export default ChatPage

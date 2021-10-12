import React, { createContext, useState, useEffect } from 'react';
import { io } from 'socket.io-client'; 
import { initialUser } from '../utils/mockData.js';

const ChatContext = createContext();

export { ChatContext }

//-----------------------------------------------


const ChatProvider = ({ children }) => {
    
    const [socket, setSocket] = useState();
    const [user, setUser] = useState(initialUser);
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false) 

    useEffect(() => {
        const PORT = 3334;
        const URL = 'ws://localhost:' + PORT
        //const URL = 'https://git.heroku.com/tranquil-fortress-48513.git';
        const socketInstance = io(URL)
        setSocket(socketInstance);  
        return () => {
            socketInstance.disconnect();
            //setMessages([ 'No connection :(' ]);
        }
      }, [])


      useEffect(() => {
        if(socket){
            socket.on("connect", () => {
                const msgObj = { payload: { username: user.username }} 
                socket.emit("newUser",  msgObj);
            });

            socket.on("isTyping", (data) => {
                console.log("is Typing")
                const msgObj = data.payload;
                showIsTyping(msgObj);
            });
        
            socket.on("message", (data) => {
                const { event, payload } = data;
                const msgObj = payload;
                
                if (event === "NEW_CHAT_MESSAGE") {
                    msgObj.text = `${payload.username}: ${payload.text}`;
                    return showMessageReceived(msgObj)
                }
                showMessageInfo(msgObj)
            });
        }
        //else initSocket()?  
    }, [socket, /*roomId*/])
    

    const showMessageSent = message => showNewMessage(message, 'sending');
	const showMessageReceived = message => showNewMessage(message, 'receiving');
    const showMessageInfo = message => showNewMessage(message, 'generalInfo');
    const showIsTyping = message => setIsTyping(message.text);  // möglich: nur setzen wenn: if (isTyping !== message.text) setIsTyping(message.text)

    //! nachfragen: warum geht es bei setMessages([...messages, {message: message.text, className}]) schief??
	const showNewMessage = (message, className) => setMessages((messages) => [...messages, {...message, className}]);

    const sendIsTypingToServer = (bool) => {
        const msgObj = { payload: { username: user.username, text: bool } }
        socket.emit("isTyping",  msgObj);
    }

    const sendMessageToServer = message => {
		if (!socket) {
		  showMessageReceived('No WebSocket connection :(');
		  return;
		}
		
		const msgObj = { payload: { text: message.text, username: user.username } }
		socket.emit("newMessage",  msgObj);
	}


    return (
        <ChatContext.Provider
            value={{
                messages,
                isTyping,
                sendMessageToServer,
                sendIsTypingToServer,
                showMessageSent,
                user   
            }}
        >
            {children}
        </ChatContext.Provider>
    );
}

export { ChatProvider };
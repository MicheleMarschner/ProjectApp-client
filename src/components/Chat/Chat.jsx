import React, { useState,useEffect } from 'react';
import { io } from 'socket.io-client'; 
import ChatDetails from './ChatDetails.jsx';
import Messages from './Messages.jsx';
import NewMessage from './NewMessage.jsx';
import './Chat.css'; 

//const URL = 'https://git.heroku.com/tranquil-fortress-48513.git';


function Chat({user}) {
    console.log("component")
    const [username, setUsername] = useState("");
    const [socket, setSocket] = useState();
    const [messages, setMessages] = useState([]);
    /*const [isScrolling, setIsScrolling] = useState(false);*/
    

    useEffect(() => {
        console.log("socket initialization")
        const PORT = 3334;

		setUsername(() => /*window.prompt('Please give us your username')*/ 'Michele');
        const socketInstance = io('ws://localhost:'+PORT)
		setSocket(socketInstance);
        return () => {
            socketInstance.disconnect();
            //setMessages([ 'No connection :(' ]);
        }
	}, [])

    useEffect(() => {
        if(socket){
            socket.on("connect", () => {
                const msgObj = { payload: { username }} 
                socket.emit("newUser",  msgObj);
            });
        
            socket.on("message", (data) => {
                console.log(data.payload)
                const { event, payload } = data;
                const msgObj = payload
                
                if (event === "NEW_CHAT_MESSAGE") {
                    msgObj.text = `${payload.username}: ${payload.text}`;
                    return showMessageReceived(msgObj)
                }
                showMessageInfo(msgObj)
            });
        }
        
    }, [socket])
    

    const showMessageSent = message => showNewMessage(message, 'sending'); 
	const showMessageReceived = message => showNewMessage(message, 'receiving');
    const showMessageInfo = message => showNewMessage(message, 'generalInfo');

    //! nachfragen: warum geht es bei setMessages([...messages, {message: message.text, className}]) schief??
	const showNewMessage = (message, className) => {
        setMessages((messages) => [...messages, {...message, className}])
        /*setIsScrolling(true);*/
    };


    return (
        <div className="chatContainer">
            <ChatDetails username={username}/>
            <Messages messages={messages} /*isScrolling={isScrolling} setIsScrolling={setIsScrolling}*/ />
            <NewMessage 
                username={username} 
                socket={socket}
                showMessageSent={showMessageSent}
                showMessageReceived={showMessageReceived} />
        </div>
    )
}

export default Chat

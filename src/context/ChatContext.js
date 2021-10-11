import React, { createContext, useState, useEffect } from 'react';
import { io } from 'socket.io-client'; 

const ChatContext = createContext();

export { ChatContext }

//-----------------------------------------------


const ChatProvider = ({ children }) => {
    const [ socket, setSocket ] = useState(); 

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

   
    return (
        <ChatContext.Provider
            value={{
                socket       
            }}
        >
            {children}
        </ChatContext.Provider>
    );
}

export { ChatProvider };
import React , { useState,useRef } from 'react'

function NewMessage({ socket, username, showMessageReceived, showMessageSent }) {

    const [newMessage, setNewMessage] = useState({});
    const [inputError, setInputError] = useState({ className: '' });
    const chatInputForm = useRef();

    const onChange = e => {
		setNewMessage({ [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();
		if (!newMessage.text) {
            setInputError({ className: 'errorInput' });
            return;
          } else {
            setInputError({ className: '' });
          }
        const time = new Date();
		showMessageSent({...newMessage, time});
		sendMessageToServer({...newMessage, time});
		setNewMessage({});
		chatInputForm.current.reset();
    }

    const sendMessageToServer = message => {
		if (!socket) {
		  showMessageReceived('No WebSocket connection :(');
		  return;
		}
		
		const msgObj = {
		  type: "NEW_MESSAGE",
		  payload: { text: message.text, username }
		}
		socket.emit("message",  msgObj);
	  }
    
    return (
        <form 
            ref={chatInputForm}
            id="messageForm"
            onSubmit={onSubmit}
            onKeyDown={e => {
            if (e.key === 'Enter') {
                onSubmit(e);
            }
        }} >
            <input 
                id="messageBox" 
                className={`${inputError.className}`}
                type="text"
                name="text"
                value={newMessage.text || ''}
                placeholder="Type your message here"
                onChange={onChange} />
            <button 
                id="send" 
                title="Send"
            >➤</button>
        </form>
    )
}

export default NewMessage

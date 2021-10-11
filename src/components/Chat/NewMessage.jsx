import React , { useState,useRef } from 'react'

function NewMessage({ socketRef, username, showMessageReceived, showMessageSent }) {

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
		if (!socketRef.current) {
		  showMessageReceived('No WebSocket connection :(');
		  return;
		}
		
		const msgObj = {
		  payload: { text: message.text, username }
		}
		socketRef.current.emit("newMessage",  msgObj);
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

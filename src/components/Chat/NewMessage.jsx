import React , { useState,useRef } from 'react'

function NewMessage({ socket, username, showMessageReceived, showMessageSent }) {

    const [newMessage, setNewMessage] = useState({});
    const chatInputForm = useRef();

    const onChange = e => {
		setNewMessage({ [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();
		if (!newMessage.text) {
			return window.alert(
				'Please fill out all fields before publishing your message'
			);
		}
		showMessageSent(newMessage);
		sendMessageToServer(newMessage);
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
		  payload: { message: message.text, username }
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
                type="text"
                id="messageBox" 
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

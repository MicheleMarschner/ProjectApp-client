import React , { useState,useRef } from 'react'

function NewMessage({ sendMessageToServer, showMessageSent, sendIsTypingToServer }) {

    const [newMessage, setNewMessage] = useState({});
    const [isTyping, setIsTyping] = useState(false);
    const [inputError, setInputError] = useState({ className: '' });
    const chatInputForm = useRef();
    let timeout = useRef();

    const onChange = e => {
		  setNewMessage({ [e.target.name]: e.target.value });
    };

    const onKeyUp = () => {
      
      const throttleTime = 1000;

      if (isTyping === false) {
        setIsTyping(true);
        sendIsTypingToServer(true);
      }
      else {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(timeoutFunction, throttleTime);
    }

    const timeoutFunction = () => {
      setIsTyping(false);
      sendIsTypingToServer(false);
    }

    const onSubmit = e => {
      e.preventDefault();
      !newMessage.text ? setInputError({ className: 'errorInput' }) : setInputError({ className: '' });
      const time = new Date();
      showMessageSent({...newMessage, time});
      sendMessageToServer({...newMessage, time});
      setNewMessage({});
      chatInputForm.current.reset();
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
                onChange={onChange}
                onKeyUp={onKeyUp} />
            <button 
                id="send" 
                title="Send"
            >➤</button>
        </form>
    )
}

export default NewMessage



	

	useEffect(() => {
		// oder hier die socket von oben initialisieren? ist die connection? Ändert sich die Socket im Lebenszyklus? Ausloggen/Einloggen?
	}, [socket])


	

	

	const showMessageSent = message => showNewMessage(message, 'sending'); 
	const showMessageReceived = message => showNewMessage(message, 'receiving');

	const showNewMessage = (message, className) => {
		setMessages([ ...messages, {message, className}]);
		// Create a text node element for the message
		const textNode = document.createElement('div');
		textNode.innerHTML = message;
		textNode.className = 'message';
		
		// Wrap the text node in a message element
		const messageNode = document.createElement('div');
		messageNode.className = 'messages ' + className;
		messageNode.appendChild(textNode);
		
		// Append the messageNode to the messages container element
		messages.appendChild(messageNode);
		messages.scrollTop = messages.scrollHeight;
	}
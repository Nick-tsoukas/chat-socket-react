import React, { useEffect, useState } from 'react';
import socket from '../socket/socket';


const Chat = () => {
    const [message, setMessage ] = useState('');
    const [messages, setMessages ] = useState(['start message', 'second message', 'third message']);

    useEffect(() => {
        socket.on('connect', (data) => {
            console.log('You are connected to the web socket right now ')
        })
    })

    const logger = (event) => {
        event.preventDefault();
        socket.emit('message', {data: message})
        setMessages([...messages, message]);
        setMessage('')
    }
    
    return(
        <div className="chat_box">
            <div className="chat_header">
                <h2>Chats</h2>
            </div>
            <div className="chat_messages">
                {
                    messages.map((msg) => {
                        return(
                            <p key={msg} > {msg}</p>
                        )
                    })
                }
            </div>
            <div className="chat_input">
            <form onSubmit={logger}>
                <input value={message} onChange={(e) => setMessage(e.target.value) } type="text"  />
                <input type="submit" value="Submit" />
            </form>
            </div>
        </div>
    )
}

export default Chat;
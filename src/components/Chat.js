import React, { useEffect } from 'react';
import socket from '../socket/socket';


const Chat = () => {

    useEffect(() => {
        socket.on('connect', (data) => {
            console.log('You are connected to the web socket right now ')
        })
    })

    const logger = (event) => {
        event.preventDefault();
        socket.emit('message', {data: 'This is a message from the client'})
    }
    
    return(
        <div className="chat_box">
            <div className="chat_header">
                <h2>Chats</h2>
            </div>
            <div className="chat_messages">
                <p>This is where the chats are</p>
                <p>This is where the chats are</p>
                <p>This is where the chats are</p>
                <p>This is where the chats are</p>
                <p>This is where the chats are</p>
            </div>
            <div className="chat_input">
            <form onSubmit={logger}>
                <input type="text" name="name" />
                <input type="submit" value="Submit" />
            </form>
            </div>
        </div>
    )
}

export default Chat;
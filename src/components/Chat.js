import React from 'react';

const Chat = () => {
    const logger = (event) => {
        event.preventDefault();
        console.log("you just clicked the button hello how are you doing today")
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
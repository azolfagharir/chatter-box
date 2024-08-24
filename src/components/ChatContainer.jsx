import React, { useState } from 'react';
import ChatBox from './ChatBox'; // Import the ChatBox component

export default function ChatContainer() {
  const [messages, setMessages] = useState([
    /*{ sender: "User", content: "Hello!", time: "12:30", status: "Delivered", avatar: "user_avatar_url" },
    { sender: "Operator", content: "How can I assist you?", time: "12:45", status: "Seen", avatar: "operator_avatar_url" }*/
  ]);

  const sendMessage = (sender, content, avatar) => {
    if (!content.trim()) return;
    const newMessage = {
      sender,
      content,
      time: new Date().toLocaleTimeString(),
      status: "Delivered",
      avatar,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-container">
      {/* Single ChatBox for both User and Operator */}
      <ChatBox 
        messages={messages} 
        onSendMessage={sendMessage} 
        user={{ name: "User", avatar: "user_avatar_url" }} // Simulate user chat
      />
      <ChatBox 
        messages={messages} 
        onSendMessage={sendMessage} 
        user={{ name: "Operator", avatar: "operator_avatar_url" }} // Simulate operator chat
      />
    </div>
  );
}

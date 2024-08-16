import React, { useState, useEffect } from 'react';

export default function ChatBox({ user, initialMessages }) {
  // Ensure that messages is always initialized as an array
  const [messages, setMessages] = useState(initialMessages || []);

  // Function to handle sending a message
  const sendMessage = (content) => {
    if (!content.trim()) return; // Prevent sending empty messages
    const newMessage = {
      sender: user.name,
      content,
      time: new Date().toLocaleTimeString(),
      status: "Delivered",
      avatar: user.avatar,
    };
    setMessages([...messages, newMessage]);
  };

  // Simulate receiving a message from the other party
  useEffect(() => {
    const receiveMessage = (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    const newMessageFromOperator = {
      sender: "Operator",
      content: "How can I assist you?",
      time: new Date().toLocaleTimeString(),
      status: "Seen",
      avatar: "operator_avatar_url",
    };

    // Simulate the message arriving after 5 seconds
    const timer = setTimeout(() => receiveMessage(newMessageFromOperator), 5000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div>
      <div className="chat-window">
        {messages && messages.length > 0 ? (
          messages.map((msg, index) => (
            <div key={index} className={`chat ${msg.sender === user.name ? 'chat-end' : 'chat-start'}`}>
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt={msg.sender} src={msg.avatar} />
                </div>
              </div>
              <div className="chat-header">
                {msg.sender}
                <time className="text-xs opacity-50">{msg.time}</time>
              </div>
              <div className="chat-bubble">{msg.content}</div>
              <div className="chat-footer opacity-50">{msg.status}</div>
            </div>
          ))
        ) : (
          <p>No messages yet.</p>
        )}
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Type a message..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              sendMessage(e.target.value);
              e.target.value = '';
            }
          }}
        />
      </div>
    </div>
  );
}

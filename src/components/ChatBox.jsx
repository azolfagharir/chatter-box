import React, { useState } from 'react';

export default function ChatBox({ user, messages, onSendMessage }) {
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    onSendMessage(user.name, input, user.avatar);
    setInput(''); // Clear the input after sending
  };

  return (
   <div className="chat-window">
  {  /*  {messages.map((msg, index) => (
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
      ))}
      <div className="input-box">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
      </div>*/}
    </div>
  );
}

import React from 'react';
import ChatBox from '../components/ChatBox';
export default function Dashboard() {
  const operator = {
    name: "Operator",
    avatar: "operator_avatar_url",
  };

  const initialMessages = [
    { sender: "User", content: "Hello!", time: "12:30", status: "Delivered", avatar: "user_avatar_url" },
  ];

  return (
    <div className="dashboard">
      <h1>Operator Dashboard</h1>
      <ChatBox user={operator} initialMessages={initialMessages} />
    </div>
  );
}

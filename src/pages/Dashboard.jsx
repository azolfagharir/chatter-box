import React from "react";
import ChatContainer from "../components/ChatContainer";
export default function Dashboard() {
  const operator = {
    name: "Operator",
    avatar: "operator_avatar_url",
  };
{/*
  const initialMessages = [
    {
      sender: "User",
      content: "Hello!",
      time: "12:30",
      status: "Delivered",
      avatar: "user_avatar_url",
    },
  ];*/}

  return (
    <div className="dashboard">
      <h1>Operator Dashboard</h1>
      <div className="App">
        <ChatContainer />
      </div>{" "}
    </div>
  );
}

import { useState } from "react";
import React from 'react';
import Select from 'react-select';
import {allServices} from "../../components/MyServices/AllSrc";
export default function NewSection(){
  const sectionMyServices = [
    {quantity: "7", src: 'support' }, // Changed value to be unique and lowercase for better rendering
    {quantity: "7", src: 'sell' }, // Changed value to be unique and lowercase for better rendering
    {quantity: "7", src: 'financial' },
  ];

      const renderConditionally = () => {
        switch (activeComponentSrc) {
          case "Closed":
            return <Closed />;
          case "Progress":
            return <Progress />;
          case "Opent":
            return <Opent />;
          case "Answeared":
            return <Answeared />;
          default:
            return <Closed />;
        }
      };  const [activeComponentSrc, setActiveComponentSrc] = useState("AllSrc");
      const [NewTicketShown, setNewTicketShown] = useState(false);
      const [selectedOption, setSelectedOption] = useState(null);

    return(
    <>
             <div className="bg-hello2 w-[1100px] h-[600px] absolute top-24 right-96 rounded-2xl flex items-center justify-between p-4">

   
      <h1 className="text-thecolor text-2xl top-4 absolute mx-260 font-bold	">
        ثبت تیکت جدید
      </h1>
      {sectionMyServices.map((item, index) => (
        <div
          key={index}
          className={`relative text-thecolor flex items-center m-24 mb-96 rounded-2xl transition-transform transform hover:scale-105 ${
            activeComponentSrc === item.src
              ? "text-thecolor underline decoration-blue-500"
              : "hover:text-thecolor2"
          } top-0`}
          onClick={() => setActiveComponentSrc(item.src)}
        >
          <img
            className={
              activeComponentSrc === item.src
                ? "bg-thecolor underline decoration-blue-500"
                : "hover:bg-thecolor2"
            }
            src={`public/${item.src}.png`}
            alt={item.name}
          />
          <h4>{item.name}</h4>
          <span>{item.quantity}</span>
        </div>
      ))}
      <h4 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-thecolor">مشکل مربوط به کدام سرویس است ؟
      </h4>
      
        

<div className="relative w-full h-screen flex flex-col items-center justify-center space-y-3">
<div className="App text-black-900 bg-black-900">
  <Select
    Value={selectedOption}
    onChange={setSelectedOption}
    options={allServices} // Use the imported allServices array
  />
</div>

        </div>
        </div>
    </>)
}

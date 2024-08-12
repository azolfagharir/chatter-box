import { useState } from "react";

export default function NewSection(){
    const sectionMyServices = [
        { name: "فنی", quantity: "7" },
        { name: "فروش", quantity: "7" },
        { name: "مالی", quantity: "7" },
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
    
    return(
    <>
             <div className="bg-hello2 w-[1100px] h-[600px] absolute top-24 right-96 rounded-2xl flex items-center justify-between p-4">

      <button className="text-white top-0 absolute bg-NewTicket hover:bg-NewTicket2">
      </button>
      <h1 className="text-thecolor text-2xl top-4 absolute mx-260 font-bold	">
        ثبت تیکت جدید
      </h1>
      {sectionMyServices.map((item, index) => (
        <div
          key={index}
          className={`relative text-thecolor flex items-center m-24 mb-96 rounded-2xl transition-transform transform hover:scale-105 ${
            activeComponentSrc === item.componentMySrc
              ? "text-thecolor underline decoration-blue-500"
              : "hover:text-thecolor2"
          } top-0`}
          onClick={() => setActiveComponentSrc(item.componentMySrc)}
        >
          <img
            className={
              activeComponentSrc === item.componentMySrc
                ? "bg-thecolor underline decoration-blue-500"
                : "hover:bg-thecolor2"
            }
            src={`public/${item.componentMySrc}.png`}
            alt={item.name}
          />
          <h4>{item.name}</h4>
          <span>{item.quantity}</span>
        </div>
      ))}
        </div>
    </>)
}
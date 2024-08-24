import { Link } from "react-router-dom";
import Closed from "../Tickets/Closed";
import Progress from "../Tickets/Progress";
import Opent from "../Tickets/Opent";
import Answeared from "../Tickets/Answeared";
import New from "/src/pages/New.jsx";
import WhitSection from "../WhitSection";
import PathConstants from "D:/chatter-box/src/routes/pathConstants.jsx";
import { useState } from "react";
export default function Tickets() {
  const sectionMyServices = [
    { name: "بسته شده", quantity: "7", componentMySrc: "Closed" },
    { name: "در حال بررسی", quantity: "7", componentMySrc: "Progress" },
    { name: "پاسخ داده شده", quantity: "7", componentMySrc: "Answeared" },
    { name: "تیکت های باز", quantity: "7", componentMySrc: "Opent" },
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
  };
  const [activeComponentSrc, setActiveComponentSrc] = useState("AllSrc");
  const [NewTicketShown, setNewTicketShown] = useState(false);

  return (
  <>
    <WhitSection />      {NewTicketShown && <NewTicket />}

      <button className="text-white top-0 absolute bg-NewTicket hover:bg-NewTicket2">
        <Link to={PathConstants.New}>تیکت جدید</Link>
      </button>
      <h1 className="text-thecolor text-2xl top-4 absolute mx-260 font-bold	">
       تیکت های من
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
      <div>
        <main className="w-full p-4 ">{renderConditionally()}</main>
      </div>
</>
  );
}

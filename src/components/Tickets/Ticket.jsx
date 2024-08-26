 export  const sectionMyServices = [
    { value: "بسته شده", label: "فنی - hello world.com", name: "بسته شده", quantity: "7", componentMySrc: "Closed" },
    { value: "در حال بررسی", label: "فنی - hello world.com", name: "در حال بررسی", quantity: "7", componentMySrc: "Progress" },
    {value: "پاسخ داده شده", label: "فنی - hello world.com", name: "پاسخ داده شده", quantity: "7", componentMySrc: "Answeared" },
    { value: "تیکت های باز", label: "فنی - hello world.com", name: "تیکت های باز", quantity: "7", componentMySrc: "Opent" },
  ];
  import { Link } from "react-router-dom";
import Closed from "../Tickets/Closed";
import Progress from "../Tickets/Progress";
import Opent from "../Tickets/Opent";
import Answeared from "../Tickets/Answeared";
import New from "/src/pages/New.jsx";
import WhitSection from "../WhitSection";
import PathConstants from "D:/chatter-box/src/routes/pathConstants.jsx";import Select from "react-select";

import { useState } from "react";
export default function Tickets() {
 
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
  const [selectedOpti, setSelectedOpti] = useState(null);

  return (
  <>
    <WhitSection />      {NewTicketShown && <NewTicket />}

      <button className="text-white top-0 absolute bg-NewTicket hover:bg-NewTicket2">
        <Link to={PathConstants.New}>تیکت جدید</Link>
      </button>
      <h1 className="text-thecolor  top-28 text-center text-lg text-center right-64 lg:right-101 xl:right-104 2xl:right-112 md:right-80 xl:right-101 2xl:right-104 absolute font-bold	" >
       تیکت های من
      </h1>
      {sectionMyServices.map((item, index) => (
        <div
          key={index}
          className={`hidden md:elative text-thecolor flex items-center m-24 mb-96 rounded-2xl transition-transform transform hover:scale-105 ${
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
                <div className="absolute top-84 left-260 w-52">
                <Select
                      value={selectedOpti}
                      onChange={setSelectedOpti}
                      options={sectionMyServices}
                />
              </div>
      <div>
        <main className="w-full p-4 ">{renderConditionally()}</main>
      </div>
</>
  );
}

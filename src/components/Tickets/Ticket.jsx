import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select"; // Make sure react-select is correctly imported
import Closed from "../Tickets/Closed";
import Progress from "../Tickets/Progress";
import Opent from "../Tickets/Opent";
import Answeared from "../Tickets/Answeared";
import New from "/src/pages/New.jsx";
import WhitSection from "../WhitSection";
import PathConstants from "D:/chatter-box/src/routes/pathConstants.jsx";
import BeautifueSideBar from "../BeautifueSideBar";
export const sectionMyServices = [
  {
    value: "بسته شده",
    label: "فنی - hello world.com",
    name: "بسته شده",
    quantity: "7",
    componentMySrc: "Closed",
  },
  {
    value: "در حال بررسی",
    label: "فنی - hello world.com",
    name: "در حال بررسی",
    quantity: "7",
    componentMySrc: "Progress",
  },
  {
    value: "پاسخ داده شده",
    label: "فنی - hello world.com",
    name: "پاسخ داده شده",
    quantity: "7",
    componentMySrc: "Answeared",
  },
  {
    value: "تیکت های باز",
    label: "فنی - hello world.com",
    name: "تیکت های باز",
    quantity: "7",
    componentMySrc: "Opent",
  },
];

export default function Tickets() {
  const [activeComponentSrc, setActiveComponentSrc] = useState("Closed"); // Set default to 'Closed'
  const [NewTicketShown, setNewTicketShown] = useState(false);
  const [selectedOpti, setSelectedOpti] = useState(null);

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
  const [isTicketVisible, setIsTicketVisible] = useState(true);

  return (
    <>
      <WhitSection />
      <Link className="absolute top-16 right-2 z-20 text-admin_apnel" to={PathConstants.Panel}>
      باز گشت -&gt;
      </Link>
      <BeautifueSideBar className="z-0"/>
      {NewTicketShown && <New />}
{/**/}
      <button className="text-white    rounded-tr-xl rounded-bl-xl rounded-br-none  rounded-tl-none top-14 left-2 absolute bg-NewTicket hover:bg-NewTicket2">
        <Link className="text-white z-4" to={PathConstants.New}>
          تیکت جدید
        </Link>
      </button>

      <h1 className="text-thecolor top-36 text-center text-lg right-64 lg:right-101 xl:right-104 2xl:right-112 md:right-80 xl:right-101 2xl:right-104 absolute font-bold">
        تیکت های من
      </h1>

      {sectionMyServices.map((item, index) => (
        <div
          key={index}
          className={` hidden  relative text-thecolor md:flex items-center m-24 mb-96 rounded-2xl transition-transform transform hover:scale-105 ${
            activeComponentSrc === item.componentMySrc
              ? "text-thecolor underline decoration-blue-500"
              : "hover:text-thecolor2"
          }`}
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

      <div className="absolute top-48 left-42 w-52 md:hidden">
        {" "}
        {/* Adjust positioning as necessary */}
        <Select
          value={selectedOpti}
          onChange={(option) => {
            setSelectedOpti(option);
            setActiveComponentSrc(option.componentMySrc);
          }}
          options={sectionMyServices}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.value}
        />
      </div>
      {isTicketVisible && (
        <>
          <img
            className="absolute w top-60"
            src="/public/ok.png"
            alt="Ticket Image"
          />
          <h3 className="absolute top-96 text-lovelyBlue">همه چی آرومه</h3>
        </>
      )}
      <button className="text-white  absolute top-113 left-70 bg-NewTicket  hover:bg-NewTicket2">
        <Link className="text-white" to={PathConstants.New}>
          تیکت جدید
        </Link>
      </button>

      <div>
        <main className="w-full p-4">{renderConditionally()}</main>
      </div>
    </>
  );
}

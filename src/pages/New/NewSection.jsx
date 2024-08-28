import { useState } from "react";
import React from "react";
import Select from "react-select";
import WhitSection from "../../components/WhitSection";
import { allServices } from "../../components/MyServices/AllSrc";
export default function NewSection() {
  const sectionMyServices = [
    { src: "support", name: "پشتیبانی فنی" },
    { src: "sell", name: "فروش" },
    { src: "financial", name: "مالی و اداری" },
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
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <WhitSection />
      <h1 className="text-thecolor top-36 text-center text-lg right-64 lg:right-101 xl:right-104 2xl:right-112 md:right-80 xl:right-101 2xl:right-104 absolute font-bold">
        ثبت تیکت جدید
      </h1>
      <div className="relative mt-8 lg:ml-0 ">
        <div className="flex flex-wrap justify-start space-x-4 md:space-x-32 ">
          {sectionMyServices.map((item, index) => (
            <div className="">
              <div
                key={index}
                className={` md:relative text-thecolor md:flex md:flex-col md:items-center  md:p-4 md:mb-6 md:rounded-2xl md:transition-transform md:transform hover:scale-105 lg:right-36 lg:space-x-8 lg:space-x-0 xl:space-x-32 xl:right-40 ${
                  activeComponentSrc === item.componentMySrc
                    ? "text-thecolor underline decoration-blue-500"
                    : "hover:text-thecolor2"
                }`}
                onClick={() => setActiveComponentSrc(item.src)}
              >
                <div className="w-20 h-20 mb-2 ">
                  <img
                    className={
                      activeComponentSrc === item.src
                        ? "bg-thecolor underline decoration-blue-500"
                        : "hover:bg-thecolor2"
                    }
                    src={`public/${item.src}.png`}
                    alt={item.name}
                  />
                </div>
                <h4 className="text-center">{item.name}</h4>
              </div>
            </div>
          ))}{" "}
        </div>
      </div>
      <h4 className="absolute top-96 left-1/2 lg:left-96  xl:left-100 transform -translate-x-1/2 -translate-y-1/2 text-center text-thecolor 2xl:left-102">
        مشکل مربوط به کدام سرویس است ؟
      </h4>

      <div className="absolute top-97 left-56 w-52 md:left-72 xl:left-125 2xl:left-100">
        <Select
          value={selectedOption}
          onChange={setSelectedOption}
          options={allServices}
        />
      </div>
      <h4 className="absolute top-100 left-1/2 transform xl:left-100 -translate-x-1/2 -translate-y-1/2 text-center text-thecolor lg:left-86 2xl:left-102">
        موضوع تیکت را وارد کنید
      </h4>
    </>
  );
}

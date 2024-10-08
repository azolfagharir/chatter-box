import OtherProducts from "../MyServices/OtherProducts";
import AllSrc from "../MyServices/AllSrc";
import Host from "../MyServices/Host";
import Domain from "../MyServices/Domain";
import IaaS from "../MyServices/IaaS";
import SSL from "./SSL";
import CDN from "../MyServices/CDN";
import WhitSection from "../WhitSection";
import Select from "react-select";
import { useState } from "react";
import BeautifueSideBar from "../BeautifueSideBar";
export default function MyService() {
  const sectionMyServices = [
    { name: "سایر محصولات", quantity: "7", componentMySrc: "OtherProducts" },
    { name: "CDN", quantity: "7", componentMySrc: "CDN" },
    { name: "SSL", quantity: "7", componentMySrc: "SSL" },
    { name: "IaaS", quantity: "7", componentMySrc: "IaaS" },
    { name: "دامنه", quantity: "7", componentMySrc: "Domain" },
    { name: "هاست", quantity: "7", componentMySrc: "Host" },
    { name: "همه سرویس ها", quantity: "7", componentMySrc: "AllSrc" },
  ];
  const renderConditionally = () => {
    const section = getSection();

    switch (activeComponentSrc) {
      case "OtherProducts":
        return <OtherProducts />;
      case "CDN":
        return <CDN section={section} />;
      case "SSL":
        return <SSL section={section} />;
      case "IaaS":
        return <IaaS section={section} />;
      case "Domain":
        return <Domain section={section} />;
      case "Host":
        return <Host section={section} />;
      case "AllSrc":
        return <AllSrc section={section} />;
      default:
        return <AllSrc section={section} />;
    }
  };
  const [activeComponentSrc, setActiveComponentSrc] = useState("AllSrc");
  const [selectedOpti, setSelectedOpti] = useState(null);
  const getSection = () => {
    return sectionMyServices.find(
      (item) => item.componentMySrc === activeComponentSrc
    );
  };
  return (
    <>
      <BeautifueSideBar />
      <WhitSection />{" "}
      <div className="relative md:absolute md:top-32 md:left-4 lg:left-44 2xl:left-60 mt-8 md:top-44  text-sm">
  {/* Change the flex-wrap to nowrap and justify-content as needed */}
  <div className="flex flex-nowrap justify-start space-x-9 font-bold	">
    {sectionMyServices.map((item, index) => (
      <div
        key={index}
        className={`hidden md:relative text-thecolor md:flex md:flex-col md:items-center md:p-4 md:mb-6 md:rounded-2xl md:transition-transform md:transform hover:scale-105 lg:right-32 xl:right-36 lg:text-xs lg:space-x-0 xl:space-x-16 2xl:space-x-20 2xl:right-48 ${
          activeComponentSrc === item.componentMySrc
            ? "text-thecolor underline decoration-blue-500"
            : "hover:text-thecolor2"
        }`}
        onClick={() => setActiveComponentSrc(item.componentMySrc)}
      >
        <h4>{item.name}</h4>
        <span>{item.quantity}</span>
      </div>
    ))}
  </div>
</div>
<div className="absolute top-48 left-42 w-52 md:hidden">
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

      {/* Header Section */}
      <h1 className="absolute top-36 right-64 md:right-80 lg:right-101 xl:right-104 2xl:right-112 text-thecolor text-lg font-bold text-center">
        سرویس های من
      </h1>
      {/* Main Content */}
      <main className="w-full p-4">{renderConditionally()}</main>
    </>
  );
}

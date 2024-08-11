import OtherProducts from "../MyServices/OtherProducts"
import AllSrc from "../MyServices/AllSrc"
import Host from "../MyServices/Host"
import Domain from "../MyServices/Domain"
import IaaS from "../MyServices/IaaS"
import SSL from "./SSL"
import CDN from "../MyServices/CDN"
import { useState } from "react"
export default function MyService() {
  const sectionMyServices = [
    { name: "همه سرویس ها", quantity: "7", componentMySrc:"AllSrc" },
    { name: "هاست", quantity: "7", componentMySrc:"Host" },
    { name: "دامنه", quantity: "7", componentMySrc:"Domain" },
    { name: "IaaS", quantity: "7", componentMySrc:"IaaS" },
    { name: "SSL", quantity: "7", componentMySrc:"SSL" },
    { name: "CDN", quantity: "7", componentMySrc:"CDN" },
    { name: "سایر محصولات", quantity: "7", componentMySrc:"OtherProducts" },
  ];
  const renderConditionally = () => {
    switch (activeComponentSrc) {
      case 'OtherProducts':
        return <OtherProducts />;
        case 'CDN':
          return <CDN />;
          case 'SSL':
          return <SSL />;
          case 'IaaS':
          return <IaaS />;
          case 'Domain':
          return <Domain />;
          case 'Host':
          return <Host />;
          case 'AllSrc':
          return <AllSrc />;
      default:
        return <AllSrc />; 
    }
  };
  const [activeComponentSrc, setActiveComponentSrc] = useState('AllSrc');

  return (
    <div className="bg-hello2 w-[1100px] h-[600px] absolute top-24 right-96 rounded-2xl flex items-center justify-between p-4">
      <h1 className="text-thecolor text-2xl top-4 absolute mx-260 font-bold	">سرویس های من</h1>
      {sectionMyServices.map((item, index) => (
        <div
        key={index}
        className={`relative flex items-center justify-center space-x-3 p-2 mb-96 rounded-2xl transition-transform transform hover:scale-105 ${
          activeComponentSrc === item.componentMySrc
            ? "text-thecolor"
            : "hover:text-thecolor2"
        } top-0`}
        onClick={() => setActiveComponentSrc(item.componentMySrc)}
      >
                  <h4>{item.name}</h4>
          <span>{item.quantity}</span>
        </div>
      ))}
    <main className="w-full p-4">
          {renderConditionally()}
        </main>
    </div>
  );
}

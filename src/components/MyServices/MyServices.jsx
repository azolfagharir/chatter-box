import OtherProducts from "../MyServices/OtherProducts"
import AllSrc from "../MyServices/AllSrc"
import Host from "../MyServices/Host"
import Domain from "../MyServices/Domain"
import IaaS from "../MyServices/IaaS"
import SSL from "./SSL"
import CDN from "../MyServices/CDN"
import WhitSection from "../WhitSection"
import { useState } from "react"
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

  return (<>
  
<WhitSection /> 
     <h1 className="text-thecolor  top-28 text-center text-lg text-center right-64 lg:right-101 xl:right-104 2xl:right-112 md:right-80 xl:right-101 2xl:right-104 absolute font-bold	">سرویس های من</h1>
      {sectionMyServices.map((item, index) => (
        <div
        key={index}
        className={`relative text-thecolor flex items-center justify-between p-12 mb-96 rounded-2xl transition-transform transform hover:scale-105 ${
          activeComponentSrc === item.componentMySrc
            ? "text-thecolor underline decoration-blue-500"
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
  </>

  );
}
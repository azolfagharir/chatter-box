import { useState } from "react";
import PanelHeader from "../components/PanelHeader";
import RightSideBarSections from "../components/RightSideBarSections";
import Dashboard from "../components/Dashboard";
import MyService from "../components/MyServices";
import Domain from "../components/Domain";
import CloudyHost from "../components/CloudyHost";
import CloudyServer from "../components/CloudyServer";
import CloudySpace from "../components/CloudySpace";
import SSL from "../components/Ssl";
import CDN from "../components/CDN.jsx";
import PaaS from "../components/Paas";
import DownloadHost from "..//components/downloadHost.jsx";
import Payment from "..//components/payment.jsx";
import Tickets from "..//components/Ticket.jsx";
import Account from "..//components/Account";
export default function Panel() {
  const [activeComponent, setActiveComponent] = useState('Dashboard');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'MyService':
        return <MyService />;
        case 'CloudyHost':
          return <CloudyHost />;
          case 'Domain':
          return <Domain />;
          case 'CloudyServer':
          return <CloudyServer />;
          case 'CloudySpace':
          return <CloudySpace />;
          case 'SSL':
          return <SSL />;
          case 'CDN':
          return <CDN />;
          case 'PaaS':
          return <PaaS />;
          case 'Payment':
          return <Payment />; 
          case 'Tickets':
          return <Tickets />;
            case 'Account':
              return <Account />;
      // Add more cases for other components
      default:
        return <MyService />; // Default component if no match
    }
  };

  return (
    <>
      <PanelHeader />
      <div className="flex ">
        {/* Sidebar */}
        <div className="absolute right-8 top-36 w-[234px] bg-white rounded-full">
          <div className="bg-theethic rounded-2xl max-h-[534px] overflow-y-auto">
            <RightSideBarSections 
              activeComponent={activeComponent} 
              setActiveComponent={setActiveComponent} 
            />
          </div>
        </div>

        {/* Main Content Area */}
        <main className="w-full p-4">
          {renderComponent()}
        </main>
      </div>
    </>
  );
}

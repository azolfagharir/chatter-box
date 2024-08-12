import { useState } from "react";
import PanelHeader from "../components/PanelHeader";
import RightSideBarSections from "../components/RightSideBarSections";
import MyService from "../components/MyServices/MyServices";
import Domain from "../components/Domain";
import CloudyHost from "../components/CloudyHost";
import CloudyServer from "../components/CloudyServer";
import CloudySpace from "../components/CloudySpace";
import SSL from "../components/Ssl";
import CDN from "../components/CDN.jsx";
import PaaS from "../components/Paas";
import Payment from "..//components/payment.jsx";
import Tickets from "..//components/Tickets/Ticket.jsx";
import Account from "..//components/Account";
export default function Panel(props) {
  const [SidebarShown, setSidebarShown] = useState(false);

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
      <PanelHeader setSidebarShown={setSidebarShown} SidebarShown={SidebarShown} />
      <div className="flex ">
        <div         className={`bg-theethic rounded-2xl max-h-[534px] overflow-y-auto right-10 top-20 lg:absolute ${SidebarShown ? 'sm:absolute ' : 'sm:hidden'}`}
        >
        <RightSideBarSections
              activeComponent={activeComponent}
              setActiveComponent={setActiveComponent}
            />
          </div>

        {/* Main Content Area */}
        <main className="w-full p-4">
          {renderComponent()}
        </main>
      </div>
    </>
  );
}


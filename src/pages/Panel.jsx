import { useState } from "react";
import PanelHeader from "../components/PanelHeader";
import RightSideBarSections from "../components/RightSideBarSections";
import Dashboard from "../components/Dashboard";
import MyService from "../components/MyServices";
export default function Panel() {
  const [activeComponent, setActiveComponent] = useState('Dashboard');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <Dashboard />;
      case 'MyService':
        return <MyService />;
      // Add more cases for other components
      default:
        return <Dashboard />; // Default component if no match
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

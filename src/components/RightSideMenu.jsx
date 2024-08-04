import { useState } from "react";
import RightSideBarSections from "./RightSideBarSections";
export default function RightSideMenu() {
  const [activeComponent, setActiveComponent] = useState('Dashboard');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <Dashboard />;
      case 'MyService':
        return <MyService />;
      case 'AnotherComponent':
        return <AnotherComponent />;
      // Add more cases for other components
      default:
        return <Dashboard />; // Default component if no match
    }
  };
    return (
      <>
            
      </>
    );
  }
  
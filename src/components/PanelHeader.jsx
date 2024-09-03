import { usePrevious } from "@material-tailwind/react";
import { useState } from "react";
export default function PanelHeader({setSidebarShown, SidebarShown}) {
  function toggler() {
    setSidebarShown(!SidebarShown);
  }
return (
  
  <div className=" z-6 bg-PanelHeader w-full fixed top-0 left-0 right-0 flex items-center justify-between px-4">
    <div className="flex items-center">
      <img className="w-8 h-8 mt-4" src="/public/3dots.png" alt="" />
    </div>

    <h2 className="text-PanelHeaderText text-center py-4 mx-auto">سرویس های من</h2>

    <div className="flex items-center">
      <img src="/public/hamburger-menu.png" onClick={toggler} alt="hamburger-menu" className='w-8 h-8 mt-4 cursor-pointer lg:hidden'  />
    </div>
  </div>
);
}
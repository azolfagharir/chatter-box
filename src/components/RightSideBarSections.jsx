const SideBarList = [
  {
    name: "سرویس های من",
    imagename: "/public/MyServices.png",
    component: "MyService",
  },
  {
    name: "داشبورد",
    imagename: "/public/domain.png",
    component: "Dashboard",
  },
  // Add more items as needed
];

export default function RightSideBarSections({ setActiveComponent, activeComponent }) {
  return (
    <div className="flex flex-col space-y-4 rounded-2xl hover:cursor-pointer">
      {SideBarList.map((item, index) => (
        <div
          key={index}
          className={`flex items-center space-x-3 p-2 rounded-2xl ${activeComponent === item.component ? 'bg-lovelygreen text-white' : 'hover:bg-lovelygreen'}`}
          onClick={() => setActiveComponent(item.component)}
        >
          {/* Narrow Image */}
          <img className="w-8 h-8" src="/public/narrow.png" alt="narrow" />
      
          {/* Sidebar Button */}
          <div className="flex items-center text-left px-4 py-2 rounded text-mygray border-none bg-transparent w-full">
            {item.name}
          </div>
      
          {/* Icon/Image Container */}
          <div className="w-6 h-6 ml-auto flex items-center justify-center rounded">
            <img src={item.imagename} alt={item.name} className="w-full h-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

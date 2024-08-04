const SideBarList = [
  {
    name: "سرویس های من",
    imagename: "/public/MyServices.png",
    component: "MyService",
  },
  {
    name:"هاست ابری",
    imagename: "/public/cloudy-server.png",
    component: "cloudy-host",
  }, 
  {
    name:"دامنه",
    imagename: "/public/domain.png",
    component: "domain",
  }, 
  {
    name:"سرور ابری",
    imagename: "/public/cloudy-server.png",
    component: "cloudy-server",
  }, 
  {
    name:"فضای ابری",
    imagename: "/public/cloudy-space.png",
    component: "cloudy-space",
  }, 
  {
    name:"SSL",
    imagename: "/public/SSL.png",
    component: "SSL",
  }, 
  {
    name:"CDN",
    imagename: "/public/CDN.png",
    component: "CDN",
  }, 
  {
    name:"Paas",
    imagename: "/public/PaaS.png",
    component: "PaaS",
  }, 
  {
    name:"هاست دانلود",
    imagename: "/public/download-host.png",
    component: "download-host",
  }, 
  {
    name:"صورت حساب",
    imagename: "/public/payment.png",
    component: "payment",
  },
  {
    name:"تیکت",
    imagename: "/public/ticket.png",
    component: "ticket",
  },
  {
    name:"حساب کاربری",
    imagename: "/public/account.png",
    component: "account",
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

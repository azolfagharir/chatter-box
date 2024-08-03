const SideBarList = [
    {
        name: "سرویس های من",
        imagename: "/public/MyServices.png",
        component: "MyService",
      }, {
        name: "هاست ابری",
        imagename: "/public/domain.png",
        component: "MyService",
      },
];
export default function RightSideBarSections() {
    return (
        <div className="flex flex-col space-y-4">
          {SideBarList.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 hover:bg-lovelygreen p-2 rounded"
            >
              {/* Narrow Image */}
              <img className="w-8 h-8" src="/public/narrow.png" alt="narrow" />
      
              {/* Sidebar Button */}
              <button
                onClick={() => setActiveComponent(item.name)}
                className="flex items-center text-left px-4 py-2 rounded text-mygray border-none bg-transparent w-full"
              >
                {item.name}
              </button>
      
              {/* Icon/Image Container */}
              <div className="w-6 h-6 ml-auto flex items-center justify-center rounded">
                <img
                  src={item.imagename}
                  alt={item.name}
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      );

    }
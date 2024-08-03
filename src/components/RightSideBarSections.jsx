const SideBarList = [
    { name: 'myservice', imagename: 'chatter-box/public/MyServices.png', imagename: 'MyService' },
  ];
export default function RightSideBarSections() {
    return (
        <>
               {SideBarList.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => setActiveComponent(item.name)}
              className="flex items-center w-full text-left px-4 py-2 rounded hover:bg-gray-700"
            >
              <img src={item.imagename} alt={item.name} className="w-6 h-6 mr-2" />
              {item.name}
            </button>
          </li>
        ))}
        </>
      );
    }
    
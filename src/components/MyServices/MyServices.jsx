export default function MyService({ setActiveComponent, activeComponent }) {
  const sectionMyServices = [
    { name: "همه سرویس ها", quantity: "7" },
    { name: "هاست", quantity: "7" },
    { name: "دامنه", quantity: "7" },
    { name: "IaaS", quantity: "7" },
    { name: "SSL", quantity: "7" },
    { name: "CDN", quantity: "7" },
    { name: "shdv lpw,ghj", quantity: "7" },
  ];

  return (
    <div className="bg-white w-[1100px] h-[600px] absolute top-24 right-96 rounded-2xl flex items-center justify-between p-4">
      <h1 className="text-lovelygreen">سرویس های من</h1>
      {sectionMyServices.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-center space-x-3 p-2 rounded-2xl transition-transform transform hover:scale-105 ${
            activeComponent === item.component
              ? "bg-lovelygreen text-white"
              : "hover:bg-lovelygreen"
          }`}
          onClick={() => setActiveComponent(item.component)}
        >
          <h4>{item.name}</h4>
          <span>{item.quantity}</span>
        </div>
      ))}
    </div>
  );
}

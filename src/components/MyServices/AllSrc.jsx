  export  const allServices = [
      { value: "service-1", label: "فنی - hello world.com", nameWeb: 'hello world.com', price: '4000', dateFinish: '4/7/1403', operation: 'watch the service', id: '1' },
      {  value: "service-1", label: "فنی - hello world.com", nameWeb: 'goodbye world.com', price: '4000', dateFinish: '4/7/1403', operation: 'watch the service', id: '2' },
      {  value: "service-1", label: "فنی - hello world.com", nameWeb: 'bye world.com', price: '4000', dateFinish: '4/7/1403', operation: 'watch the service', id: '3' },
      { value: "service-1", label: "فنی - hello world.com", nameWeb: 'never world.com', price: '4000', dateFinish: '4/7/1403', operation: 'watch the service', id: '4' },
    ];
export default function AllSrc() {
    return (
      <div>
        <h2>This is AllSrc</h2>
        {allServices.map((item) => (
          <div key={item.id}>
            <h4>{item.nameWeb}</h4>
            <p>Price: {item.price}</p>
            <p>Date Finish: {item.dateFinish}</p>
            <p>Operation: {item.operation}</p>
          </div>
        ))}
      </div>
    );
  }
  
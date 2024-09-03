import Accordion from "src/components/myservices/Accordion";  
  export  const allServices = [
      { value: "service-1", label: "فنی - hello world.com", nameWeb: 'hello world.com', price: '4000', dateFinish: '4/7/1403', operation: 'watch the service', id: '1' },
      {  value: "service-1", label: "فنی - hello world.com", nameWeb: 'goodbye world.com', price: '4000', dateFinish: '4/7/1403', operation: 'watch the service', id: '2' },
      {  value: "service-1", label: "فنی - hello world.com", nameWeb: 'bye world.com', price: '4000', dateFinish: '4/7/1403', operation: 'watch the service', id: '3' },
      { value: "service-1", label: "فنی - hello world.com", nameWeb: 'never world.com', price: '4000', dateFinish: '4/7/1403', operation: 'watch the service', id: '4' },
    ];
    export default function AllSrc() {
      return (
        <div>
  <Accordion trigger="Click or touch to open/close" {...props}>
    <table className="dnb-table">
      <caption className="dnb-sr-only">
        A Table Caption, visible only for screen readers
      </caption>
      <thead>
        <tr>
          <th scope="col" colSpan="2" className="dnb-table--no-wrap">
            Avtalenummer
          </th>
          <th scope="col" className="dnb-table--sortable dnb-table--reversed">
            <Button
              variant="tertiary"
              icon="arrow-down"
              text="Sortable"
              title="Sort table row"
            />
          </th>
          <th scope="col" className="dnb-table--sortable dnb-table--active">
            <Button
              variant="tertiary"
              icon="arrow-down"
              text="Active"
              title="Sort table row"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p className="dnb-p">
              Column 1 <b>width p</b>
            </p>
          </td>
          <td>
            <code className="dnb-code">Column 2 with code</code>
          </td>
          <td>
            <span>Column 3 with span</span>
          </td>
          <td>
            <Popup />
          </td>
        </tr>
        <tr>
          <td colSpan="2">Column witch spans over two columns</td>
          <td>Column 3</td>
          <td>
            <Popup />
          </td>
        </tr>
        <tr>
          <td>Column 1</td>
          <td>Column 2</td>
          <td>Column 3</td>
          <td>
            <Popup />
          </td>
        </tr>
      </tbody>
    </table>
  </Accordion>          
        </div>
      );
    }
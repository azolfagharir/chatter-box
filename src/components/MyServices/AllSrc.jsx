import React from "react";
import { Link } from "react-router-dom";
import Accordion from "./Accordion"; // Make sure this import points to your actual Accordion component

export const allServices = [
  {
    value: "service-1",
    label: "فنی - hello world.com",
    nameWeb: "hello world.com",
    type: "domain",
    price: "4000",
    dateFinish: "4/7/1403",
    operation: "watch the service",
    id: "1",
  },
  {
    value: "service-1",
    label: "فنی - hello world.com",
    nameWeb: "goodbye world.com",
    type: "domain",
    price: "4000",
    dateFinish: "4/7/1403",
    operation: "watch the service",
    id: "2",
  },
  {
    value: "service-1",
    label: "فنی - hello world.com",
    nameWeb: "bye world.com",
    type: "domain",
    price: "4000",
    dateFinish: "4/7/1403",
    operation: "watch the service",
    id: "3",
  },
  {
    value: "service-1",
    label: "فنی - hello world.com",
    nameWeb: "never world.com",
    type: "domain",
    price: "4000",
    dateFinish: "4/7/1403",
    operation: "watch the service",
    id: "4",
  },
];

export default function AllSrc() {
  return (
    <div>
      <br className="md:hidden" />
      <br className="md:hidden" />
      <br className="md:hidden" />
      <br className="md:hidden" />
      <br className="md:hidden" />
      <br className="md:hidden" />
      <br className="md:hidden" />
      <br className="md:hidden" />
      <br className="md:hidden" />
      <br className="md:hidden" />
      <br className="md:hidden" />
      <br className="md:hidden" />
      <br className="md:hidden" />
      <br className="md:hidden" />
      <br className="md:hidden" />
      {allServices.map((item) => (
        <div className="w-full bg- md:hidden" key={item.id}>
          <img
            className="w-4 h-4 absolute right-10 mt-8"
            src="/public/domain-allsrc.png"
            alt="gdsf"
          />
          <h1 className="absolute text-sm right-64 mt-10 text-thecolor text-lg">
            {item.type}
          </h1>
          <Accordion className="text-thecolor text-lg" trigger={item.nameWeb}>
            <div className="bg-white rounded-2xl w-140 p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-gray-400">تاریخ رسید</h3>
                  <p className="text-thecolor">{item.dateFinish}</p>
                </div>
                <div>
                  <h3 className="text-gray-400">هزینه</h3>
                  <p className="text-thecolor">{item.price}</p>
                </div>
              </div>
              <button className="w-full bg-thebtn text-lovelyBlue">
                مدیریت سرویس
                <Link to={''} />
              </button>
            </div>
          </Accordion>
        </div>
      ))}
    </div>
  );
}

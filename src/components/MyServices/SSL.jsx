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

export default function SSL() {
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
                <Link to={""} />
              </button>
            </div>
          </Accordion>
        </div>
      ))}{" "}
      <br className="hidden md:flex lg:hidden" />
      <br className="hidden md:flex lg:hidden" />
      <br className="hidden md:flex lg:hidden" />
      <br className="hidden md:flex lg:hidden" />
      <br className="hidden md:flex lg:hidden" />
      <br className="hidden md:flex lg:hidden" />
      <br className="hidden md:flex lg:hidden" />
      <br className="hidden md:flex lg:hidden" />
      <br className="hidden md:flex lg:hidden" />
      <br className="hidden md:flex lg:hidden" />
      <br className="hidden md:flex lg:hidden" />
      <br className="hidden md:flex lg:hidden" />
      <br className="hidden md:flex lg:hidden" />
      <div className="flex flex-col space-y-4 md:absolute md:top-72 md:left-16 lg:absolute top-96 lg:left-12">
      {allServices.map((item) => (
          <div
            key={item.id}
            className="hidden md:block p-4 bg-white shadow-md rounded-md md:w-102 lg:ml-0 lg:w-102 lg:left-0 lg:top-0 xl:w-110 2xl:w-111 relative"
          >
            <div className="flex justify-between items-center mb-4">
              <button className="bg-thebtn text-lovelyBlue px-4 py-2 rounded">
                <Link to={"#"}>&lt;-مدیریت سرویس</Link>
              </button>
              <h1 className="text-lg text-thecolor absolute right-12 top-2">{item.nameWeb}</h1>
            </div>
            <div className="flex flex-col items-center ">
              <img
                className="w-8 h-8 my-2 absolute right-2 top-3 lg:left-"
                src="/public/domain-allsrc.png"
                alt="service-icon"
              />
              <h3 className="text-lg text-thecolor absolute right-12 top-8">{item.type}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import Accordion from "./Accordion"; // Make sure this import points to your actual Accordion component

export const allServices = [
  {
    value: "service-1",
    label: "فنی - hello world.com",
    nameWeb: "hello world.com",
    type: "CDN",
    price: "4000",
    dateFinish: "4/7/1403",
    operation: "watch the service",
    id: "1",
  },
  {
    value: "service-1",
    label: "فنی - hello world.com",
    nameWeb: "goodbye world.com",
    type: "SSL",
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
  {
    value: "service-1",
    label: "فنی - hello world.com",
    nameWeb: "never world.com",
    type: "Laas",
    price: "4000",
    dateFinish: "4/7/1403",
    operation: "watch the service",
    id: "5",
  },
  {
    value: "service-1",
    label: "فنی - hello world.com",
    nameWeb: "never world.com",
    type: "domain",
    price: "4000",
    dateFinish: "4/7/1403",
    operation: "watch the service",
    id: "6",
  },
];
const hasOtherProducts = allServices.some((item) => item.type === "سایر");

export default function OtherProducts() {
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
      {allServices.map((item) =>
        item.type === "سایر" ? (
          <div className="w-full md:hidden" key={item.id}>
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
        ) : null
      )}{" "}
      {!hasOtherProducts && (
        <div className="absolute top-84 inset-0 flex items-center justify-center md:hidden">
          <div className="flex flex-col items-center justify-center rounded-lg w-full rounded-super-rounded">
            <img
              className="w-32 h-32"
              src="/public/not-found.png"
              alt="خالیه"
            />
            <h3 className="text-lg font-semibold text-thecolor text-center">
              سرویس پیدا نشد
            </h3>
            <p className="text-lg font-semibold text-gray-400 text-center">
              مطمئن شوید که فیلتر مناسب را انتخاب کرده و عبارت را به درستی وارد
              کرده اید
            </p>
          </div>
        </div>
      )}
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
        {allServices.map((item) =>
          item.type === "سایر" ? (
            <div
              key={item.id}
              className="hidden md:block p-4 bg-white shadow-md rounded-md md:w-102 lg:ml-0 lg:w-102 lg:left-0 lg:top-0 xl:w-110 2xl:w-111 relative"
            >
              <div className="flex justify-between items-center mb-4">
                <button className="bg-thebtn text-lovelyBlue px-4 py-2 rounded">
                  <Link to={"#"}>&lt;-مدیریت سرویس</Link>
                </button>
                <h1 className="text-lg text-thecolor absolute right-12 top-2">
                  {item.nameWeb}
                </h1>
              </div>
              <div className="flex flex-col items-center ">
                <img
                  className="w-8 h-8 my-2 absolute right-2 top-3 lg:left-"
                  src="/public/domain-allsrc.png"
                  alt="service-icon"
                />
                <h3 className="text-lg text-thecolor absolute right-12 top-8">
                  {item.type}
                </h3>
              </div>
            </div>
          ) : null
        )}
      {!hasOtherProducts && (
  <div className="hidden md:flex md:items-center md:justify-center md:ml-40">
    <div className="text-center">
      <h2 className="text-lovelyBlue text-xl mb-4">
        شما در حال حاضر هیچ سرویسی ندارید
      </h2>
      <p className="text-thecolor text-sm mb-4">
        همین حالا اولین سرویس خود را سفارش دهید!
      </p>
      <button className="bg-account3 mt-4 px-6 py-2 2xl-rounded ">
        <Link className="text-white flex items-center justify-center" to={"#"}>
          خرید سرویس
          <img className="w-8 h-8 ml-2" src="public/Shopping bag.png" alt="" />
        </Link>
      </button>
    </div>
  </div>
)}

      </div>
    </div>
  );
}

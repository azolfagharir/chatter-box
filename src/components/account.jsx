import BeautifueSideBar from "./BeautifueSideBar";
import PathConstants from "D:/chatter-box/src/routes/pathConstants.jsx";
import { Link } from "react-router-dom";
export default function Account() {
  const Identity = [
    {
      name: "alex",
      familyname: "alexian",
      email: "alex@gmail.com",
      mobile: "0912859674",
      melicode: "559334752",
      adress: "تهران، جلال ال احمد",
    },
  ];
  return (
    <>
      <BeautifueSideBar />
      <div className="top-48 bg-theroof w-[610px] h-[150px] md:w-[701px]  lg:w-[700px]  xl:w-[950px]  2xl:w-[1200px] absolute rounded-2xl  left-1/2  lg:left-96 xl:left-109 2xl:left-108 transform -translate-x-1/2">
        <p className="text-thecolor mt-4">
          در صورت نیاز به تغییر مشخصات خود، از طریق ارسال تیکت اقدام نمایید
        </p>
        <button className="text-white rounded-tr-xl rounded-bl-xl rounded-br-none rounded-tl-none absolute top-14 left-1/2 transform -translate-x-1/2 bg-NewTicket hover:bg-NewTicket2">
          <Link className="text-white" to={PathConstants.New}>
            تیکت جدید
          </Link>
        </button>

        <div className="top-36 bg-hello2 w-[610px] h-[600px] md:w-[701px] md:h-[700px] lg:w-[700px] lg:h-[800px] xl:h-[700px] xl:w-[950px]  2xl:w-[1200px] absolute left-1/2  lg:left-82 xl:left-109 2xl:left-108 transform -translate-x-1/2">
          <p className="text-thecolor top-8 text-center right-64 md:right-139 lg:right-82 xl:right-97 2xl:right-64 md:right-80 xl:right-101 2xl:right-101 absolute font-bold	">
            مشخصات من
          </p>
          <div className="relative flex items-center justify-center w-full top-20">
            <hr className="absolute top-1/2 left-0 right-0 border-b border-gray-300 transform -translate-y-1/2" />
            <span className="relative bg-theroof2 text-thecolor text-shadow-lg px-2 py-1 z-10">
              اطلاعات شخصی
            </span>
            <hr className="absolute top-1/2 left-0 right-0 border-t border-gray-300 transform -translate-y-1/2" />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br className="hidden xl:flex" />
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2">
              {Identity.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center ml-139 xl:ml-98 2xl:ml-101"
                >
                  <div className="flex flex-row w-72 justify-between bg-account1 p-2 rounded-2xl">
                    <h3 className="text-lovelyBlue ml-32 text-2xl">
                      {item.name}
                    </h3>
                    <h4 className="text-PanelHeaderText text-2xl">: نام</h4>
                  </div>
                  <br />
                  <div className="flex flex-row w-72 justify-between bg-account1 p-2 rounded-2xl">
                    <h3 className="text-lovelyBlue ml-20  text-xl">
                      {item.familyname}
                    </h3>
                    <h4 className="text-PanelHeaderText text-xl">
                      : نام خانوادگی
                    </h4>
                  </div>
                  <br />
                  <div className="flex flex-row w-72 justify-between bg-account1 p-2 rounded-2xl">
                    <h3 className="text-lovelyBlue ml-10  text-xl">
                      {item.email}
                    </h3>
                    <h4 className="text-PanelHeaderText text-xl">: ایمیل</h4>
                  </div>
                  <br />
                  <div className="flex flex-row w-72 justify-between bg-account1 p-2 rounded-2xl">
                    <h3 className="text-lovelyBlue ml-20  text-xl">
                      {item.mobile}
                    </h3>
                    <h4 className="text-PanelHeaderText text-xl">: موبایل</h4>
                  </div>
                  <br />
                  <div className="flex flex-row w-72 justify-between bg-account1 p-2 rounded-2xl">
                    <h3 className="text-lovelyBlue ml-20  text-xl">
                      {item.melicode}
                    </h3>
                    <h4 className="text-PanelHeaderText text-xl">: کد ملی</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <br />
          <br />
          <hr className="absolute top-100 left-0 right-0 border-b border-gray-300 transform -translate-y-1/2" />
          <span className="relative bg-theroof2 text-thecolor text-shadow-lg px-2 py-1 z-10">
            محل کار / زندگی
          </span>
          <br />
          <br />
          <br />
          <hr className="absolute top-100 left-0 right-0 border-t border-gray-300 transform -translate-y-1/2" />
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2">
              {Identity.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center ml-139 xl:ml-98 2xl:ml-101"
                >
                  <div className="flex flex-row w-72 justify-between bg-account1 p-2 rounded-2xl ">
                    <h3 className="text-lovelyBlue ml-0 text-xl">
                      {item.adress}
                    </h3>
                    <h4 className="text-PanelHeaderText text-xl">: آدرس</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

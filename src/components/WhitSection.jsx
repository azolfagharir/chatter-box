import { useState } from "react";
export default function WhitSection() {
  const [showInput, setShowInput] = useState(false);
  const [showPin, setshowPint] = useState(false);
  function toggler() {
    setShowInput(!showInput);
  }
  function toggler1() {
    setshowPint(!showPin);
  }
  return (
    <>
      <div className="top-32 bg-hello2 w-[610px] h-[600px] md:w-[701px] md:h-[700px] lg:w-[700px] lg:h-[800px] xl:h-[700px] xl:w-[950px]  2xl:w-[1200px] absolute rounded-2xl top-20 left-1/2  lg:left-96 xl:left-109 2xl:left-108 transform -translate-x-1/2">
        <img
          src="/public/search.png"
          onClick={toggler}
          alt="search"
          className="right-4 top-28 w-[30px] h-[30px] absolute md:top-8 md:right-16 lg:right-20 hover:bg-hover hover:cursor-pointer "
        />
        <img
          src="/public/pin.png"
          onClick={toggler1}
          alt="pin"
          className="top-28 left-4 w-[30px] h-[30px] absolute md:top-8 md:left-102 lg:left-109 xl:left-110 2xl:left-111 hover:bg-hover hover:cursor-pointer "
        />
        {showInput && (
          <input
            type="text"
            className="top-28 right-12 w-[246px] text-sm md:w-[290px] rounded-2xl text-gray-400 absolute md:top-8 md:right-24"
            placeholder="... سرویس مورد نظر خود را جست و جو کنید"
          />
        )}
        {showPin && <div>section pined 1</div>}
      </div>
    </>
  );
}

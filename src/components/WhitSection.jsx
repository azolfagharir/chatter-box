import { useState } from "react"
export default function WhitSection(){
    const [showInput, setShowInput] = useState(false);
    const [showPin, setshowPint] = useState(false);
    function toggler(){
        setShowInput(!showInput);
    }
    function toggler1(){
        setshowPint(!showPin);
    }
    return (
        <>
                 <div className="bg-hello2 w-[1100px] h-[600px] absolute top-24 right-96 rounded-2xl flex items-center justify-between p-4">
                    <img src="/public/search.png" onClick={toggler} alt="search" className="w-[30px] h-[30px] absolute top-8 right-14 hover:bg-hover hover:cursor-pointer " />
                    <img src="/public/pin.png" onClick={toggler1} alt="pin" className="w-[30px] h-[30px] absolute top-8 right-4 hover:bg-hover hover:cursor-pointer " />
                    { showInput &&
                      <input type="text" className="w-[290px] text-gray-400 absolute top-8 right-24" placeholder="... سرویس مورد نظر خود را جست و جو کنید" />
                    
                  }
                 { showPin &&
                      <input type="text" className="w-[290px] text-gray-400 absolute top-4 right-24" placeholder="... سرویس مورد نظر خود را جست و جو کنید" />
                    
                  }
                 
                 </div>

        </>
    )
}
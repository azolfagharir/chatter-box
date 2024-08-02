import { useState } from "react";
import Wrapper from "../components/Wrapper";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  
export default function Home() {
    const [HidePass, setHidePass] = useState(true); // Default to hiding password

  function toggler() {
    setHidePass(!HidePass);
  }
    return (
        <>            
            <Wrapper>
                <div className="bg-custome_2 mt-4 mx-8 h-screen sm:w-288 rounded-2xl">
                        <div class="flex items-center justify-center ">
                            <img className="w-[70px] h-[70px]" src="/public/logo.jpg" alt="image description" />
                        </div>
                        <div className="flex items-center justify-center mb-8">
                            <img className="w-[70px] h-[34px]" src="/public/logo.jpg" alt="image description" />
                        </div>
                        <form className="mx-4" action="">
                            <span className="absolute right-28 text-sm top-44 transform -translate-y-1/2 text-gray-400 text-left"> <span className="text-red-400">*</span>:ایمیل</span>
                            <input className="bg-white h-[44px] w-full shadow text-right pr-20 rounded-2xl focus:outline-none focus:shadow-xl focus:shadow-MyOwn transition-shadow duration-300"
                            required
                            type="email"
                            placeholder="ایمیل خود را وارد کنید"/>       
                            <br />
                            <br />
                             <span className="absolute right-24 text-sm top-60 transform -translate-y-1/2 text-gray-400 text-left"> <span className="text-red-400">*</span>:رمز عبور</span>
                            <input className="bg-white h-[44px] w-full shadow text-right pr-20 rounded-2xl focus:outline-none focus:shadow-xl focus:shadow-MyOwn transition-shadow duration-300"
                            required
                            type="email"
                            placeholder="کلمه عبور خود را وارد کنید"/>    
                            <button className="bg-custome_eye  top-40 absolute left-69" onClick={toggler}>
                                {HidePass?(
                                    <img className="w-[20px] h-[14px] " src="/public/eye.png" alt="" />
                                ):( <img className="w-[20px] h-[14px]" src="/public/close-eye.png" alt="" />
                                )}</button>             
                        </form>
                </div>
            </Wrapper>
        </>
        
    )
}

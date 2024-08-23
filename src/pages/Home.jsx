import { useState } from "react";
import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
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
            <img
              className="w-[70px] h-[70px]"
              src="/public/logo.jpg"
              alt="image description"
            />
          </div>
          <div className="flex items-center justify-center mb-8">
            <img
              className="w-[70px] h-[34px]"
              src="/public/logo.jpg"
              alt="image description"
            />
          </div>
          <form className="mx-4" action="">
            <span className="absolute right-28 text-sm top-44 transform -translate-y-1/2 text-gray-400 text-left">
              {" "}
              <span className="text-red-400">*</span>:ایمیل
            </span>
            <input
              className="bg-white h-[44px] w-full shadow text-right pr-20 rounded-2xl focus:outline-none focus:shadow-xl focus:shadow-MyOwn transition-shadow duration-300"
              required
              type="email"
              placeholder="ایمیل خود را وارد کنید"
            />
            <br />
            <br />
            <span className="absolute right-24 text-sm top-60 transform -translate-y-1/2 text-gray-400 text-left">
              {" "}
              <span className="text-red-400">*</span>:رمز عبور
            </span>
            <input
              className="bg-white h-[44px] w-full shadow text-right pr-20 rounded-2xl focus:outline-none focus:shadow-xl focus:shadow-MyOwn transition-shadow duration-300"
              required
              type="password"
              placeholder="کلمه عبور خود را وارد کنید"
            />
            <button
              className="bg-custome_eye  top-eye_top absolute right-292 w-14"
              onClick={toggler}
            >
              {HidePass ? (
                <img
                  className="w-[15px] h-[15px] "
                  src="/public/eye.png"
                  alt=""
                />
              ) : (
                <img
                  className="w-[15px] h-[15px]"
                  src="/public/close-eye.png"
                  alt=""
                />
              )}
            </button>

            <br />
            <br />
            <div className="w-full flex justify-between items-center p-4">
              <div>
                <Link href="#" className="text-blue-500 hover:underline">
                  رمز خود را فراموش کرده ام
                </Link>
              </div>
              {/* First Element (aligned to the right) */}
              <div className="flex items-center space-x-2">
                <label htmlFor="remember-me" className="text-gray-700">
                  مرا به خاطر بسپار
                </label>
                <input
                  type="checkbox"
                  id="remember-me"
                  className="form-checkbox h-5 w-5 border-custome_eye text-custome_eye rounded"
                />
              </div>

              {/* Second Element (aligned to the left) */}
            </div>
            <br />
            <Link to={"/panel"} className="">
              <button
                className="bg-admin_apnel shadow-xl text-white w-full rounded-2xl py-2 transition-shadow duration-300 hover:shadow-3xl hover:shadow-admin_shadow hover:bg-hover_admin_panel"
                type="submit"
              >
                ورود به پنل ادمین
              </button>
            </Link>
          </form>
          <br />
          <Link to={"/Signup"} className="text-blue-500 hover:underline my-16">
            ثبت نام نکرده ام
          </Link>
          <br />
        </div>
      </Wrapper>
    </>
  );
}
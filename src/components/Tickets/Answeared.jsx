import { Link } from "react-router-dom";

export default function Answeared({ section }) {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center p-4 top-20">
        {(section.value === "پاسخ داده شده" && section.quantity < 1) && (
          <div className="flex flex-col items-center justify-center rounded-lg w-full rounded-super-rounded ml-10 md:top-0 md:ml-30 lg:mr-60 xl:ml-0">
            <img
              className="w-32 h-32 "
              src="/public/ok.png"
              alt="Ticket Image"
            />
            <h3 className="text-lg font-semibold text-lovelyBlue text-center">
              همه چی آرومه
            </h3>
            <p className="text-lg font-semibold text-gray-400 text-center">
              در حال حاضر هیچ تیکت فعالی ندارید
            </p>
            <br />
            <br />
            <button className="text-white  bg-NewTicket hover:bg-NewTicket2 py-2 px-4 rounded-lg  mr-10">
              <Link className="text-white" to="/new">
                تیکت جدید
              </Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

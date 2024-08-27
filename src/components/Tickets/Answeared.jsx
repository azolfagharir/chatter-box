import { Link } from "react-router-dom";

export default function Answeared({ section }) {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center p-4 top-28">
        <h1 className="mb-4 text-xl font-bold">  this is Answeared        </h1>
        {(section.value ===  "پاسخ داده شده" && section.quantity < 1) && (
          <div className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-lg">
            <img
              className="w-32 h-32 mb-4"
              src="/public/ok.png"
              alt="Ticket Image"
            />
            <h3 className="text-lg font-semibold text-lovelyBlue mb-4">همه چی آرومه</h3>
            <button className="text-white bg-NewTicket hover:bg-NewTicket2 py-2 px-4 rounded-lg">
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

{/*

 
*/
}
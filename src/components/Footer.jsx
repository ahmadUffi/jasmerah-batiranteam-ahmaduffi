import { Button, Input, InputLabel, InputAdornment } from "@mui/material";
import { FaGithub, FaDiscord } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="h-full w-screen text-white bg-[#0A090D] inter grid grid-cols-1 gap-10 divide-y divide-gray-600 border-t-2 border-gray-500">
      <div className="h-full grid grid-cols-2 md:grid-cols-3 place-content-between">
        <div className="flex flex-col mx-5">
          <img src="/Jasmerah.svg" alt="" className="w-[8rem]" />
          {/* <span className="inter -mt-5">Lorem ipsum dolor sit amet.</span> */}
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2 pt-2">
          <div className="w-full">
            <h3 className="text-sm max-w-72">
              Berikan masukan atau saranmu melewati email kami!
            </h3>
          </div>
          <form
            action="mailto:whyramadhan27@gmail.com"
            method="post"
            encType="text/plain"
            className="flex flex-col md:flex-row gap-3 w-full text-white"
          >
            <div>
              <input
                type="text"
                minLength="5"
                placeholder="berikan masukan atau saran..."
                name="msg"
                autoSave="off"
                id="msg"
                className=" border border-gray-500 rounded-md bg-transparent text-gray-500 p-2 w-40"
              />
            </div>

            <div>
              <button
                className="bg-gray-600 px-10 py-2 rounded-md"
                type="submit"
                // onClick={() => {
                //   confirm("Terima kasih atas masukan atau saran anda");
                // }}
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
        <div className="w-full flex items-center ml-4">
          <div className="flex flex-col divide-y-2 divide-red-400">
            <span className="tracking-wide">Follow Kita</span>
            {/* logo github */}

            <div className="pt-1 flex flex-row gap-2">
              <span
                className="cursor-pointer"
                onClick={() =>
                  window.open("https://github.com/ahmadUffi/jasmerah")
                }
              >
                <FaGithub size="35" className="cursor-pointer" />
              </span>
              <span
                className="cursor-pointer"
                onClick={() => window.open("https://discord.gg/4bZG5nPAP7")}
              >
                <FaDiscord size="35" />
              </span>
            </div>
          </div>
        </div>

        <div className="inter flex flex-col justify-center ml-5 pt-6 ">
          <h3 className=" text-lg font-bold">Developers</h3>
          <ul className="text-sm pt-3 flex flex-col gap-3">
            <li
              className="ml-1 font-semibold text-gray-600 hover:text-white transition-colors duration-100 cursor-pointer "
              onClick={() => window.open("https://google.com")}
            >
              Resource
            </li>
            <li
              className="ml-1 font-semibold text-gray-600 hover:text-white transition-colors duration-100 cursor-pointer "
              onClick={() =>
                window.open("https://github.com/ahmadUffi/jasmerah")
              }
            >
              Source Code
            </li>
            <li
              className="ml-1 font-semibold text-gray-600 hover:text-white transition-colors duration-100 cursor-pointer"
              onClick={() => window.open("https://discord.com/batiranTeam")}
            >
              Batiran Team
            </li>
            <li
              className="ml-1 font-semibold text-gray-600 hover:text-white transition-colors duration-100 cursor-pointer "
              onClick={() => window.open("https://tramuda.vercel.app/")}
            >
              Previous Project
            </li>
          </ul>
        </div>
        <div className="inter flex flex-col justify-center ml-5 pt-6">
          <h3 className=" text-lg font-bold">Social Media</h3>
          <ul className="text-sm pt-3 flex flex-col gap-3">
            <li
              className="ml-1 font-semibold text-gray-600 hover:text-white transition-colors duration-100 cursor-pointer "
              onClick={() =>
                window.open("https://www.instagram.com/ahmaduffi/")
              }
            >
              Instagram / Uffi
            </li>
            <li
              className="ml-1 font-semibold text-gray-600 hover:text-white transition-colors duration-100 cursor-pointer "
              onClick={() => window.open("https://www.instagram.com/_rnotlab/")}
            >
              Instagram / Satria
            </li>
            <li
              className="ml-1 font-semibold text-gray-600 hover:text-white transition-colors duration-100 cursor-pointer "
              onClick={() => window.open("https://github.com/ahmadUffi")}
            >
              Github / Uffi
            </li>
            <li
              className="ml-1 font-semibold text-gray-600 hover:text-white transition-colors duration-100 cursor-pointer "
              onClick={() => window.open("https://github.com/Kuroi-RE")}
            >
              Github / Satria
            </li>
          </ul>
        </div>
        <div className="inter flex flex-col justify-center ml-5 pt-6">
          <h3 className=" text-lg font-bold">General</h3>
          <ul className="text-sm pt-3 flex flex-col gap-3">
            <li
              className="ml-1 font-semibold text-gray-600 hover:text-white transition-colors duration-100 cursor-pointer "
              onClick={() => window.open("mailto:whyramadhan27@gmail.com")}
            >
              Contact us
            </li>
            <li
              className="ml-1 font-semibold text-gray-600 hover:text-white transition-colors duration-100 cursor-pointer "
              onClick={() => window.open("/about")}
            >
              About us
            </li>
            <li
              className="ml-1 font-semibold text-gray-600 hover:text-white transition-colors duration-100 cursor-pointer "
              onClick={() =>
                window.open(
                  "https://www.termsfeed.com/live/b5ee9aab-c4e3-4d4f-a8f1-95d2e2668efb"
                )
              }
            >
              Privacy Policy
            </li>
            <li className="ml-1 font-semibold text-gray-600 hover:text-white transition-colors duration-100 cursor-pointer ">
              Copyright
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full text-center pt-5 pb-2 inter">
        <span className="text-sm">
          © 2024 jasmerah Ltd. | All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;

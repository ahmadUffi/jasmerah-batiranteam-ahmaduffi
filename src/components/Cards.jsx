import "./Cards.css";
import Biografi from "../database";
import { useState } from "react";

const Cards = () => {
  const [filteredBiografi, setFilteredBiografi] = useState(Biografi);
  const boxDown = [2, 5, 8, 11, 14];

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    const filteredBiografi = Biografi.filter((item) =>
      item.nama.toLowerCase().includes(keyword)
    );
    setFilteredBiografi(filteredBiografi);
  };

  return (
    <div className="container grid grid-cols-1 gap-10 py-16 scrollbar-hide mt-24 pb-64">
      <div className="max-w-md mx-auto">
        <div className="flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 "
            type="text"
            id="search"
            placeholder="Cari Pahlawan.."
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="CardsContainer">
        {filteredBiografi.map((item, key) => {
          return (
            <div
              key={key}
              onClick={() => {
                window.open(`/daftarpahlawan/${item.nama}`, "_self");
              }}
              className={`${
                boxDown.includes(key + 1) ? "mobile" : ""
              } CardsBox object-cover bg-cover bg-center bg-no-repeat sm:w-[180px] sm:h-[250px] md:w-[230px] md:h-[320px] lg:w-[300px] lg:h-[400px]`}
              style={{ backgroundImage: `url(${item.gambarSatu})` }}
            >
              <div className="BlackShadow"></div>
              <div className="CardsTexts">
                <h1 className="md:text-4xl sm:text-xl text-lg">{item.nama}</h1>
                <h3 className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
                  {item.biografi.paragrafSatu.slice(0, 70)}...
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;

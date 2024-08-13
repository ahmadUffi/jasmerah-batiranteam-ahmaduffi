import "./Cards.css";
import Biografi from "../database";

const Cards = () => {
  const boxDown = [2, 5, 8, 11, 14];
  return (
    <div className="container py-24 scrollbar-hide mt-24">
      <div className="CardsContainer">
        {Biografi.map((item, key) => {
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

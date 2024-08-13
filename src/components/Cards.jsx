import "./Cards.css";
import Biografi from "../database";

const Cards = () => {
  const boxDown = [2, 5, 8, 11, 14];
  return (
    <div className="container py-24 scrollbar-hide">
      <div className="CardsContainer">
        {Biografi.map((item, key) => {
          return (
            <div
              key={key}
              onClick={() => {
                window.open(`/daftarpahlawan/${item.nama}`, "_self");
              }}
              className={`${
                boxDown.includes(key + 1)
                  ? "mobile CardsBox object-cover bg-cover bg-center bg-no-repeat"
                  : "CardsBox object-cover bg-cover bg-center bg-no-repeat"
              }`}
              style={{ backgroundImage: `url(${item.gambarSatu})` }}
            >
              <div className="BlackShadow"></div>
              <div className="CardsTexts">
                <h1>{item.nama}</h1>
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  animi maxime maiores!
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

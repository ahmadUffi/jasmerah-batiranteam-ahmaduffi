import "./Cards.css";
import Biografi from "../database";

const Cards = () => {
  return (
    <div className="container py-24">
      <div className="CardsContainer">
        {Biografi.map((item, key) => {
          return (
            <div
              key={key}
              className="box"
              onClick={() => {
                window.open(`/daftarpahlawan/${item.nama}`, "_self");
              }}
            >
              <div
                className={`CardsBox object-cover bg-cover bg-center bg-no-repeat`}
                style={{ backgroundImage: `url(${item.gambarSatu})` }}
              >
                <div className="BlackShadow"></div>
                <div className="CardsTexts">
                  <h1>{item.nama}</h1>
                  <h3>{item.biografi.paragrafSatu.slice(0, 50)}...</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;

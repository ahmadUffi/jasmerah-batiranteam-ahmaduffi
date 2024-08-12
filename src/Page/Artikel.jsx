import { useParams } from "react-router-dom";
import Biografi from "../database";

const Artikel = () => {
  const { namapahlawan } = useParams();
  console.log(namapahlawan);
  return (
    <>
      {Biografi.map((item, key) => {
        if (item.nama === namapahlawan) {
          return (
            <div key={key} className="container py-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className="bg-cover bg-center bg-no-repeat h-96"
                  style={{ backgroundImage: `url(${item.gambarTiga})` }}
                ></div>
                <div>
                  <h1 className="text-4xl font-bold">{item.nama}</h1>
                  <p>{item.biografi.paragrafSatu}</p>
                  <p>{item.biografi.paragrafDua}</p>
                  <p>{item.biografi.paragrafTiga}</p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default Artikel;

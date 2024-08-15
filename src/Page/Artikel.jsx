import { useParams } from "react-router-dom";
import Biografi from "../database";
import "./Artikel.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ButtonComponent from "../components/Button";

const Artikel = () => {
  const { namapahlawan } = useParams();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="w-screen min-h-screen py-24 flex flex-col justify-center items-center gap-[40rem] text-white">
      {Biografi.map((item, key) => {
        if (item.nama === namapahlawan) {
          return (
            <div
              key={key}
              className=" flex flex-col gap-36 w-full min-h-screen py-36"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 place-content-center mx-auto">
                <div className="card_container lg:w-[500px]">
                  <ul id="cards">
                    <li className="card" id="card1">
                      <div className="card-body flex justify-center">
                        <div className="p-2 max-w-80 lg:max-w-96 mx-5 md:mx-0 lg:mx-0 py-8  inter">
                          <div className="flex">
                            <div className="typewriter">
                              <h1 className="text-xl md:text-4xl pb-2">
                                {item.nama}
                              </h1>
                            </div>
                          </div>
                          <p className="pb-2 text-justify">
                            {item.biografi.paragrafSatu}
                          </p>
                          <div className="lg:absolute lg:botom-0">
                            <p className="text-gray-500">Page 1</p>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="card" id="card2">
                      <div className="card-body flex justify-center">
                        <div className="p-2 max-w-80 lg:max-w-96 mx-5 md:mx-0 lg:mx-0 py-8  inter">
                          <p className="pb-2 text-justify">
                            {item.biografi.paragrafDua}
                          </p>
                          <div className="lg:absolute lg:botom-0">
                            <p className="text-gray-500">Page 2</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="card" id="card3">
                      <div className="card-body flex justify-center">
                        <div className="p-2 max-w-80 lg:max-w-96 mx-5 md:mx-0 lg:mx-0 py-8  inter">
                          <p className="pb-2 text-justify">
                            {item.biografi.paragrafTiga}
                          </p>
                          <div className="lg:absolute lg:botom-0">
                            <p className="text-gray-500">Page 3</p>
                          </div>
                        </div>
                      </div>
                    </li>

                    {item.biografi.paragrafEmpat && (
                      <li className="card" id="card4">
                        <div className="card-body flex justify-center">
                          <div className="p-2 max-w-80 lg:max-w-96 mx-5 md:mx-0 lg:mx-0 py-8  inter">
                            <p className="pb-2 text-justify">
                              {item.biografi.paragrafEmpat}
                            </p>
                            <div className="lg:absolute lg:botom-0">
                              <p className="text-gray-500">Page 4</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    )}
                    {item.biografi.paragrafLima && (
                      <li className="card" id="card5">
                        <div className="card-body flex justify-center">
                          <div className="p-2 max-w-80 lg:max-w-96 mx-5 md:mx-0 lg:mx-0 py-8  inter">
                            <p className="pb-2">
                              {item.biografi.paragrafEmpat}
                            </p>
                            <div className="lg:absolute lg:botom-0">
                              <p className="text-gray-500">Page 5</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="md:flex md:flex-col md:-z-10 gap-[30rem] pt-36">
                  <div className="pb-5 sticky top-20 md:hidden">
                    <h1 className="text-xl max-w-80 text-center md:text-4xl inter tracking-wide z-50 font-semibold ">
                      Beberapa foto dari {item.nama}
                    </h1>
                  </div>

                  <div

                  

                    className="sticky top-36 object-cover bg-cover bg-center bg-no-repeat h-[24rem] w-[100%] border border-[#232226] rounded-md"

                    style={{ backgroundImage: `url(${item.gambarSatu})` }}
                  ></div>
                  <div
                    className=" sticky top-36 bg-cover  bg-center bg-no-repeat h-[24rem] w-[100%] border border-[#232226] rounded-md"
                    style={{ backgroundImage: `url(${item.gambarDua})` }}
                  ></div>
                  <div
                    className="sticky top-36 bg-cover  bg-center bg-no-repeat h-[24rem] w-[100%] border border-[#232226] rounded-md"
                    style={{ backgroundImage: `url(${item.gambarTiga})` }}
                  ></div>
                </div>
              </div>

              <div
                className="mx-auto min-h-screen w-screen text-white grid grid-cols-1 gap-36"
                id="pencapaian"
              >
                <div className="w-full">
                  <div className="flex flex-col items-center justify-center gap-36 py-44 pb-96">
                    <div
                      className="sticky top-64 max-w-96"
                      data-aos="fade-up"
                      data-aos-easing="ease-in-sine"
                      data-aos-duration="400"
                    >
                      <h1 className=" text-5xl font-bold  uppercase inter tracking-widest -z-10 bg-gradient-to-r from-white  to-red-500 text-transparent bg-clip-text animate-gradient text-center">
                        Pencapaian
                      </h1>
                      <p className="text-center">
                        {item.nama} adalah seorang pahlawan yang memiliki banyak
                        pencapaian, diantaranya:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div
                        data-aos="fade-up-right"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="600"
                        className="filter blur-[0.5px] h-[4rem] w-[100%] grid grid-cols-1 items-center bg-[#232226] rounded-md hover:bg-[#f4efe85e] hover:blur-none  transition-colors duration-100"
                      >
                        <h1 className="mx-4">
                          01. {item.pencapaian.pencapaianSatu}
                        </h1>
                      </div>
                      <div
                        data-aos="fade-up-left"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="800"
                        className="md:mt-[5rem] filter blur-[0.5px] hover:blur-none h-[4rem] w-[20rem] md:w-[30rem] grid grid-cols-1 items-center bg-[#232226]  rounded-md hover:bg-[#f4efe85e]  transition-colors duration-100"
                      >
                        <h1 className="mx-4 ">
                          02. {item.pencapaian.pencapaianDua}
                        </h1>
                      </div>
                      <div
                        data-aos="fade-up-right"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="600"
                        className="filter blur-[0.5px] hover:blur-none h-[4rem] w-[20rem] md:w-[30rem] grid grid-cols-1 items-center bg-[#232226]  rounded-md hover:bg-[#f4efe85e]  transition-colors duration-100"
                      >
                        <h1 className="mx-4 ">
                          03. {item.pencapaian.pencapaianTiga}
                        </h1>
                      </div>
                      {item.pencapaian.pencapaianEmpat && (
                        <div
                          data-aos="fade-up-left"
                          data-aos-offset="200"
                          data-aos-easing="ease-in-sine"
                          data-aos-duration="800"
                          className="md:mt-[5rem] filter blur-[0.5px] hover:blur-none h-[4rem] w-[20rem] md:w-[30rem] grid grid-cols-1 items-center bg-[#232226]  rounded-md hover:bg-[#f4efe85e]  transition-colors duration-100"
                        >
                          <h1 className="mx-4 ">
                            04. {item.pencapaian.pencapaianEmpat}
                          </h1>
                        </div>
                      )}
                      {item.pencapaian.pencapaianLima && (
                        <div
                          data-aos="fade-up-right"
                          data-aos-offset="200"
                          data-aos-easing="ease-in-sine"
                          data-aos-duration="800"
                          className="md:mt-[5rem] filter blur-[0.5px] hover:blur-none h-[4rem] w-[20rem] md:w-[30rem] grid grid-cols-1 items-center bg-[#232226]  rounded-md hover:bg-[#f4efe85e]  transition-colors duration-100"
                        >
                          <h1 className="mx-4 ">
                            05. {item.pencapaian.pencapaianLima}
                          </h1>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 place-items-center">
                    <blockquote
                      data-aos="flip-right"
                      data-aos-duration="1000"
                      data-aos-offset="200"
                      data-aos-easing="ease-in-sine"
                      className="border-l-4 border-gray-500 italic my-8 pl-4 md:pl-8 py-4 mx-4 md:mx-10 max-w-md"
                    >
                      <p className="text-lg font-medium">
                        &quot;{item.quotes}&quot;
                      </p>
                      <cite className="block text-right mt-4 text-gray-600">
                        - {item.nama}
                      </cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
      <div className="wrap mt-[-600px]">
        <ButtonComponent text={"Kembali"} link={"/daftarpahlawan"} />
      </div>
    </section>
  );
};

export default Artikel;

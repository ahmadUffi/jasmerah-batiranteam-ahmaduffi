import React, { useState, useEffect, useRef } from "react";
import "./susunkata.css";
import { susunKata } from "../../database/susunkata";
import Modal from "../../modal/Modal";
import { Box } from "@mui/material";
import ButtonComponent from "../../components/ButtonComponent";

const Susunkata = () => {
  const ref = useRef();
  const [time, setTime] = useState(0);
  const [spans, setSpans] = useState([]);
  const [hint, setHint] = useState("");
  const [modal, setModal] = useState(false);
  const [mulai, setMulai] = useState(false);
  const [pesan, setPesan] = useState("");
  const [modalRules, setModalRules] = useState(true);
  const timerRef = useRef(null);

  // waktu
  const countdown = (initialTime) => {
    setTime(initialTime);
    timerRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current);
          setPesan(
            "Yahhh Waktu habis! jangan pantang menyerah seperti para pahlawan kita"
          );
          setModal(true);
          setMulai(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  // acak kata
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const play = () => {
    setMulai(true);
    ref.current.value = "";
    const randomIndex = Math.floor(Math.random() * susunKata.length);
    const word = susunKata[randomIndex].jawaban;
    const hintText = susunKata[randomIndex].petunjuk;

    const shuffledWord = shuffleArray(word.split(""));

    setSpans(
      shuffledWord.map((char, index) => (
        <span
          key={index}
          className="text-2xl font-semibold w-7 h-7 flex justify-center items-center capitalize box-3d"
        >
          {char}
        </span>
      ))
    );
    countdown(30);
    setHint(hintText);
  };

  const handleSubmit = () => {
    const answer = ref.current.value.trim();
    const match = susunKata.find((question) => {
      return question.jawaban.toLowerCase() === answer.toLowerCase();
    });

    if (match) {
      clearInterval(timerRef.current);
      setModal(true);
      setPesan("Selamat! Anda benar");
      setMulai(false);
    } else {
      ref.current.value = "";
    }
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="tebakkata flex justify-center items-center min-h-[100dvh] flex-col gap-4 ">
      <div className="container bg-slate-50 w-[400px] p-3 py-9 rounded-md relative ">
        <Box className="title border-b absolute top-[-20px] bg-white left-[50%] translate-x-[-50%] px-3 py-2 rounded-lg outline-4 shadow-sm">
          <h1 className="text-xl md:text-2xl font-bold">Game Susun Kata</h1>
        </Box>
        <div className="main">
          <div className="random-wrod text-white flex text-black gap-4 justify-center mt-3 mb-3 flex-wrap">
            {spans}
          </div>
          <p className="petunjuk text-[14px] mt-8 mb-2">
            Petunjuk: <span>{hint}</span>
          </p>
          <p className="time petunjuk text-[14px] mt-2 mb-2">
            Time left: <span> {time}s</span>
          </p>
          <div className="answer flex justify-center mt-4 mb-2">
            <input
              type="text"
              placeholder="Tulis Jawaban Anda"
              className="w-[70%] border border-[2px] p-1 rounded-md"
              ref={ref}
              disabled={!mulai}
            />
          </div>
          <div className="button flex justify-center gap-5 mt-5 mb-2">
            <button
              onClick={play}
              className={`py-2 px-3 rounded-sm text-white font-semibold latter tracking-wide cursor-pointer ${
                mulai ? "bg-red-500 cursor-not-allowed" : "bg-green-600"
              }`}
              disabled={mulai}
            >
              Mulai
            </button>
            <button
              className={`bg-[#FF8343] py-2 px-3 rounded-sm text-white font-semibold latter tracking-wide cursor-pointer ${
                mulai ? "bg-green-600" : "bg-red-500 cursor-not-allowed"
              }`}
              onClick={handleSubmit}
              disabled={!mulai}
            >
              Cek Jawaban
            </button>
          </div>
        </div>
      </div>
      {modalRules && (
        <Modal>
          <>
            <div className="overlay">
              <div className="container w-[600px] p-3 rounded-lg text-center bg-white">
                <h1 className="font-semibold ">Peraturan Game</h1>
                <ul className="text-start">
                  <li>
                    1. Klik tombol &quot;Mulai&quot; untuk memulai permainan.
                  </li>
                  <li>
                    2. Setelah permainan dimulai, Anda akan melihat huruf-huruf
                    yang diacak.
                  </li>
                  <li>
                    3. Susun huruf-huruf tersebut menjadi kata yang benar
                    berdasarkan petunjuk yang diberikan.
                  </li>
                  <li>
                    {" "}
                    4. Anda memiliki waktu 30 detik untuk menyelesaikan
                    tantangan.
                  </li>
                  <li>
                    {" "}
                    5. Jika waktu habis atau kata yang Anda masukkan salah, Anda
                    akan menerima pesan bahwa waktu habis atau jawaban salah.
                  </li>
                  <li>
                    {" "}
                    6. Klik &quot;Cek Jawaban&quot; untuk memeriksa apakah
                    jawaban Anda benar.
                  </li>
                  <li>
                    {" "}
                    7. Jika jawaban benar, Anda akan menerima pesan
                    keberhasilan.
                  </li>
                  <li>
                    {" "}
                    8. Setelah pesan ditampilkan, klik &quot;Close&quot; untuk
                    menutup pesan dan memulai permainan baru.
                  </li>
                </ul>
                <button
                  className="py-1 px-3 bg-[#FF8343] mt-3 rounded-md font-semibold cursor-pointer"
                  onClick={() => setModalRules(false)}
                >
                  Lanjut main
                </button>
              </div>
            </div>
          </>
        </Modal>
      )}

      {modal && (
        <Modal>
          <>
            <div className="overlay">
              <div className="container w-[300px] p-3 rounded-lg text-center bg-white">
                <h1 className="font-semibold ">{pesan}</h1>
                <button
                  className="py-1 px-3 bg-[#FF8343] mt-3 rounded-md font-semibold cursor-pointer"
                  onClick={() => setModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </>
        </Modal>
      )}
      <ButtonComponent link={"/game"} text={"kembali"} />
    </div>
  );
};

export default Susunkata;

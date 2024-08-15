import React, { useState, useEffect, useRef } from "react";
import "./MemoryCard.css";
import { Button } from "@mui/material";
import Modal from "../../modal/Modal";
import ButtonComponent from "../../components/ButtonComponent";

const MemoryCard = () => {
  const [timer, setTimer] = useState(30);
  const [flips, setFlips] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [buttonText, setButtonText] = useState("Start Game");
  const [showModal, setShowModal] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const cardRefs = useRef([]);

  let matchedCard = 0;
  let cardOne, cardTwo;
  let disabledDeck = false;

  useEffect(() => {
    if (timer === 0) {
      setGameOver(true);
      setButtonText("Try Again");
      return;
    }

    const countdown = setInterval(() => {
      if (gameStarted) {
        setTimer((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer, gameStarted]);

  const flipCard = (index) => {
    if (
      gameOver ||
      disabledDeck ||
      cardRefs.current[index].classList.contains("flip")
    )
      return;

    setFlips((prevFlips) => prevFlips + 1);
    cardRefs.current[index].classList.add("flip");

    if (!cardOne) {
      cardOne = cardRefs.current[index];
      return;
    }

    cardTwo = cardRefs.current[index];
    disabledDeck = true;

    const cardOneImg = cardOne.querySelector("img").src;
    const cardTwoImg = cardTwo.querySelector("img").src;

    matchCards(cardOneImg, cardTwoImg);
  };

  const matchCards = (imgOne, imgTwo) => {
    if (imgOne === imgTwo) {
      cardOne = cardTwo = null;
      disabledDeck = false;
      matchedCard++;
      if (matchedCard === 8) {
        setShowModal(true);
        setTimeout(() => {
          shuffleCard();
        }, 1000);
      }
      return;
    }

    setTimeout(() => {
      cardOne.classList.remove("flip");
      cardTwo.classList.remove("flip");
      cardOne = cardTwo = null;
      disabledDeck = false;
    }, 1200);
  };

  const shuffleCard = () => {
    matchedCard = 0;
    cardOne = cardTwo = null;
    disabledDeck = false;
    setTimer(30);
    setFlips(0);
    setGameOver(false);

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() - 0.5);

    cardRefs.current.forEach((card, index) => {
      card.classList.remove("flip");
      const imgTag = card.querySelector("img");
      imgTag.src = `/images/img-${arr[index]}.jpg`;
      card.addEventListener("click", () => flipCard(index));
    });
  };

  const handleButtonClick = () => {
    if (gameStarted) {
      shuffleCard();
    } else {
      setGameStarted(true);
      setButtonText("Refresh Game");
      shuffleCard();
    }
  };

  return (
    <div className="MemoBody text-white py-24 overflow-auto flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col text-center">
        <h1 className="inter text-4xl font-bold tracking-wide">
          Memory Flip Games
        </h1>
        <p className="text-sm">
          Uji ingatan kamu dengan menyamakan gambar pahlawan!
        </p>
      </div>
      <div className="wrapper">
        <ul className="MemoCards">
          {[...Array(16)].map((_, index) => (
            <li
              key={index}
              className="MemoCard"
              ref={(el) => (cardRefs.current[index] = el)}
              onClick={() => flipCard(index)}
            >
              <div className="view front-view">
                <span className="material-icons">question_mark</span>
              </div>
              <div className="view back-view">
                <img src="" alt="" />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row text-black items-center bg-[#f8f8f8] rounded-md p-1 md:px-4 gap-2 md:gap5 divide-x">
        <div>
          <p>Flips: {flips}</p>
          {gameOver && <p>Duh kmu gagal, tapi bisa coba lagi kok!</p>}
        </div>
        <div className="game-info pl-3">
          <p>Time Left: {timer} seconds</p>
        </div>
        <div className="pl-3">
          <Button variant="contained" onClick={handleButtonClick}>
            {buttonText}
          </Button>
        </div>
      </div>
      {showModal && (
        <Modal>
          <>
            <div className="overlay">
              <div className="container w-[300px] p-3 rounded-lg text-center bg-white">
                <h1 className="font-semibold ">
                  Kamu Menang! Ingatan kamu boleh juga.
                </h1>
                <button
                  className="py-1 px-3 bg-[#FF8343] mt-3 rounded-md font-semibold cursor-pointer"
                  onClick={() => setShowModal(false)}
                >
                  Lanjut main
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

export default MemoryCard;

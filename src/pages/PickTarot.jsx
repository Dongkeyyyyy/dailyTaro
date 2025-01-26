import Card from "../components/Card";
import tarotCardBack from "../assets/tarotCardBack.jpg";
import "./PickTarot.css";
import Button from "../components/Button";
import tarotMock from "../data/tarotMock";
import { useState } from "react";

const PickTarot = () => {
  const [shuffledCards, setShuffledCards] = useState([]); // 섞이면 컴포넌트를 다시 렌더링함
  const cards = Array(3)
    .fill(null)
    .map((_, index) => ({
      id: index + 1, // 고유 ID (1부터 시작)
      name: `Card ${index + 1}`, // 카드 이름
      image: "./assets/tarotCardBack.jpg", // 카드 뒷면 이미지 경로
    }));

  console.log(cards);
  console.log("목데이터 가져와", tarotMock);

  // 카드 셔플 랜덤 함수
  const shuffleCards = (cards) => {
    let shuffledCards = [...cards];
    //Fisher-Yates 알고리즘 사용하기
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // 0부터 i 사이의 랜덤 인덱스 -> i + 1 해야함
      [shuffledCards[i], shuffledCards[j]] = [
        shuffledCards[j],
        shuffledCards[i],
      ]; // 두 카드의 위치를 교환
    }
    console.log("섞기전:", cards);
    console.log("섞기후:", shuffledCards);
    setShuffledCards(shuffledCards); // 섞은 카드 상태 업데이트
  };
  // 카드 섞기 이벤트
  const onClickShuffleCards = () => {
    // 카드 셔플 랜덤 함수 호출
    shuffleCards(cards); // cards 배열을 넘겨서 shuffle
  };
  return (
    <div className="PickTarot">
      <div className="cardsWrapper">
        {/* 섞은 카드가 있으면 렌더링, 아니면 원본카드 */}
        {shuffledCards.length > 0
          ? shuffledCards.map((card) => (
              <img key={card.id} src={tarotCardBack} alt={card.name} />
            ))
          : cards.map((card) => (
              <img key={card.id} src={tarotCardBack} alt={card.name} />
            ))}
      </div>
      <div className="button_section">
        <Button
          onClick={onClickShuffleCards}
          text={"카드 섞기"}
          type={"SHUFFLE"}
        />
      </div>
    </div>
  );
};

export default PickTarot;

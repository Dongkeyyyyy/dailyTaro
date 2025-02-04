import tarotCardBack from "../assets/tarotCardBack.jpg";
import "./PickTarot.css";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PickTarot = () => {
  const [shuffledCards, setShuffledCards] = useState([]); // 섞이면 컴포넌트를 다시 렌더링함 -> 카드들이 진짜 섞였는지, 그 섞인 카드 배열을 관리

  const [isAPILoading, setIsAPILoading] = useState(true); // API 로딩 상태 관리

  const [isShuffled, setIsShuffled] = useState(false); // 카드 섞였는지 여부만 !!! 추적한다.

  const navigate = useNavigate();

  const [selectedCard, setSelectedCard] = useState(null); // 선택한 카드 저장

  const cards = Array(22)
    .fill(null)
    .map((_, index) => ({
      id: index + 1, // 고유 ID (1부터 시작)
      name: `ar ${index + 1}`, // 카드 이름
      image: "./assets/tarotCardBack.jpg", // 카드 뒷면 이미지 경로
    }));

  // 애니메이션 상태 정의 (Framer Motion Variants)
  const cardVariants = {
    initial: {
      x: 0, // 모든 카드가 초기 위치
      transition: { duration: 0.5 },
    },
    shuffle: (index) => ({
      x: (index % 2 === 0 ? 1 : -1) * 150, // 짝수/홀수에 따라 이동 방향 결정
      transition: { duration: 0.5 },
    }),
  };

  // 카드 섞기 함수
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
    setIsShuffled(true); // 섞였음을 상태로 설정
  };
  // 카드 섞기 이벤트
  const onClickShuffleCards = () => {
    // 카드 셔플 랜덤 함수 호출
    shuffleCards(cards); // cards 배열을 넘겨서 shuffle
  };

  const fetchCardData = async (cardId) => {
    console.log("카드아이디", cardId);
    const cardCode = `ar${cardId.toString().padStart(2, "0")}`;
    const apiUrl = `https://tarotapi.dev/api/v1/cards/${cardCode}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log("fetchedData", data);
    return data;
  };

  // 카드 섞기 및 선택 후 API로 카드 데이터 가져오기
  const onClickPickCard = async (card) => {
    if (isShuffled) {
      setSelectedCard(card); // 선택한 카드 상태 업데이트
      const cardData = await fetchCardData(card.id); // API 데이터 받아오기
      console.log("카드 뽑는 페이지에서 보내는 데이터", cardData);
      navigate("/Result", {
        state: {
          selectedCard: card, // 카드 제목이나 이미지
          cardData: cardData, // API로 받은 카드 데이터를 결과 페이지로 넘기기
        },
      });
    }
  };

  // 섞였을 때먼 버튼 클릭 가능하도록 섞임 여부 추적
  useEffect(() => {
    if (isShuffled) {
      console.log("카드 섞임 완료 ! 카드 뽑기 가능합니다.");
    }
  }, [isShuffled]); // isShuffled 상태가 변경될 때마다 실행
  return (
    <div className="PickTarot">
      <div className="header_section">
        <h2>카드를 섞고 카드 하나를 선택하세요</h2>
      </div>
      <div className="cardsWrapper">
        {/* 섞은 카드가 있으면 렌더링, 아니면 원본카드 */}
        {(isShuffled ? shuffledCards : cards).map((card, index) => (
          <motion.img
            key={card.id}
            src={tarotCardBack}
            alt={card.name}
            onClick={() => onClickPickCard(card)}
            className="card"
            custom={index} // Index를 variants에 전달
            variants={cardVariants} // Variants 연결
            initial="initial"
            animate={isShuffled ? "shuffle" : "initial"} // 섞기 또는 원위치로
          />
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

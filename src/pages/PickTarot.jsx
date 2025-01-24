import Card from "../components/Card";
import "./PickTarot.css";
import Button from "../components/Button";

const PickTarot = () => {
  const cards = Array(3).fill({ Card });

  // 카드 셔플 랜덤 함수
  const shuffleCards = (cards) => {
    let shuffledCards = [cards]; // 일단 왜 복제하는지 모름
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
    return shuffledCards;
  };
  // 카드 섞기 이벤트
  const onClickShuffleCards = () => {
    // 카드 셔플 랜덤 함수 호출
    shuffleCards();
  };
  return (
    <div className="PickTarot">
      <div className="cardsWrapper">
        {cards.map((card, index) => (
          <Card key={index} />
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

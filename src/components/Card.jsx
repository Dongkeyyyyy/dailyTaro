import tarotCard from "../assets/tarotCardBack.jpg"; // 이미지 파일 import
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <img src={tarotCard} className="cardBack_image" alt="" />
    </div>
  );
};

export default Card;

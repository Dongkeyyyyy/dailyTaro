import Card from "../components/Card";
import "./TarotSelection.css";
import Button from "../components/Button";

const TarotSelection = () => {
  const cards = Array(22).fill({ Card });
  return (
    <div className="TarotSelection">
      <div className="cardsWrapper">
        {cards.map((card, index) => (
          <Card key={index} />
        ))}
      </div>
      <div className="button_section">
        <Button />
      </div>
    </div>
  );
};

export default TarotSelection;

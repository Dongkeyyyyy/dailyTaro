import Card from "../components/Card";

const TarotSelection = () => {
  const cards = Array(22).fill({ Card });
  return (
    <div className="cardsWrapper">
      {cards.map((card, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default TarotSelection;

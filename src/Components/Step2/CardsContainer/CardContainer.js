import Card from "../../Card/Card";
import "../CardsContainer/CardsContainer.css"

export default function CardsContainer({
  data,
  choice,
  selectedCard,
  handleCardClick,
}) {
  return (
    <div className="cards-container">
      {data.map((item, index) => (
        <Card
          data={item}
          key={index}
          choice={choice}
          isSelected={selectedCard === index}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
}

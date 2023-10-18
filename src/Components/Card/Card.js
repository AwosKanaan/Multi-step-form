import "../Card/Card.css"
export default function Card({ data, choice, isSelected, onClick }) {
  const cardClass = isSelected ? "card selected-card" : "card";

  return (
    <div className={cardClass} onClick={onClick}>
      <div dangerouslySetInnerHTML={{ __html: data.svg }} />

      <div className="card-text">
        <p className="card-text-name">{data.title}</p>
        <p className="card-text-price">{`$${data.price}/${choice}`}</p>
        {choice === "yr" && <p className="card-text-free">2 months free</p>}
      </div>
    </div>
  );
}

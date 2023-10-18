import Button from "../../Button/Button";
import "./SubscriptionInfo.css";
export default function SubscriptionInfo({ card, currentChoice }) {
  return (
    <div className="subscription-info">
      <div className="type">
        <p>{`${card.title}${
          currentChoice === "mo" ? " (Monthly)" : " (Yearly)"
        }`}</p>
        <Button className="btn-type" name="Change" />
      </div>
      <div className="subscription-info-price">{`$${card.price}/${currentChoice}`}</div>
    </div>
  );
}

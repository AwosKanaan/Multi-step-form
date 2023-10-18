import TextPrice from "../../TextPrice/TextPrice";
import SubscriptionInfo from "../SubscriptionInfo/SubscriptionInfo";
import "../Summary/Summary.css";
export default function Summary({ currentChoice, selectedAddOns, card }) {
  let total = 0;

  selectedAddOns.forEach((addOn) => {
    total += addOn.price;
  });
  total += card.price;

  return (
    <>
      <div className="container-for-finish">
        <SubscriptionInfo card={card} currentChoice={currentChoice} />
        <hr />
        <div className="container-for-add-ons-finish">
          {selectedAddOns.map((addOn) => (
            <TextPrice
              className="text-price add-on-left-type-v2"
              currentChoice={currentChoice}
              objData={addOn}
              containsPlus={true}
              key={addOn.title}
            />
          ))}
        </div>
      </div>
      <TextPrice
        objData={{
          title: `Total(${currentChoice === "mo" ? "per month" : "per year"})`,
          price: total,
        }}
        currentChoice={currentChoice}
        containsPlus={true}
      />
    </>
  );
}

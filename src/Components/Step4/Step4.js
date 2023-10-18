import Title from "../Title/Title";
import Summary from "./Summary/Summary";
export default function Step4({
  currentChoice,
  selectedAddOns,
  card,
  addOnsArr,
}) {
  return (
    <>
      <Title
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      />
      <Summary
        currentChoice={currentChoice}
        selectedAddOns={selectedAddOns}
        card={card}
        addOnsArr={addOnsArr}
      />
    </>
  );
}

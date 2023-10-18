import Title from "../Title/Title";
import CardsContainer from "./CardsContainer/CardContainer";
import Toggle from "./Toggle/Toggle";
export default function Step2({
  currentChoice,
  arr,
  selectedCard,
  handleCardClick,
  handleToggleChange,
}) {
  return (
    <>
      <Title
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      <CardsContainer
        data={currentChoice === "mo" ? arr.at(0) : arr.at(1)}
        choice={currentChoice}
        selectedCard={selectedCard}
        handleCardClick={handleCardClick}
      />
      <Toggle
        handleToggleChange={handleToggleChange}
        currentChoice={currentChoice}
      />
    </>
  );
}

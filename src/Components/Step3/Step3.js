import React from "react";
import Title from "../Title/Title";
import TextPrice from "../TextPrice/TextPrice";
import "../Step3/Step3.css";

export default function Step3({
  currentChoice,
  selectedAddOns,
  arr,
  handleCheckboxChange,
}) {
  return (
    <>
      <Title
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />
      {arr.map((addOn, index) => (
        <TextPrice
          key={index}
          containsCheckbox={true}
          containsParagraph={true}
          className={`add-on ${
            selectedAddOns?.some((ele) => ele.title === addOn.title)
              ? "selected-add-on"
              : ""
          }`}
          objData={{ ...addOn }}
          currentChoice={currentChoice}
          onCheckboxChange={() => handleCheckboxChange(index)}
          checked={selectedAddOns.some((e) => e.title === addOn.title)}
        />
      ))}
    </>
  );
}

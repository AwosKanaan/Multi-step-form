import React from "react";
import Button from "../Button/Button";
import "../TextPrice/TextPrice.css"

export default function TextPrice({
  containsCheckbox,
  containsButton,
  containsParagraph,
  className = "text-price",
  objData,
  currentChoice,
  checked,
  containsPlus,
  onCheckboxChange,
}) {
  return (
    <div className={className}>
      <div className="add-on-left">
        {containsCheckbox && (
          <input
            checked={checked}
            className="add-on-left-checkbox"
            type="checkbox"
            onChange={onCheckboxChange}
          />
        )}
        <div className="container-for-add-on-left-type-desc">
          <p className="add-on-left-type">{objData.title}</p>
          {containsButton ? (
            <Button className="btn-type" name="change" />
          ) : null}
          {containsParagraph ? (
            <p className="add-on-left-desc">{objData.description}</p>
          ) : null}
        </div>
      </div>
      <div>{`${containsPlus ? "+" : ""}$${
        objData.price
      }/${currentChoice}`}</div>
    </div>
  );
}

import { useState } from "react";
import "../Toggle/Toggle.css"

export default function Toggle({ currentChoice, handleToggleChange }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckBoxToggle() {
    setIsChecked(!isChecked);
    handleToggleChange(!isChecked);
  }

  return (
    <div className="toggle-container">
      <p>Monthly</p>
      <input
        type="checkbox"
        className="toggle"
        checked={currentChoice === "yr" ? true : false}
        onChange={handleCheckBoxToggle}
      />
      <p>Yearly</p>
    </div>
  );
}

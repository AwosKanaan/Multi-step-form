import "../Step/Step.css"
export default function Step({ stepNumber, text, activeTab }) {
  return (
    <div className="container-for-step">
      <div
        className={`step-number ${
          activeTab === stepNumber ? "active-step" : ""
        }`}
      >
        {stepNumber}
      </div>
      <div className="step-body">
        <p className="step-title">Step {stepNumber}</p>
        {text && <p className="step-text">{text}</p>}
      </div>
    </div>
  );
}

import Sidebar from "../Sidebar/Sidebar";
import TabContent from "../TabContent/TabContent";
import Step from "../Step/Step";
import Button from "../Button/Button";
import { useState } from "react";
import ThankYou from "../Step4/ThankYou/ThankYou";
import AdminDashboard from "../Admin/Admin";
import "../../index.css";

export default function App() {
  const [activeTab, setActiveTab] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [required, setRequired] = useState(false);

  const [confirmed, setConfirmed] = useState(false);

  const [skipped, setSkipped] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleNext() {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.phone === ""
    ) {
      setRequired(true);
    } else {
      setRequired(false);
      setActiveTab((prev) => prev + 1);
    }
  }

  function handlePrevious() {
    setActiveTab((prev) => prev - 1);
  }

  function handleConfirmation() {
    const existingUsers = JSON.parse(localStorage.getItem("formData")) || [];

    existingUsers.push(formData);
    localStorage.setItem("formData", JSON.stringify(existingUsers));
    setConfirmed(true);
  }

  return (
    <>
      {!skipped ? (
        <AdminDashboard skipped={skipped} onSkipChange={setSkipped} />
      ) : (
        <div className="wrapper">
          <Sidebar>
            <Step stepNumber={1} text="Your info" activeTab={activeTab} />
            <Step stepNumber={2} text="Select plan" activeTab={activeTab} />
            <Step stepNumber={3} text="Add-ons" activeTab={activeTab} />
            <Step stepNumber={4} text="Summary" activeTab={activeTab} />
          </Sidebar>
          {confirmed ? (
            <ThankYou />
          ) : (
            <TabContent
              activeTab={activeTab}
              handleInputChange={handleInputChange}
              required={required}
              value={formData}
            >
              {activeTab > 1 && (
                <Button
                  className="go-back-btn"
                  name="Go Back"
                  onClick={handlePrevious}
                />
              )}
              {activeTab < 4 && (
                <Button
                  className="next-btn"
                  name="Next Step"
                  onClick={handleNext}
                />
              )}
              {activeTab === 4 && !confirmed && (
                <Button
                  className="next-btn confirm-btn"
                  name="Confirm"
                  onClick={handleConfirmation}
                />
              )}
            </TabContent>
          )}
        </div>
      )}
    </>
  );
}

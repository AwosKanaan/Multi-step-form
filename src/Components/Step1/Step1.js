import Title from "../Title/Title";
import Input from "../Input/Input";
import "../Step1/Step1.css";

export default function Step1({ handleInputChange, required, value }) {
  function handleSubmit() {}

  return (
    <form onSubmit={handleSubmit} className="container-for-form">
      <Title
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      />
      <Input
        label="Name"
        placeholder="e.g. Stephen King"
        name="name"
        onChange={handleInputChange}
        required={required && value.name === ""}
        value={value.name}
      />

      <Input
        label="Email Address"
        placeholder="e.g. stephenking@lorem.com"
        name="email"
        onChange={handleInputChange}
        required={required && value.email === ""}
        value={value.email}
      />

      <Input
        label="Phone Number"
        placeholder="e.g. +1 234-567-890"
        name="phone"
        onChange={handleInputChange}
        required={required && value.phone === ""}
        value={value.phone}
      />
    </form>
  );
}

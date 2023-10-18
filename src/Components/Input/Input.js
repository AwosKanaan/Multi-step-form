import "../Input/Input.css"
export default function Input({
  label,
  required,
  placeholder,
  name,
  onChange,
  value,
}) {
  return (
    <div className="input-component">
      <div className="labels">
        <label className="label">{label}</label>
        {required && <label className="required">This field is required</label>}
      </div>
      <input
        type="text"
        className="input"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

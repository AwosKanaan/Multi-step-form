import "../Button/Button.css";
import "../../index.css"
export default function Button({ className, name, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {name}
    </button>
  );
}

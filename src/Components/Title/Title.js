import "../Title/Title.css"
export default function Title({ title, description }) {
  return (
    <div className="title-component">
      <p className="title-component-header">{title}</p>
      <p className="title-component-description">{description}</p>
    </div>
  );
}

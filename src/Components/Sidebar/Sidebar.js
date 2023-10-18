import "../Sidebar/Sidebar.css"
export default function Sidebar({ children }) {
  return (
    <div className="container-for-sidebar">
      <div className="sidebar">{children}</div>
    </div>
  );
}

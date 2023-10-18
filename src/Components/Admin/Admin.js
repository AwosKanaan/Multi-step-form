import React, { useState } from "react";
import "./AdminDashboard.css";

export default function AdminDashboard({ skipped, onSkipChange }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminData, setAdminData] = useState([]);

  const handleLogin = () => {
    if (adminEmail === "admin@example.com") {
      setIsAdmin(true);
      const storedData = localStorage.getItem("formData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setAdminData(parsedData);
      }
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
  };

  const handleSkip = () => {
    onSkipChange(!skipped);
  };

  return (
    <div className="admin-dashboard-container">
      {isAdmin ? (
        <div>
          <h1>Admin Dashboard</h1>
          <button onClick={handleLogout} className="admin-logout-button">
            Logout
          </button>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {adminData?.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="admin-login">
          <h1>Admin Login</h1>
          <input
            type="text"
            placeholder="Email"
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
            className="admin-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            className="admin-input"
          />
          <div className="container-for-buttons">
            <button onClick={handleLogin} className="admin-login-button">
              Login
            </button>
            <button onClick={handleSkip} className="admin-skip-button">
              Skip
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

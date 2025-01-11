import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleColorMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? "#ffffff" : "#121212"; 
    document.body.style.color = isDarkMode ? "#000000" : "#ffffff"; 
  };

  const navbarStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px",
    maxWidth: "1140px",
    margin: "0 auto",
    height: "64px",
    backgroundColor: isDarkMode ? "#333333" : "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const linkStyle = {
    textDecoration: "none",
    color: isDarkMode ? "#61dafb" : "#007acc",
    fontWeight: "bold",
  };

  const buttonStyle = {
    padding: "8px 16px",
    margin: "0 8px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    color: isDarkMode ? "#ffffff" : "#000000",
    backgroundColor: isDarkMode ? "#555555" : "#dddddd",
  };

  const iconStyle = {
    fontSize: "20px",
    marginRight: "4px",
  };

  return (
    <div style={navbarStyle}>
      <div>
        <Link to="/" style={{ ...linkStyle, fontSize: "24px" }}>
          Product Store 🛒
        </Link>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/create">
          <button style={buttonStyle}>
            <span style={iconStyle}>+</span>Create
          </button>
        </Link>
        <button style={buttonStyle} onClick={toggleColorMode}>
          {isDarkMode ? (
            <span style={iconStyle}>☀️</span>
          ) : (
            <span style={iconStyle}>🌙</span>
          )}
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;

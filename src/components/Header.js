import React from "react";
import "./styles/header.css";

function Header(props) {
  return (
    <div className="header-container">
      <header className="header">
        <p className="header-title">
          <code>Hello ,</code> nice to meet you!
        </p>
      </header>
    </div>
  );
}

export default Header;

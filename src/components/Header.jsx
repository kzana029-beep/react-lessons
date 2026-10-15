import React from "react";

function Header() {
  return (
    <header className="header">
      <div>
        <p classname="small-title">Friday movie night</p>
        <h1>choose your movie</h1>
        <p classname="subtitle">select a film for your viewing pleasure</p>
      </div>
      <div className="cinema-info">
        <span>cinema</span>
        <strong>4 movies</strong>
      </div>
    </header>
  );
}

export default Header;

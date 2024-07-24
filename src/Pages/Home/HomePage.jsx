import React from "react";
import "./HomePage.css";

const HomePage = () => {
  const date = new Date().toLocaleDateString();

  return (
    <div className="home-page">
      <header>
        <h1>Seja Bem-Vindo(a)!</h1>
        <p>Data: {date}</p>
      </header>
    </div>
  );
};

export default HomePage;

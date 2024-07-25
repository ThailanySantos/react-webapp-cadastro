import React from "react";
import "./HomePage.css";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <Paper elevation={3} style={{ padding: "0.01px" }}>
      <div className="home-page">
        <Header />
        <main className="main">
          <div className="container">
            <h2>Bem-vindo ao Projeto</h2>
            <p>
              Este projeto refere-se a um teste técnico de uma aplicação web
              básica, onde boas práticas de desenvolvimento e conhecimento estão
              sendo avaliados.
            </p>
            <Button id="buttonHome" variant="contained">
              Cadastrar
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    </Paper>
  );
};

export default HomePage;

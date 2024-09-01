import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const HomePage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <Paper elevation={3} style={{ padding: "0.01px" }}>
      <div className="home-page">
        <Header />
        <main className="main">
          <div className="container">
            <h2>Bem-vindo ao Projeto</h2>
            <p>
              Este projeto pessoal refere-se a uma página web simples de cadastro de usuários, onde são solicitados nome, e-mail, nascimento, celular e CEP.
            </p>
            <p>Cadastre-se abaixo para testá-lo.</p>

            <Button
              id="buttonHome"
              variant="contained"
              onClick={handleRegisterClick}
            >
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

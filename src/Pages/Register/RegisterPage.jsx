import React, { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    dataNascimento: "",
    celular: "",
    cep: "",
    endereco: "",
    numeroCasa: "",
    bairro: "",
    cidade: "",
    uf: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div>
      <h1>Página de Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Data de Nascimento:</label>
          <input
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Celular:</label>
          <input
            type="tel"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>CEP:</label>
          <input
            type="text"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Endereço:</label>
          <input
            type="text"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Número da Casa:</label>
          <input
            type="text"
            name="numeroCasa"
            value={formData.numeroCasa}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Bairro:</label>
          <input
            type="text"
            name="bairro"
            value={formData.bairro}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Cidade:</label>
          <input
            type="text"
            name="cidade"
            value={formData.cidade}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>UF:</label>
          <input
            type="text"
            name="uf"
            value={formData.uf}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>

      {submittedData && (
        <div>
          <h2>Resumo do Cadastro:</h2>
          <ul>
            <li>Nome: {submittedData.nome}</li>
            <li>Email: {submittedData.email}</li>
            <li>Data de Nascimento: {submittedData.dataNascimento}</li>
            <li>Celular: {submittedData.celular}</li>
            <li>CEP: {submittedData.cep}</li>
            <li>Endereço: {submittedData.endereco}</li>
            <li>Número da Casa: {submittedData.numeroCasa}</li>
            <li>Bairro: {submittedData.bairro}</li>
            <li>Cidade: {submittedData.cidade}</li>
            <li>UF: {submittedData.uf}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./RegisterPage.css";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Container, Grid, Typography } from "@mui/material";
import axios from "axios";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [submittedData, setSubmittedData] = useState(null);
  const [cepError, setCepError] = useState("");

  const onSubmit = (data) => {
    if (!cepError) {
      setSubmittedData(data);
    }
  };

  const handleCepBlur = async (e) => {
    const cep = e.target.value;
    if (cep.length === 8) {
      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        );
        if (response.data.erro) {
          setCepError("CEP inválido. Verifique e tente novamente.");
        } else {
          const { logradouro, bairro, localidade, uf } = response.data;
          setValue("endereco", logradouro);
          setValue("bairro", bairro);
          setValue("cidade", localidade);
          setValue("uf", uf);
          setCepError("");
        }
      } catch (error) {
        setCepError("CEP inválido. Verifique e tente novamente.");
      }
    } else {
      setCepError("CEP deve ter 8 dígitos.");
    }
  };

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  };

  return (
    <Paper elevation={3} style={{ padding: "0.1px" }}>
      <div className="home-page">
        <Header />
        <main className="main">
          <Container className="container">
            <Typography variant="h4" id="page-title" gutterBottom>
              Página de Cadastro
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Nome"
                    {...register("nome", {
                      required: "Por favor, preencha este campo.",
                    })}
                    fullWidth
                    variant="outlined"
                    error={!!errors.nome}
                    helperText={errors.nome?.message}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="E-mail"
                    type="email"
                    {...register("email", {
                      required: "Por favor, preencha este campo.",
                    })}
                    fullWidth
                    variant="outlined"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Data de Nascimento"
                    type="date"
                    {...register("dataNascimento", {
                      required: "Por favor, preencha este campo.",
                    })}
                    fullWidth
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.dataNascimento}
                    helperText={errors.dataNascimento?.message}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Celular"
                    type="tel"
                    {...register("celular", {
                      required: "Por favor, preencha este campo.",
                    })}
                    fullWidth
                    variant="outlined"
                    error={!!errors.celular}
                    helperText={errors.celular?.message}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="CEP"
                    {...register("cep", {
                      required: "Por favor, preencha este campo.",
                    })}
                    onBlur={handleCepBlur}
                    fullWidth
                    variant="outlined"
                    error={!!errors.cep || !!cepError}
                    helperText={errors.cep?.message || cepError}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Endereço"
                    {...register("endereco", {
                      required: "Por favor, preencha este campo.",
                    })}
                    fullWidth
                    variant="outlined"
                    error={!!errors.endereco}
                    helperText={errors.endereco?.message}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Número"
                    {...register("numero", {
                      required: "Por favor, preencha este campo.",
                    })}
                    fullWidth
                    variant="outlined"
                    error={!!errors.numero}
                    helperText={errors.numero?.message}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Bairro"
                    {...register("bairro", {
                      required: "Por favor, preencha este campo.",
                    })}
                    fullWidth
                    variant="outlined"
                    error={!!errors.bairro}
                    helperText={errors.bairro?.message}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Cidade"
                    {...register("cidade", {
                      required: "Por favor, preencha este campo.",
                    })}
                    fullWidth
                    variant="outlined"
                    error={!!errors.cidade}
                    helperText={errors.cidade?.message}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="UF"
                    {...register("uf", {
                      required: "Por favor, preencha este campo.",
                    })}
                    fullWidth
                    variant="outlined"
                    error={!!errors.uf}
                    helperText={errors.uf?.message}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    id="buttonRegister"
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!!cepError}
                  >
                    Enviar
                  </Button>
                </Grid>
              </Grid>
            </form>

            {submittedData && (
              <Paper
                elevation={2}
                style={{
                  padding: "2% 2%",
                  maxWidth: "400px",
                  maxHeight: "400px",
                  width: "100%",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "8px",
                  textAlign: "center",
                  margin: "5% auto 0",
                }}
              >
                <Typography variant="h6" style={{ marginBottom: "10px" }}>
                  Dados Cadastrados
                </Typography>
                <Typography variant="body1" className="data-item">
                  <span className="label">Nome:</span>{" "}
                  <span className="data">{submittedData.nome}</span>
                </Typography>
                <Typography variant="body1" className="data-item">
                  <span className="label">Email:</span>{" "}
                  <span className="data">{submittedData.email}</span>
                </Typography>
                <Typography variant="body1" className="data-item">
                  <span className="label">Data de Nascimento:</span>{" "}
                  <span className="data">
                    {formatDate(submittedData.dataNascimento)}
                  </span>
                </Typography>
                <Typography variant="body1" className="data-item">
                  <span className="label">Celular:</span>{" "}
                  <span className="data">{submittedData.celular}</span>
                </Typography>
                <Typography variant="body1" className="data-item">
                  <span className="label">CEP:</span>{" "}
                  <span className="data">{submittedData.cep}</span>
                </Typography>
                <Typography variant="body1" className="data-item">
                  <span className="label">Endereço:</span>{" "}
                  <span className="data">{submittedData.endereco}</span>
                </Typography>
                <Typography variant="body1" className="data-item">
                  <span className="label">Número:</span>{" "}
                  <span className="data">{submittedData.numero}</span>
                </Typography>
                <Typography variant="body1" className="data-item">
                  <span className="label">Bairro:</span>{" "}
                  <span className="data">{submittedData.bairro}</span>
                </Typography>
                <Typography variant="body1" className="data-item">
                  <span className="label">Cidade:</span>{" "}
                  <span className="data">{submittedData.cidade}</span>
                </Typography>
                <Typography variant="body1" className="data-item">
                  <span className="label">UF:</span>{" "}
                  <span className="data">{submittedData.uf}</span>
                </Typography>
              </Paper>
            )}
          </Container>
        </main>
        <Footer />
      </div>
    </Paper>
  );
};

export default RegisterPage;

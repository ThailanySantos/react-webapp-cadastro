# Teste Prático para Desenvolvedor Front-end Júnior

## Descrição do Projeto

Este é um projeto prático para desenvolvedor front-end júnior, criado para avaliar habilidades em desenvolvimento web utilizando React. O objetivo é construir uma aplicação básica com design responsivo que consome uma API pública e demonstra boas práticas de desenvolvimento.

## Objetivo

O projeto visa criar um aplicativo web que permita aos usuários se registrarem, validarem dados com uma API pública de CEP e visualizar informações cadastradas. A aplicação é composta por duas páginas principais: a página inicial e a página de registro.

## Tecnologias Utilizadas

- **React**: Versão 18.3.1
- **React Dom**: Versão 18.3.1
- **React Hook Form**: Versão 7.52.1
- **React Router DOM**: Versão 6.15.1
- **Material-UI**: Versão 5.16.6
- **Axios**: Versão 1.7.2

## Configuração do Ambiente

Para executar o projeto localmente, siga os passos abaixo:

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/ThailanySantos/TESTE-HBI.git

2. Navegue até o Diretório do Projeto
    ```bash
    cd TESTE-HBI

3. Instale as Dependências
- Certifique-se de ter o Node.js instalado. Utilize o comando abaixo para instalar as dependências do projeto:
    ```bash
    npm install
- Dependências Adicionais

  - MUI (Material-UI): Para a biblioteca de componentes de interface.
    ```bash
    npm install @mui/material @emotion/react @emotion/styled
  - React Router Dom: Para a navegação entre páginas.
    ```bash
    npm install react-router-dom
  - React Hook Form: Para o gerenciamento de formulários.
    ```bash
    npm install react-hook-form 
  - React Hook Form: Para o gerenciamento de formulários.
    ```bash
    npm install axios

4. Execute o Projeto
Após a instalação das dependências, inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
O aplicativo será iniciado e estará disponível em http://localhost:5173.

## Estrutura do Projeto
- **src/Assets/somoshbi_logo.jfif:** Arquivo contendo a logo da empresa HBI, usada no Header.
- **src/Components/Footer/Footer.jsx:** Componente de rodapé com data atual.
- **src/Components/Footer/Footer.css:** Estilos para o componente de rodapé.
- **src/Components/Header/Header.jsx:** Componente de cabeçalho com logo e avatar.
- **src/Components/Header/Header.css:** Estilos para o componente de cabeçalho.
- **src/Pages/Home/HomePage.jsx:** Página inicial com um botão para navegação para a página de registro.
- **src/Pages/Home/HomePage.css:** Estilos para a página inicial.
- **src/Pages/Register/RegisterPage.jsx:** Página de registro com formulário para cadastro e validação de dados com a API de CEP.
- **src/Pages/Register/RegisterPage.css:** Estilos para a página de registro.
- **src/main.jsx:** Ponto de entrada principal do aplicativo React.

## API Utilizada
O projeto consome a API pública de CEP para validar e preencher informações de endereço.
- Endpoint: https://viacep.com.br/ws/{cep}/json/
- Método: GET
- Parâmetros: cep (Código Postal)
- Respostas Esperadas:
    - Sucesso: Dados de endereço (logradouro, bairro, localidade, UF)
    - Erro: Mensagem de erro se o CEP não for encontrado ou estiver inválido

## Materiais de Apoio Utilizados

### Documentações
- [Documentação do React](https://reactjs.org/docs/getting-started.html)
- [Material-UI Documentation](https://mui.com/getting-started/installation/)
- [Axios Documentation](https://axios-http.com/docs/intro)
- [React Router Documentation](https://reactrouter.com/docs/en/v6/getting-started/overview)
- [React Hook Form](https://react-hook-form.com/docs)
- [API Documentation](https://react-hook-form.com/docs)
- [(ViaCEP)](https://viacep.com.br/)

### Vídeos do YouTube
- [Como manipular dados de formulários no React JS](https://youtu.be/NtYO03Jq3EE?si=4HGUt23ERf0XLdqh)
- [A MELHOR FORMA de Criar FORMULÁRIOS no REACT | React Hook Form](https://youtu.be/qH272VSWje4?si=cPpdq7k2LJ66YZFw)
- [Como obter endereço via CEP API no React JS](https://youtu.be/155ywtYSpdY?si=1YFK_8XtKstDkLMU)
- [React JS Crash Course](https://youtu.be/w7ejDZ8SWv8?si=R6ubC6f8Eq9JT420)
- [Axios Crash Course | HTTP Library](https://www.youtube.com/watch?v=6LyagkoRWYA)
- [Learn React Router v6 In 45 Minutes](https://www.youtube.com/watch?v=Ul3y1LXxzdU)

### Outros
- [... mensagem de erro para cep inválido... - Alura](https://cursos.alura.com.br/forum/topico-ele-retorna-a-mesma-mensagem-de-erro-para-cep-invalido-e-inexistente-289712)
- [ChatGpt](https://chatgpt.com/)
- [Guia Completo React Router](https://www.freecodecamp.org/portuguese/news/um-guia-completo-de-react-router-para-iniciantes-incluindo-router-hooks/)

## Observações Finais
Certifique-se de seguir as instruções cuidadosamente para garantir que o projeto funcione corretamente em seu ambiente local. Para qualquer dúvida ou problema, consulte a documentação das tecnologias utilizadas.

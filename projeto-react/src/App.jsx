// Primeiro Sempre vem a Importação e Depois o Código;
// Recomenda-se sempre deixar as importações do Node e do React por primeiro;
import { useState } from "react";

import Perfil from "./components/Perfil";
// import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  // const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(false);
  const [repositoriosEstaoVisiveis, setRepositoriosEstaoVisiveis] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      {/* Podemos Criar Propriedades/Atributos Dentro dos Componentes */}
      {/* Tornando o Usuário um Item Dinâmico */}
      {/* O "onBlur" detecta alterações Somente Após Preencher e Clicar Fora do Campo */}
      <div className="container">
        <form style={{ display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center", padding: "50px 0 50px" }}>
          <div style={{ borderRadius: "8px", backgroundColor: "lightgray", padding: "24px" }}>
            <p style={{ fontSize: "24px", maxWidth: "300px", width: "100%" }}>Informe o Nome do Usuário Que Deseja Pesquisar</p>
            <input style={{ marginTop: "16px", backgroundColor: "lightgray", textAlign: "center", padding: "8px", maxWidth: "300px", width: "100%" }} type="text" onBlur={evento => setNomeUsuario(evento.target.value)} placeholder="Digite um Nome de Usuário" />
          </div>
        </form >
      </div >

      {
        nomeUsuario.length > 4 && (
          <>
            <Perfil nomeUsuario={nomeUsuario} />
            <ReposList nomeUsuario={nomeUsuario} />
          </>
        )
      }

      {/* Mostrando Item Conform Sua Condição */}
      {/* <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Mostrar/Esconder Formulário</button>
      {formularioEstaVisivel && (
        <Formulario />
      )} */}
    </>
  )
}

export default App

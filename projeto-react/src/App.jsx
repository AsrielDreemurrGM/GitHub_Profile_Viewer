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
      <input type="text" onBlur={evento => setNomeUsuario(evento.target.value)} placeholder="Digite um Nome de Usuário" />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* Mostrando Item Conform Sua Condição */}
      {/* <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Mostrar/Esconder Formulário</button>
      {formularioEstaVisivel && (
        <Formulario />
      )} */}
    </>
  )
}

export default App

// Primeiro Sempre vem a Importação e Depois o Código;
// Recomenda-se sempre deixar as importações do Node e do React por primeiro;
import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(false);
  const [repositoriosEstaoVisiveis, setRepositoriosEstaoVisiveis] = useState(false);
  return (
    <>
      {/* Podemos Criar Propriedades/Atributos Dentro dos Componentes */}
      <Perfil nome="Eduardo" endereco="https://github.com/AsrielDreemurrGM.png" />

      {/* Mostrando Itens com Base em Suas Condições */}
      <button style={{display: "block", marginBottom: "10px"}} onClick={() => setRepositoriosEstaoVisiveis(!repositoriosEstaoVisiveis)} type="button">Mostrar/Esconder Repositórios</button>
      {repositoriosEstaoVisiveis && (
        <ReposList />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Mostrar/Esconder Formulário</button>
      {formularioEstaVisivel && (
        <Formulario />
      )}
    </>
  )
}

export default App

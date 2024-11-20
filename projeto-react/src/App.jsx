// Primeiro Sempre vem a Importação e Depois o Código;
// Recomenda-se sempre deixar as importações do Node e do React por primeiro;
import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  return (
    <>
    {/* Podemos Criar Propriedades/Atributos Dentro dos Componentes */}
    <Perfil nome="Eduardo" endereco="https://github.com/AsrielDreemurrGM.png" />
    {/* Mostrando o Formulário com base na condição "FormularioEstaVisivel" */}
    
    {formularioEstaVisivel && (
      <Formulario />
    )}

    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Ativar/Desativar Formulário</button>
    </>
  )
}

export default App

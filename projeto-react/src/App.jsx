// Primeiro Sempre vem a Importação e Depois o Código;
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
    {/* Podemos Criar Propriedades/Atributos Dentro dos Componentes */}
    <Perfil nome="Eduardo" endereco="https://github.com/AsrielDreemurrGM.png" />
    <Formulario />
    </>
  )
}

export default App

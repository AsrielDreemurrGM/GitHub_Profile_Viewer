function App() {
  const nome = "Eduardo"

  function retornaNome() {
    return nome
  }

  const pessoa = {
    nome: "Maria"
  }

  let estaDeDia = true;

  return (
    // É necessário Sempre Encapsular os Elementos;
    // Utilizando Fragmentos "<></>" que são tags vazias; 
    // Ou utilizando tags de Encapsulamento como divs e headers;
    <>
    {/* Retornando valor com Função */}
    <h1>Olá, {retornaNome()}</h1>
    {/* Retornando Propriedade de Objeto */}
    <h1>Olá, {pessoa.nome}</h1>
    {/* Realizando retorno conforme uma Condição */}
    {estaDeDia ? 'Bom dia!' : 'Boa Noite!'}
    </>
  )
}

export default App

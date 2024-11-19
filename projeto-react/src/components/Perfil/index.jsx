// Importando o CSS não informamos o Nome do Arquivo, somente o Caminho;
import './perfil.css'

// Podemos Exportar o "default" destas maneiras também:
// export default function() {
// export default () => {
// Para acessar atributos fornecemos um argumento, chamado "props";
// Formas de Desestruturação da Props;
// const Perfil = ({ endereco, nome }) => {
const Perfil = (props) => {
    const { endereco, nome } = props;

    return (
        <div>
            {/* Convertendo um Objeto em String */}
            {/* {JSON.stringify(props)} */}
            {/* Para utilizarmos classes do CSS usamos a Palavra Reservada "className" */}
            <img className='perfil-avatar' src={endereco} alt="" />
            <h3 className='perfil-titulo'> {nome}</h3>
        </div>
    )
}

export default Perfil;
// Importando o CSS não informamos o Nome do Arquivo, somente o Caminho;
import './perfil.css'

// Podemos Exportar o "default" destas maneiras também:
// export default function() {
// export default () => {
const Perfil = () => {
    const usuario = {
        nome: 'Eduardo Augusto',
        avatar: 'https://github.com/AsrielDreemurrGM.png'
    }

    return (
        <div>
            {/* Para utilizarmos classes do CSS usamos a Palavra Reservada "className" */}
            <img className='perfil-avatar' src={usuario.avatar} alt="" />
            <h3 className='perfil-titulo'> {usuario.nome}</h3>
        </div>
    )
}

export default Perfil;
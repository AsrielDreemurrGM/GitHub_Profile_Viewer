import { useState } from "react"

const Formulario = () => {
    // Criando Estados Para Salvar os Valores;
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');

    const alteraNome = (evento) => {
        // console.log(evento.target.value);
        // Podemos acessar o setNome da seguinte maneira:
        // setNome(evento.target.value)
        // Porém também podemos ter acesso ao último valor, da seguinte maneira;
        setNome(nomeAnterior => {
            console.log(nomeAnterior);

            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado.</p>
            )
        } else {
            return (
                <p>Olá {nome}, você não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            {/* Retornando Valores com "onChange" */}
            <input type="number" placeholder="Nota Matéria A" onChange={(evento) => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota Matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            {/* Fazendo Desestruturação do Evento no "onChange" */}
            <input type="number" placeholder="Nota Matéria C" onChange={({ target }) => setMateriaC(parseInt(target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario
import { useState, useEffect } from "react";
// O "useEffect" serve para Executar um Código Específico
// Somente Quando Ocorrer a Atualização de um Estado;

const Formulario = () => {
    // Criando Estados Para Salvar os Valores;
    // Devemos sempre utilizar Constantes;
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    // Para utilizarmos o "useEffect";
    // useEffect(() => {
    //     console.log("O estado mudou");
    // })
    // Utilizando o "useEffect" com uma Condição;
    useEffect(() => {
        console.log("O Estado Nome Mudou");
    }, [nome]);

    // Utilizando o "useEffect" com Várias Condições;
    useEffect(() => {
        console.log("Uma ou Mais Matérias Foram Modificadas");
    }, [materiaA, materiaB, materiaC]);

    // Utilizando o "useEffect" para quando o Componente for Montado/Carregado;
    useEffect(() => {
        console.log("O Componente Terminou de Iniciar.");

        // Executando quando o Componente for Desmontado/Encerrado;
        return () => {
            console.log("O Componente Finalizou")
        }
    }, []);

    const alteraNome = (evento) => {
        // console.log(evento.target.value);
        // Podemos acessar o setNome da seguinte maneira:
        // setNome(evento.target.value)
        // Porém também podemos ter acesso ao último valor, da seguinte maneira;
        setNome(nomeAnterior => {
            // console.log(nomeAnterior);

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
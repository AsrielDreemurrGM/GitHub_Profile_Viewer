import { useState, useEffect } from "react";
// O "useEffect" serve para Executar um Código Específico
// Somente Quando Ocorrer a Atualização de um Estado;

const ReposList = () => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/AsrielDreemurrGM/repos')
            .then(resposta => resposta.json())
            .then(respostaJson => {
                setTimeout(() => {
                    setEstaCarregando(false)
                    setRepos(respostaJson);
                }, 2000);
            })
    }, [])

    return (
        <>
            <h3>Repositórios Públicos:</h3>
            {estaCarregando && (
                <h1>Carregando..</h1>
            )}
            <ul>
                {/* {repos.map(repositorio => ( */}
                {repos.map(({ id, name, language, html_url }) => (
                    // Todo item deve conter uma Chave (Key) Única;
                    <li key={id}>
                        <b>
                            Nome: {name} <br />
                        </b>
                        <b>
                            Linguagem: {language} <br />
                        </b>
                        <a target="_blank" href={html_url}>Visitar no GitHub</a> <br />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ReposList;
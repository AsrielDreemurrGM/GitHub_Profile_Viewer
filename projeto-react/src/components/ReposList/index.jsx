import { useState, useEffect } from "react";
// O "useEffect" serve para Executar um Código Específico
// Somente Quando Ocorrer a Atualização de um Estado;
import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [usuarioNaoEncontrado, setUsuarioNaoEncontrado] = useState(false);

    useEffect(() => {
        setEstaCarregando(true);
        // Recebendo Usuário Via Propriedade;
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(resposta => {
                if (!resposta.ok) {
                    throw new Error("Usuário Não Encontrado");
                }
                return resposta.json();
            })
            .then(respostaJson => {
                setTimeout(() => {
                    setRepos(respostaJson);
                    setEstaCarregando(false);
                }, 2000);
            })
            .catch(erro => {
                console.error("Erro ao buscar repositórios:", erro);
                setEstaCarregando(false);
                setUsuarioNaoEncontrado(true);
            })
    }, [nomeUsuario])

    return (
        <div className="container">
            {usuarioNaoEncontrado ? (
                <h1>Usuário Não Encontrado. <br/>Por favor, recarregue a página e tente novamente.</h1>
            ) : estaCarregando ? (
                <h1>Carregando...</h1>
            ) : repos.length === 0 ? (
                <h1>Nenhum repositório público encontrado.</h1>
            ) : (
                <div>
                    <h3>Repositórios Públicos:</h3>
                    <ul className={styles.list}>
                    {/* {repos.map(repositorio => ( */}
                    {repos.map(({ id, name, language, html_url }) => (
                        // Todo item deve conter uma Chave (Key) Única;
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b>
                                {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b>
                                {language}
                            </div>
                            <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no GitHub</a>
                        </li>
                    ))}
                </ul>
                </div>
            )}
        </div>
    )
}

export default ReposList;
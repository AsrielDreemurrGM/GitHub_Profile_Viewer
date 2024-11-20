import { useState, useEffect } from "react";
// O "useEffect" serve para Executar um Código Específico
// Somente Quando Ocorrer a Atualização de um Estado;
import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        // Recebendo Usuário Via Propriedade;
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(resposta => resposta.json())
            .then(respostaJson => {
                setTimeout(() => {
                    setEstaCarregando(false)
                    setRepos(respostaJson);
                }, 2000);
            })
    }, [nomeUsuario])

    return (
        <div className="container">
            <h3>Repositórios Públicos:</h3>
            {estaCarregando ? (
                <h1>Carregando..</h1>
            ) : (
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
            )}
        </div>
    )
}

export default ReposList;
import styles from "./botao.module.css"

export default function Botao (props) {
    return (
        <button className={styles.botao}><a className={styles.link} href={props.link} target="_blank" rel="noopener noreferrer">{props.nome}</a></button>
    )
}
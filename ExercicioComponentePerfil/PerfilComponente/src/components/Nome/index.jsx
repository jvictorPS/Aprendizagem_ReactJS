import styles from "./nome.module.css"

export default function Nome({nome}) {
    return (
        <div className={styles.nome}>{nome}</div>
    )
}
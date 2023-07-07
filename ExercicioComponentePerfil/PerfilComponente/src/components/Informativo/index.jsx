import styles from "./informativo.module.css"

export default function Informativo({informacao}) {
    return (
        <div className={styles.container}>
            <p className={styles.texto}>{informacao}</p>
        </div>
    )
}
import styles from "./foto.module.css"

export default function Foto({foto}) {
    return (
        <img className={styles.foto} src={foto} alt="foto de perfil" />
    )
}
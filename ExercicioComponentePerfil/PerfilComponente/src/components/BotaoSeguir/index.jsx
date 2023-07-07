import styles from './seguir.module.css'

export default function BotaoSeguir() {

    function seguir() {
        alert('Você está seguindo este usuario')
    }

    return (
        <button className={styles.seguir} onClick={seguir}>Seguir</button>
    )
}
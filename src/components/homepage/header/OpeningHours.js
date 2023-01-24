import styles from './OpeningHours.module.css'

const OpeningHours = () => {
    return(
        <div className={styles.openingHours}>
            <h3 className={styles.content}>Od wtorku do niedzieli restauracja czynna 13.00 - 21.30 <span className={styles.welcome}>Zapraszamy!</span></h3>
        </div>
    )
}

export default OpeningHours;
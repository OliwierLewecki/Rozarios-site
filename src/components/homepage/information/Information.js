import styles from './Information.module.css'
import image from '../../../images/chef-image.jpg'

const Information = () => {
    return(
        <section className={styles.informationSection}>
            <div className={styles.chefImageWrapper}>
                <img src={image} alt="Chef image" className={styles.chefImage} />
            </div>
            <article className={styles.articleInformation}>
                <h3 className={styles.title}>Historia</h3>
                <p className={styles.paragraph}>Restauracja Rozario's mieści się przy Al. Ks. Kard. Stefana Wyszyńskiego 67. Powstała w 1999 roku i bardzo szybko zdobyła uznanie zarówno wśród mieszkańców Retkinia jak i gości z najdalszych zakątków Łodzi.</p>
                <p className={styles.paragraph}>W Steakhouse Rozario's można zjeść najlepsze w Łodzi steki, dania BBQ oraz wyśmienitą pizzę. Wszystkie dania przygotowywane są na bieżąco, z najwyżeszej jakości produktów i z ogromną starannością na oczach naszych gości</p>
                <p className={styles.paragraph}>Połączenie dobrej kuchni oraz miłej obsługi gwarantują, iż czas spędzony u nas pozostanie długo w Państwa pamięci. Atmosfera lokalu przypadnie do gustu zarówno młodszym jak i starszym gościom. Każdy znajdzie tu coś dla siebie!</p>
            </article>
        </section>
    )
}

export default Information;
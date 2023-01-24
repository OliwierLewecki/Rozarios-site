import styles from './Footer.module.css'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
const Footer = () => {
    return(
        <footer className={styles.mainFooter}>
            <iframe className={styles.googleMaps} title="Google maps Rozarios"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2470.3825855642326!2d19.38695831630484!3d51.74432730117232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a35654613f4ed%3A0xe8906e940452484e!2sRozario&#39;s!5e0!3m2!1spl!2spl!4v1643302155950!5m2!1spl!2spl"
                    width="45%"  allowFullScreen=""
                    loading="lazy"></iframe>
            <div className={styles.footerContent}>
                <div className={styles.infoWrapper}>
                    <p className={styles.infoItem}>Al.Ks.Kard. Wyszyńskiego 67</p>
                    <p className={styles.infoItem}>94-047 Łódź</p>
                    <p className={styles.infoItem}>
                        <a href="tel:+426890951" className={styles.footerLink}>42 689 09 51 (52)</a>
                    </p>
                </div>
                <div className={styles.socialsWrapper}>
                    <p className={styles.socialItem}>
                        main: <a href="mailto:rozarios@rozarios.pl" className={styles.footerLink}>rozarios@rozarios.pl</a>
                    </p>
                    <p className={styles.socialItem}>
                        instagram: <a href="#" className={styles.footerLink}>instagram.rozarios</a>
                    </p>
                </div>
                <div className={styles.socialsMediaWrapper}>
                    <a href="https://www.facebook.com/Steakhouse-Rozarios-222267511282380/" target="_blank" className={styles.link}>
                        <FaFacebookF className={styles.facebookIcon} />
                    </a>
                    <a href="https://www.instagram.com/steakhouserozarios/" target="_blank" className={styles.link}>
                        <FaInstagram className={styles.instagramIcon} />
                    </a>
                </div>
                <div className={styles.authorWrapper}>
                    <h5 className={styles.description}>
                        Created by <a href="" target="_blank" className={styles.author}>Oliwier Lewecki</a>
                    </h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
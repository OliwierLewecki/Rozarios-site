import MainNav from "../../../routes/MainNav";
import OpeningHours from "./OpeningHours";
import styles from './Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <div className={styles.mainHeader}>
            <header className={styles.headerWrapper}>
                <div className={styles.headerContent}>
                    <h1 className={styles.title}>Rozarios's Steakhouse</h1>
                    <p className={styles.text}>W "Steakhouse Rozarios" można zjeść najlepsze w Łodzi steki. Wszystkie dania przygotowane są na bieżąco, z najwyższej jakości składników.</p>
                    <div className={styles.headerNav}>
                        <Link className={styles.link} to="/menu"k>Menu</Link>
                        <Link className={styles.link} to="/lokalizacja">Lokalizacja</Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
import {Link} from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import styles from './MainNav.module.css'
import OpeningHours from "../components/homepage/header/OpeningHours";
const MainNav = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    return(
        <>
            <OpeningHours />
            <nav className={styles.mainNav}>
                <ul className={styles.navList}>
                    <li className={styles.item}>
                        <Link className={splitLocation[1] === "" ? `${styles.link} ${styles.active}` : `${styles.link}`} to="/">Strona główna</Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={splitLocation[2] === "" ? `${styles.link} ${styles.active}` : `${styles.link}`} to="/menu">Menu</Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={splitLocation[3] === "" ? `${styles.link} ${styles.active}` : `${styles.link}`} to="/w-srodku">W środku</Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={splitLocation[4] === "" ? `${styles.link} ${styles.active}` : `${styles.link}`} to="lokalizacja">Lokalizacja</Link>
                    </li>
                    <button className={styles.menuBar}>
                        <GiHamburgerMenu />
                    </button>
                </ul>
            </nav>
        </>

    )
}
export default MainNav;
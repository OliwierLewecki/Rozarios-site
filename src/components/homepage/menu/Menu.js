import { IoIosArrowDown } from "react-icons/io";
import styles from './Menu.module.css'
import Item from "./Item";

const Menu = () => {
    const listDisable = (e) => {
        e.target.nextElementSibling.classList.toggle(`${styles.active}`)
        e.target.lastChild.classList.toggle(`${styles.active}`)
        e.target.classList.toggle(`${styles.active}`);
    }
    return(
        <div className={styles.menuLayout}>
            <h2 className={styles.title}>Nasze menu</h2>
            <div className={styles.menu}>
                <div className={styles.menuWrapper}>
                    <div className={styles.menuTitleWrapper} onClick={listDisable}>
                        <h4 className={styles.title}>Małe co nieco</h4>
                        <IoIosArrowDown className={styles.icon} />
                    </div>
                    <div className={styles.listDisable}>
                        <Item text="1. Quesadilla pszenna tortilla wypełniona roztopionym serem z szynką lub szpinakiem, sos taco" price='28.10' />
                        <Item text="2. Ślimaki z gorącego pieca w maśle czosnkowym, grzanki ziołowe" price='29.50' />
                    </div>
                </div>
                <div className={styles.menuWrapper} onClick={listDisable}>
                    <div className={styles.menuTitleWrapper}>
                        <h4 className={styles.title}>Zupy</h4>
                        <IoIosArrowDown className={styles.icon} />
                    </div>
                    <div className={styles.listDisable}>
                        <Item text="3. Zupa pomidorowa z domowym makaronem lub ryżem" price='17.90' />
                        <Item text="4. Zupa cebulowa z grzanką serową" price='19.90' />
                    </div>
                </div>
                <div className={styles.menuWrapper} onClick={listDisable}>
                    <div className={styles.menuTitleWrapper}>
                        <h4 className={styles.title}>Sałatki</h4>
                        <IoIosArrowDown className={styles.icon} />
                    </div>
                    <div className={styles.listDisable}>
                        <Item text="5. Rozario's: sałatka z kurczakiem mix sałat, ogórek, pomidor, krążki cebuli, papryka, suszone pomidory, paseczki pieczonego kurczaka, ziarno prażonego słonecznika, pestki dyni" price='34.90' />
                        <Item text="6. Gambas: sałatka z krewetkami mix sałat, ogórek, pomidor, krążki cebuli, papryka, suszone pomidory, krewetki z patelni (10 sztuk), ziarno prażonego słonecznika, pestki dyni" price='42.90' />
                        <Item text="7. Dos quesos: sałatka z dwoma rodzajami sera mix sałat, ogórek, pomidor, krążki cebuli, papryka, suszone pomidory, sery, ziarno prażonego słonecznika, pestki dyni" price='34.90' />
                        <Item text="8. Sałatka Szefa: sałatka z serem i szynką mix sałat, ogórek, pomidor, krążki cebuli, papryka, gotowane jajko, suszone pomidory, ser żółty i szynka „Krakus”, ziarno prażonego słonecznika, pestki dyni" price='34.90' />
                    </div>
                </div>
                <div className={styles.menuWrapper} onClick={listDisable}>
                    <div className={styles.menuTitleWrapper}>
                        <h4 className={styles.title}>Dla dzieci</h4>
                        <IoIosArrowDown className={styles.icon} />
                    </div>
                    <div className={styles.listDisable}>
                        <Item text="9. Domowe leniwe kluski z topionym masłem, cukrem trzcinowym i cynamonem" price='24.00' />
                        <Item text="10. Kotlet schabowy, frytki, surówka" price='26.10' />
                    </div>
                </div>
                <div className={styles.menuWrapper} onClick={listDisable}>
                    <div className={styles.menuTitleWrapper}>
                        <h4 className={styles.title}>Fajitas</h4>
                        <IoIosArrowDown className={styles.icon} />
                    </div>
                    <div className={styles.listDisable}>
                        <Item text="11. Fajitas z kurczaka grillowane paseczki mięsa z kurczaka z papryką, cebulą i jalapeno" price='47.90' />
                        <Item text="12. Fajitas z wieprzowiny grillowane paseczki mięsa z wieprzowiny z papryką, cebulą i jalapeno" price='47.90' />
                    </div>
                </div>
                <div className={styles.menuWrapper} onClick={listDisable}>
                    <div className={styles.menuTitleWrapper}>
                        <h4 className={styles.title}>Dania główne</h4>
                        <IoIosArrowDown className={styles.icon} />
                    </div>
                    <div className={styles.listDisable}>
                        <Item text="13. Grillowany filet z kurczaka" price='33.90' />
                        <Item text="14. Żeberka BBQ pieczone żeberka w pikantno-miodowej zalewie" price='54.80' />
                        <Item text="15. Grillowane plastry schabu z masłem czosnkowym" price='35.20' />
                        <Item text="16. Shoarma wieprzowa lub z kurczaka, dwa dowolne sosy" price='37.90' />
                        <Item text="17. Shoarma wieprzowa lub z kurczaka zapiekana z serem, dwa dowolne sosy" price='39.90' />
                        <Item text="" price='' />
                    </div>
                </div>
                <div className={styles.menuWrapper} onClick={listDisable}>
                    <div className={styles.menuTitleWrapper}>
                        <h4 className={styles.title}>Dania wegańskie</h4>
                        <IoIosArrowDown className={styles.icon} />
                    </div>
                    <div className={styles.listDisable}>
                        <Item text="26. Wegańskie ostre curry" price='44.90' />
                    </div>
                </div>
                <div className={styles.menuWrapper} onClick={listDisable}>
                    <div className={styles.menuTitleWrapper}>
                        <h4 className={styles.title}>Ryby i owoce morza</h4>
                        <IoIosArrowDown className={styles.icon} />
                    </div>
                    <div className={styles.listDisable}>
                        <Item text="24. Łosoś pieczony z masłem musztardowym, smażony młody szpinak, ryż jaśminowy" price='58.80' />
                        <Item text="25. Krewetki królewskie (10 sztuk) z gorącego talerza, pieczywo czosnkowe." price='45.80' />
                    </div>
                </div>
                <div className={styles.menuWrapper} onClick={listDisable}>
                    <div className={styles.menuTitleWrapper}>
                        <h4 className={styles.title}>Steaki</h4>
                        <IoIosArrowDown className={styles.icon} />
                    </div>
                    <div className={styles.listDisable}>
                        <Item text="18. Rozario’s steak: plaster polędwicy (200g) z grilla, masło czosnkowe" price='76.80' />
                        <Item text="19. Aztek steak: grillowany rostbef (200g) z masłem czosnkowym" price='59.80' />
                        <Item text="20. Romanian steak: rostbef (200g) w marynacie z musztardy Dijon i miodu spadziowego Cheddar Cheese Jalapeno steak z dodatkiem ziół, plastry grillowanego bekonu" price='63.80' />
                        <Item text="21.Cheddar Cheese Jalapeno steak: grilowany rostbef (200g) zapiekany z papryczką Jalapeno i serem Chedar" price='63.80' />
                        <Item text="22. Steak & Gambas: grillowany plaster rostbefu (200g) a do tego 5 krewetek z patelni smażonych na maśle czosnkowym" price='63.80' />
                        <Item text="23. Steak z Angusa urugwajskiego: steak z Angusa urugwajskiego (200g) z masłem czosnkowym" price='59.80' />
                    </div>
                </div>
            </div>
        </div>
    )
}


{/*<Item text="" price='' />*/}


export default Menu;
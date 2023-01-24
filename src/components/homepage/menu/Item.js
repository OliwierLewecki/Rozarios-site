import styles from './Item.module.css'

const Item = ({text, price}) => {
    return(
        <ul>
            <li className={styles.list}>
                <h4 className={styles.listText}>{text}</h4>
                <h5>{price}zł</h5>
            </li>
        </ul>
    )
}

export default Item;
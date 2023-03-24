import styles from "../Price/Price.module.css"

function Price({
    passType,
    price,
}) {
    return (
        <tr className={styles['table-info']}>
            <td>{passType}</td>
            <td>{price} lv</td>
        </tr>
    );
}

export default Price;
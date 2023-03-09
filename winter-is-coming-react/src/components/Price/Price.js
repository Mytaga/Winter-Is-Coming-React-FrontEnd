function Price({
    passType,
    price,
}) {
    return (
        <tr className="table-info">
            <td>{passType}</td>
            <td>{price} lv</td>
        </tr>
    );
}

export default Price;
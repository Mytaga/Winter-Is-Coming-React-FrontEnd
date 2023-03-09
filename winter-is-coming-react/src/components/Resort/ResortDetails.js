import Price from "../Price/Price";
import styles from "../Resort/ResortDetails.module.css";

function ResortDetails({
    name,
    countryName,
    elevation,
    description,
    numberOfSlopes,
    likes,
    skiAreaSize,
    onClose,
    liftPrices,
}
) {
    return (
        <div className="modal" id="detailsModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className={`${styles['content']} modal-content`}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{countryName} - {name}</h5>
                    </div>
                    <div className={`${styles['body']} modal-body`}>
                        <p>ELEVATION: <strong>{elevation} m</strong></p>
                        <p>DESCRIPTION: <strong>{description}</strong></p>
                        <p>NUMBER OF SLOPES: <strong>{numberOfSlopes}</strong></p>
                        <p>SKI AREA: <strong>{skiAreaSize} km</strong></p>
                        <p>LIKES: <strong>{likes}</strong></p>
                        <table class={`${styles['table']} table table-sm`}>
                            <thead>
                                <tr>
                                    <th scope="col">Card Type</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {liftPrices.map((p) => (
                                    <Price
                                        key={p.passType}
                                        {...p}
                                    />))}
                            </tbody>
                        </table>
                    </div>
                    <div className={`${styles['footer']} modal-footer`}>
                        <button type="button" onClick={() => onClose()} className={`${styles['button']} btn btn-primary btn-lg`} data-mdb-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResortDetails;
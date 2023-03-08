function ResortDetails({
    name,
    countryName,
    elevation,
    description,
    numberOfSlopes,
    likes,
    skiAreaSize,
    onClose,
}
) {
    return (
        <div className="modal" id="detailsModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{countryName} - {name}</h5>
                    </div>
                    <div className="modal-body">
                        <p>ELEVATION: <strong>{elevation} m</strong></p>
                        <p>DESCRIPTION: <strong>{description}</strong></p>
                        <p>NUMBER OF SLOPES: <strong>{numberOfSlopes}</strong></p>
                        <p>SKI AREA: <strong>{skiAreaSize} km</strong></p>
                        <p>LIKES: <strong>{likes}</strong></p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={() => onClose()} className="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResortDetails;

const Resort = (props) => {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={props.image} className="card-img-top" alt="Skyscrapers" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">
                        {props.country}
                        {props.elevation}
                    </p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{props.likes}</small>
                </div>
            </div>
        </div>
    );
}

export default Resort;
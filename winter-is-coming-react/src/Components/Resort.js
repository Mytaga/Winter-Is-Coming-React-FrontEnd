function Resort({
    imageUrl,
    name,
    elevation,
    countryName,
    likes,
}){
    return (
        <div className="col">
            <div className="card h-100">
                <img src={imageUrl} className="card-img-top" alt="Skyscrapers" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        {countryName}
                        {elevation}
                    </p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{likes}</small>
                </div>
            </div>
        </div>
    );
}

export default Resort;
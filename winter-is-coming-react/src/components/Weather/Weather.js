import styles from "../Weather/Weather.module.css";

export const Weather = ({
    name,
}) => {
    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-8 col-lg-6 col-xl-4">
                    <div className={`${styles['card']} card`}>
                        <div className="card-body p-4">
                            <div className="d-flex">
                                <h6 className="flex-grow-1">{name}</h6>
                                <h6>15:07</h6>
                            </div>
                            <div className="d-flex flex-column text-center mt-5 mb-4">
                                <h6 className={`${['header']} display-4 mb-0 font-weight-bold`}> 13°C </h6>
                                <span className={`${styles['span']} small`}>Stormy</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className={`${styles['div']} flex-grow-1`}>
                                    <div><i className={`${styles['wind']} fas fa-wind fa-fw`}></i> <span className="ms-1"> 40 km/h
                                    </span></div>
                                    <div><i className={`${styles['humidity']} fas fa-tint fa-fw`}></i> <span className="ms-1"> 84% </span>
                                    </div>
                                    <div><i className={`${styles['sun']} fas fa-sun fa-fw`}></i> <span className="ms-1"> 0.2h </span>
                                    </div>
                                </div>
                                <div>
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp" width="100px" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
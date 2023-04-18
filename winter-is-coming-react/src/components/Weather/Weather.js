import { useEffect, useState } from "react";

import * as weatherService from "../../services/weatherService";

import styles from "../Weather/Weather.module.css";


export const Weather = ({
    resort,
}) => {

    const [weather, setWeather] = useState({});

    useEffect(() => {
        weatherService.getDaily(resort.name)
            .then(weather => {
                setWeather(weather)
            })
            .catch(error => console.log(error))
    }, [resort.name]);

    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-8 col-lg-6 col-xl-4">
                    <div className={`${styles['card']} card`}>
                        <div className="card-body p-4">
                            <div className="d-flex">
                                <h6 className="flex-grow-1">{resort.name}</h6>
                                <h6>{weather.datetime}</h6>
                            </div>
                            <div className="d-flex flex-column text-center mt-5 mb-4">
                                <h6 className={`${['header']} display-4 mb-0 font-weight-bold`}>{weather.temp} °C</h6>
                                <span className={`${styles['span']} small`}>{weather.conditions}</span>
                                <span className={`${styles['span']} small`}>Feels like : {weather.feelslike} °C</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className={`${styles['div']} flex-grow-1`}>
                                    <div><i className={`${styles['wind']} fas fa-wind fa-fw`}></i> <span className="ms-1">{weather.windspeed} km/h</span>
                                    </div>
                                    <div><i className={`${styles['humidity']} fas fa-tint fa-fw`}></i> <span className="ms-1">{weather.humidity} % </span>
                                    </div>
                                    <div><i className={`${styles['sun']} fas fa-sun fa-fw`}></i> <span className="ms-1">{weather.solarenergy} h </span>
                                    </div>
                                    <div><i className={`${styles['snow']} fas fa-snowflake`}></i> <span className="ms-1">{weather.snow} cm </span>
                                    </div>
                                </div>
                                <div>
                                    <img src={weather.icon} width="100px" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
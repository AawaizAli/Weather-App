import './current-weather.css'

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="img-container">
                <img src="../../../public/icons/01d.png" alt="weather" className="weather-icon" />
            </div>
            <div className="top">
                <p className="city">Karachi</p>
                <p className="weather-description">Very Hot</p>
            </div>
        </div>
    );
}

export default CurrentWeather;
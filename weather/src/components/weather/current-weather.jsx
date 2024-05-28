import "./current-weather.css";

const CurrentWeather = () => {
    return (
        <div className="weather">
            
            <div className="temperature">
                <p className="number">22</p>
                <p className="degree-celcius">°</p>
            </div>

            <p className="city">Karachi</p>
            <div className="bottom-row">
                <div className="humidity">
                    <p className="title">Humidity:</p>
                    <p className="content">55%</p>
                </div>
                <div className="feels-like">
                    <p className="title">Feels Like:</p>
                    <p className="content">60°</p>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;

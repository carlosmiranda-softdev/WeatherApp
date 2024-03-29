import React, { useState } from "react";
import Header from "./components/Header";
import WeatherCondition from "./components/WeatherCondition";
import WeatherPrediction from "./components/WeatherPrediction";
import WeatherDay from "./components/WeatherDay";
import WeatherImages from "./components/WeatherImagesPred";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import setWeatherImgs from "./utils/setImages";
import setBg from "./utils/setRootBg";
import setWeatherHour from "./utils/setHour";

export default function App() {

    const [data, setData] = useState({});
    const date = new Date();
    const hour = date.getHours();
    const [city, setCity] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const KEY = process.env.API_KEY;

    function handleChange(event) {
        setCity(event.target.value);
    };

    function handleCLick(event) {
        event.preventDefault();
        if (city != "") {
            fetch(`https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${city}&days=3`)
                .then(res => res.json())
                .then(data => {
                    setData(data);
                    setIsLoading(false);
                });
        }
    };

    return (
        <main className="flex-style">
            <div id="date-local">
                {`${hour}:${date.getMinutes()}`}
            </div>
            <section id="head-info" className="flex-style">
                <div id="search" className="flex-style">
                    <input id="search-box"
                        type="text" name="city" onChange={handleChange}
                        value={city} placeholder="Search location" required
                    />
                    <MdOutlineAddLocationAlt id="search-icon" className="icon" />
                    <button onClick={handleCLick} className="text-center">Search</button>
                </div>
            </section>
            {isLoading ? "" :
                data.error ? "" : setBg(data.current.condition.text)}
            {isLoading ? "" :
                data.error ? "" :
                    data.location.name &&
                    <section id="weather-info" className="flex-style">
                        <div id="col" className="flex-style">
                            <Header class="flex-style"
                                source={
                                    isLoading ? "" :
                                        setWeatherImgs(data.current.condition.text)
                                }
                                alt="weather widget"
                                wText={
                                    isLoading ? "...°C / ...°F" :
                                        `${data.current.temp_c}°C / ${data.current.temp_f}°F`
                                }
                                hText={
                                    isLoading ? "..." :
                                        `${data.current.condition.text}`
                                }
                                location={
                                    isLoading ? "..." :
                                        `${data.location.name}, ${data.location.country}`
                                }
                            />
                            <div id="weather-condition" className="flex-style">
                                <WeatherCondition
                                    hourText={
                                        hour < 19 ? setWeatherHour(hour) : "19pm"
                                    }
                                    tempText={
                                        isLoading ? "." :
                                            hour < 19 ?
                                                data.forecast.forecastday[0].hour[hour].temp_c :
                                                hour >= 19 ?
                                                    data.forecast.forecastday[0].hour[19].temp_c : ""
                                    }
                                    source={
                                        isLoading ? "" :
                                            hour < 19 ?
                                                setWeatherImgs(data.forecast.forecastday[0].hour[hour].condition.text) :
                                                hour >= 19 ?
                                                    setWeatherImgs(data.forecast.forecastday[0].hour[19].condition.text) : ""
                                    }
                                    alt="weather widget"
                                />
                                <WeatherCondition
                                    hourText={
                                        hour < 19 ? setWeatherHour(hour + 1) : "20pm"
                                    }
                                    tempText={
                                        isLoading ? "." :
                                            hour < 19 ?
                                                data.forecast.forecastday[0].hour[hour].temp_c :
                                                hour >= 19 ?
                                                    data.forecast.forecastday[0].hour[20].temp_c : ""
                                    }
                                    source={
                                        isLoading ? "" :
                                            hour < 19 ?
                                                setWeatherImgs(data.forecast.forecastday[0].hour[hour].condition.text) :
                                                hour >= 19 ?
                                                    setWeatherImgs(data.forecast.forecastday[0].hour[20].condition.text) : ""
                                    }
                                    alt="weather widget"
                                />
                                <WeatherCondition
                                    hourText={
                                        hour < 19 ? setWeatherHour(hour + 2) : "21pm"
                                    }
                                    tempText={
                                        isLoading ? "." :
                                            hour < 19 ?
                                                data.forecast.forecastday[0].hour[hour].temp_c :
                                                hour >= 19 ?
                                                    data.forecast.forecastday[0].hour[21].temp_c : ""
                                    }
                                    source={
                                        isLoading ? "" :
                                            hour < 19 ?
                                                setWeatherImgs(data.forecast.forecastday[0].hour[hour].condition.text) :
                                                hour >= 19 ?
                                                    setWeatherImgs(data.forecast.forecastday[0].hour[21].condition.text) : ""
                                    }
                                    alt="weather widget"
                                />
                                <WeatherCondition
                                    hourText={
                                        hour < 19 ? setWeatherHour(hour + 3) : "22pm"
                                    }
                                    tempText={
                                        isLoading ? "." :
                                            hour < 19 ?
                                                data.forecast.forecastday[0].hour[hour].temp_c :
                                                hour >= 19 ?
                                                    data.forecast.forecastday[0].hour[22].temp_c : ""
                                    }
                                    source={
                                        isLoading ? "" :
                                            hour < 19 ?
                                                setWeatherImgs(data.forecast.forecastday[0].hour[hour].condition.text) :
                                                hour >= 19 ?
                                                    setWeatherImgs(data.forecast.forecastday[0].hour[22].condition.text) : ""
                                    }
                                    alt="weather widget"
                                />
                                <WeatherCondition
                                    hourText={
                                        hour < 19 ? setWeatherHour(hour + 4) : "23pm"
                                    }
                                    tempText={
                                        isLoading ? "." :
                                            hour < 19 ?
                                                data.forecast.forecastday[0].hour[hour].temp_c :
                                                hour >= 19 ?
                                                    data.forecast.forecastday[0].hour[23].temp_c : ""
                                    }
                                    source={
                                        isLoading ? "" :
                                            hour < 19 ?
                                                setWeatherImgs(data.forecast.forecastday[0].hour[hour].condition.text) :
                                                hour >= 19 ?
                                                    setWeatherImgs(data.forecast.forecastday[0].hour[23].condition.text) : ""
                                    }
                                    alt="weather widget"
                                />
                            </div>
                        </div>
                        <div id="condition-prediction" className="flex-style">
                            <WeatherDay
                                text1="Today" text2="Tomorrow"
                                text3="Day after tomorrow"
                            />
                            <hr />
                            <WeatherImages
                                source1={
                                    isLoading ? "" :
                                        setWeatherImgs(data.forecast.forecastday[0].hour[10].condition.text)
                                }
                                alt1="weather widget"
                                source2={
                                    isLoading ? "" :
                                        setWeatherImgs(data.forecast.forecastday[0].hour[18].condition.text)
                                }
                                alt2="weather widget"
                                source3={
                                    isLoading ? "" :
                                        setWeatherImgs(data.forecast.forecastday[1].hour[10].condition.text)
                                }
                                alt3="weather widget"
                                source4={
                                    isLoading ? "" :
                                        setWeatherImgs(data.forecast.forecastday[1].hour[18].condition.text)
                                }
                                alt4="weather widget"
                                source5={
                                    isLoading ? "" :
                                        setWeatherImgs(data.forecast.forecastday[2].hour[10].condition.text)
                                }
                                alt5="weather widget"
                                source6={
                                    isLoading ? "" :
                                        setWeatherImgs(data.forecast.forecastday[2].hour[18].condition.text)
                                }
                                alt6="weather widget"
                            />
                            <hr />
                            <WeatherPrediction
                                text1={
                                    isLoading ? "..." :
                                        `${data.forecast.forecastday[0].day.mintemp_c}°C`
                                }
                                text2={
                                    isLoading ? "..." :
                                        `${data.forecast.forecastday[0].day.maxtemp_c}°C`
                                }
                                text3={
                                    isLoading ? "..." :
                                        `${data.forecast.forecastday[1].day.mintemp_c}°C`
                                }
                                text4={
                                    isLoading ? "..." :
                                        `${data.forecast.forecastday[1].day.maxtemp_c}°C`
                                }
                                text5={
                                    isLoading ? "..." :
                                        `${data.forecast.forecastday[2].day.mintemp_c}°C`
                                }
                                text6={
                                    isLoading ? "..." :
                                        `${data.forecast.forecastday[2].day.maxtemp_c}°C`
                                }
                            />
                        </div>
                    </section>
            }
        </main>
    )
}
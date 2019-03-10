import React from "react";

const Weather = props => (
  <div className="weather__info">
    {props.city && props.country && (
      <p className="location">
        {props.city}, {props.country}
      </p>
    )}
    {props.date && <p className="weather-date">{props.date}</p>}
    {props.time && (
      <p className="weather-date">
        {props.time.getHours()}:{props.time.getMinutes()}:
        {props.time.getSeconds()}
      </p>
    )}
    {props.icon && (
      <p className="weather__key">
        <span>
          <img
            width="150"
            src={`http://openweathermap.org/img/w/${props.icon}.png`}
            aria-hidden
            alt="Sky Condition Image"
          />
        </span>
      </p>
    )}
    {props.temperature && (
      <p className="weather-details">
        Temperature:
        <span className="temp-measurement">{props.temperature}</span>
        <span className="temp-unit">°C</span>
      </p>
    )}
    {props.tempMax && (
      <p className="weather-details">
        <span className="max-temp">
          <i className="mdi mdi-arrow-up" />
          Max. Temperature: {props.tempMax}°C
        </span>
      </p>
    )}
    {props.tempMin && (
      <p className="weather-details">
        <span className="min-temp">
          <i className="mdi mdi-arrow-down" />
          Min. Temperature: {props.tempMin}°C
        </span>
      </p>
    )}
    {props.humidity && (
      <p className="weather-details">
        Humidity:
        <span className="weather__value"> {props.humidity}% </span>
      </p>
    )}
    {props.pressure && (
      <p className="weather-details">
        Pressure:
        <span className="weather__value"> {props.pressure} hpa </span>
      </p>
    )}
    {props.windSpeed && (
      <p className="weather-details">
        Wind Speed:
        <span className="weather__value"> {props.windSpeed} m/s </span>
      </p>
    )}
    {props.description && (
      <p className="weather-details">
        Conditions:
        <span className="weather_des"> {props.description} </span>
      </p>
    )}
    {props.error && <p className="weather-details">{props.error}</p>}
  </div>
);

export default Weather;

import React, { Component } from "react";
import Titles from "./Titles";
import Form from "./Form";
import Weather from "./Weather";

class Day2 extends Component {
  state = {
    city: undefined,
    country: undefined,
    time: undefined,
    date: undefined,
    icon: undefined,
    temperature: undefined,
    tempMin: undefined,
    tempMax: undefined,
    humidity: undefined,
    pressure: undefined,
    windSpeed: undefined,
    description: undefined,
    error: undefined
  };
  update() {
    this.setState({
      time: new Date(),
      date:
        new Date().getMonth() +
        1 +
        "-" +
        new Date().getDate() +
        "-" +
        new Date().getFullYear()
    });
  }
  getWeather = async e => {
    const city = "Miami";
    const country = "US";
    navigator.geolocation.getCurrentPosition(function(location) {});
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=d94f810c218fa367514761ac7f7bc5bc`
    );
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        icon: data.weather[0].icon,
        temperature: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        windSpeed: data.wind.speed,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        error: "Please enter the values."
      });
    }
  };

  componentWillMount() {
    this.getWeather();
    this.intId = setInterval(() => {
      this.update();
    }, 1000);
  }

  render() {
    return (
      <div className="weather-container">
        <h3 className="weather-title">
          <Titles />
        </h3>
        <img
          src="https://www.freeiconspng.com/uploads/location-icon-png-21.png"
          aria-hidden
          alt="Location Image"
          width="11"
        />
        <span className="weather-location-name">
          <Form getWeather={this.getWeather} />
        </span>
        <Weather
          city={this.state.city}
          country={this.state.country}
          time={this.state.time}
          date={this.state.date}
          icon={this.state.icon}
          temperature={Math.ceil(this.state.temperature - 273)}
          tempMax={Math.ceil(this.state.tempMax - 273)}
          tempMin={Math.ceil(this.state.tempMin - 273)}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
          windSpeed={this.state.windSpeed}
          description={this.state.description}
          error={this.state.error}
        />
        <hr />
        <div>
          <button type="button" className="btn btn-primary">
            Primary
          </button>
          <button type="button" className="btn btn-secondary">
            Secondary
          </button>
          <button type="button" className="btn btn-success">
            Success
          </button>
          <button type="button" className="btn btn-danger">
            Danger
          </button>
          <button type="button" className="btn btn-warning">
            Warning
          </button>
          <button type="button" className="btn btn-info">
            Info
          </button>
          <button type="button" className="btn btn-light">
            Light
          </button>
        </div>
      </div>
    );
  }
}

export default Day2;

import React from "react";
import { Card } from "semantic-ui-react";

const Weather = (weatherData) => {

  return(
    <>
  <Card>
    <Card.Content>
      <div className="main">
      {console.log(weatherData)}     

        <div className="flex">
          {
          console.log(weatherData.weatherData.base)
          // console.log("hek")
          }
          <p className="temp">Temprature: {weatherData.weatherData.main.temp} &deg;C</p>
          <p className="temp">Latitude: {weatherData.weatherData.coord.lon} </p>
          <p className="temp">longitude: {weatherData.weatherData.coord.lat} </p>
          <p className="temp">Place name: {weatherData.weatherData.name} </p>
          <p className="temp">Weather : {weatherData.weatherData.weather[0].main} </p>
          <p className="temp">weather description: {weatherData.weatherData.weather[0].description} </p>
          <p className="temp">pressure: {weatherData.weatherData.main.pressure}</p>
          <p className="temp">Humidity: {weatherData.weatherData.main.humidity}</p>
          <p className="temp">Wind Speed: {weatherData.weatherData.wind.speed}</p>
          <p className="temp">Wind angle: {weatherData.weatherData.wind.deg} deg</p>


        </div>

      </div>
    </Card.Content>
  </Card>
  </>
  )
};

export default Weather;

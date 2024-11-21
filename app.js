// YOUR JS CODE HERE
const temperature = document.querySelector('.current-weather__temperature');
const wind = document.querySelector('.current-weather__wind');
const zone = document = document.querySelector('.current-weather__location');
const day = document.querySelector('.current-weather__day');

const getWeatherData = async () => {
  try {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1');
    const weatherInfo = await response.json();

    return weatherInfo;
  } catch(err) {
    console.error(err);
  }
}

const putWeatherInfo = async () => {
  try {
    const info = await getWeatherData();
    temperature.textContent = `${info.current.temperature_2m} ${info.current_units.temperature_2m}`;
    wind.textContent = `${info.current.wind_speed_10m} ${info.current_units.wind_speed_10m}`;
    zone.textContent = info.timezone;
    const time = new Date(info.current.time);
    day.textContent = time.toLocaleString('en-US');

  } catch(err) {
    console.error(err);
  }
}

putWeatherInfo();
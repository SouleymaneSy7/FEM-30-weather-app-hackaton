export interface WeatherData {
  current: {
    temperature: number;
    humidity: number;
    apparentTemperature: number;
    isDay: number;
    snowfall: number;
    showers: number;
    rain: number;
    precipitation: number;
    surfacePressure: number;
    pressureMsl: number;
    cloudCover: number;
    weatherCode: number;
    windGusts: number;
    windDirection: number;
    windSpeed: number;
  };

  hourly: {
    time: string;
    temperature: number;
    humidity: number;
    apparentTemperature: number;
    visibility: number;
    windSpeed10m: number;
    windSpeed80m: number;
    windSpeed120m: number;
    windSpeed180m: number;
    precipitationProbability: number;
    precipitation: number;
    uvIndex: number;
    uvIndexClearSky: number;
    isDay: number;
    sunshineDuration: number;
  };

  daily: {
    date: string;
    weatherCode: number;
    temperatureMax: number;
    temperatureMin: number;
    apparentTemperatureMax: number;
    apparentTemperatureMin: number;
    sunrise: string;
    sunset: string;
    daylightDuration: number;
    sunshineDuration: number;
    uvIndexMax: number;
    uvIndexClearSkyMax: number;
    rainSum: number;
    showersSum: number;
    snowfallSum: number;
    precipitationSum: number;
    precipitationHours: number;
    precipitationProbabilityMax: number;
    windSpeedMax: number;
    windGustsMax: number;
    windDirectionDominant: number;
    shortwaveRadiationSum: number;
    et0FaoEvapotranspiration: number;
  };
}

export type CurrentWeather = WeatherData["current"];
export type HourlyWeather = WeatherData["hourly"];
export type DailyWeather = WeatherData["daily"];

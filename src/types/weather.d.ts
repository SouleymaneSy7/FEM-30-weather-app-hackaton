export interface WeatherData {
  current: {
    time: Date;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    is_day: number;
    snowfall: number;
    showers: number;
    rain: number;
    precipitation: number;
    surface_pressure: number;
    pressure_msl: number;
    cloud_cover: number;
    weather_code: number;
    wind_gusts_10m: number;
    wind_direction_10m: number;
    wind_speed_10m: number;
  };

  hourly: {
    time: Date[];
    temperature_2m: number[];
    relative_humidity_2m: number[];
    apparent_temperature: number[];
    visibility: number[];
    wind_speed_10m: number[];
    wind_speed_80m: number[];
    wind_speed_120m: number[];
    wind_speed_180m: number[];
    precipitation_probability: number[];
    precipitation: number[];
    uv_index: number[];
    uv_index_clear_sky: number[];
    is_day: number[];
    sunshine_duration: number[];
  };

  daily: {
    time: Date[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    apparent_temperature_max: number[];
    apparent_temperature_min: number[];
    sunrise: Date[];
    sunset: Date[];
    daylight_duration: number[];
    sunshine_duration: number[];
    uv_index_max: number[];
    uv_index_clear_sky_max: number[];
    rain_sum: number[];
    showers_sum: number[];
    snowfall_sum: number[];
    precipitation_sum: number[];
    precipitation_hours: number[];
    precipitation_probability_max: number[];
    wind_speed_10m_max: number[];
    wind_gusts_10m_max: number[];
    wind_direction_10m_dominant: number[];
    shortwave_radiation_sum: number[];
    et0_fao_evapotranspiration: number[];
  };
}

export type CurrentWeather = WeatherData["current"];
export type HourlyWeather = WeatherData["hourly"];
export type DailyWeather = WeatherData["daily"];

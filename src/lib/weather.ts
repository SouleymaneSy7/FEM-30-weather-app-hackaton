import axios from "axios";
import { WeatherData } from "@/types/weather";

const OPENMETEO_BASE_URL = "https://api.open-meteo.com/v1";
const GEOCODING_BASE_URL = "https://geocoding-api.open-meteo.com/v1";

export const getWeatherData = async (
  lat: number,
  lon: number,
): Promise<WeatherData> => {
  const params = new URLSearchParams({
    latitude: lat.toString(),
    longitude: lon.toString(),
    daily: [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "apparent_temperature_max",
      "apparent_temperature_min",
      "sunrise",
      "sunset",
      "daylight_duration",
      "sunshine_duration",
      "uv_index_max",
      "uv_index_clear_sky_max",
      "rain_sum",
      "showers_sum",
      "snowfall_sum",
      "precipitation_sum",
      "precipitation_hours",
      "precipitation_probability_max",
      "wind_speed_10m_max",
      "wind_gusts_10m_max",
      "wind_direction_10m_dominant",
      "shortwave_radiation_sum",
      "et0_fao_evapotranspiration",
    ].join(","),
    hourly: [
      "temperature_2m",
      "relative_humidity_2m",
      "apparent_temperature",
      "visibility",
      "wind_speed_10m",
      "wind_speed_80m",
      "wind_speed_120m",
      "wind_speed_180m",
      "precipitation_probability",
      "precipitation",
      "uv_index",
      "uv_index_clear_sky",
      "is_day",
      "sunshine_duration",
    ].join(","),
    current: [
      "temperature_2m",
      "relative_humidity_2m",
      "apparent_temperature",
      "is_day",
      "snowfall",
      "showers",
      "rain",
      "precipitation",
      "surface_pressure",
      "pressure_msl",
      "cloud_cover",
      "weather_code",
      "wind_gusts_10m",
      "wind_direction_10m",
      "wind_speed_10m",
    ].join(","),
    timezone: "auto",
    forecast_days: "7",
    wind_speed_unit: "mph",
    temperature_unit: "fahrenheit",
    precipitation_unit: "inch",
  });

  const response = await axios.get(`${OPENMETEO_BASE_URL}/forecast?${params}`);
  const data = response.data;

  return {
    current: {
      temperature: data.current.temperature_2m,
      humidity: data.current.relative_humidity_2m,
      apparentTemperature: data.current.apparent_temperature,
      isDay: data.current.is_day,
      snowfall: data.current.snowfall,
      showers: data.current.showers,
      rain: data.current.rain,
      precipitation: data.current.precipitation,
      surfacePressure: data.current.surface_pressure,
      pressureMsl: data.current.pressure_msl,
      cloudCover: data.current.cloud_cover,
      weatherCode: data.current.weather_code,
      windGusts: data.current.wind_gusts_10m,
      windDirection: data.current.wind_direction_10m,
      windSpeed: data.current.wind_speed_10m,
    },

    hourly: data.hourly.time.slice(0, 24).map((time: string, i: number) => ({
      time,
      temperature: data.hourly.temperature_2m[i],
      humidity: data.hourly.relative_humidity_2m[i],
      apparentTemperature: data.hourly.apparent_temperature[i],
      visibility: data.hourly.visibility[i],
      windSpeed10m: data.hourly.wind_speed_10m[i],
      windSpeed80m: data.hourly.wind_speed_80m[i],
      windSpeed120m: data.hourly.wind_speed_120m[i],
      windSpeed180m: data.hourly.wind_speed_180m[i],
      precipitationProbability: data.hourly.precipitation_probability[i],
      precipitation: data.hourly.precipitation[i],
      uvIndex: data.hourly.uv_index[i],
      uvIndexClearSky: data.hourly.uv_index_clear_sky[i],
      isDay: data.hourly.is_day[i],
      sunshineDuration: data.hourly.sunshine_duration[i],
    })),

    daily: data.daily.time.map((date: string, i: number) => ({
      date,
      weatherCode: data.daily.weather_code[i],
      temperatureMax: data.daily.temperature_2m_max[i],
      temperatureMin: data.daily.temperature_2m_min[i],
      apparentTemperatureMax: data.daily.apparent_temperature_max[i],
      apparentTemperatureMin: data.daily.apparent_temperature_min[i],
      sunrise: data.daily.sunrise[i],
      sunset: data.daily.sunset[i],
      daylightDuration: data.daily.daylight_duration[i],
      sunshineDuration: data.daily.sunshine_duration[i],
      uvIndexMax: data.daily.uv_index_max[i],
      uvIndexClearSkyMax: data.daily.uv_index_clear_sky_max[i],
      rainSum: data.daily.rain_sum[i],
      showersSum: data.daily.showers_sum[i],
      snowfallSum: data.daily.snowfall_sum[i],
      precipitationSum: data.daily.precipitation_sum[i],
      precipitationHours: data.daily.precipitation_hours[i],
      precipitationProbabilityMax: data.daily.precipitation_probability_max[i],
      windSpeedMax: data.daily.wind_speed_10m_max[i],
      windGustsMax: data.daily.wind_gusts_10m_max[i],
      windDirectionDominant: data.daily.wind_direction_10m_dominant[i],
      shortwaveRadiationSum: data.daily.shortwave_radiation_sum[i],
      et0FaoEvapotranspiration: data.daily.et0_fao_evapotranspiration[i],
    })),
  };
};

export const searchCities = async (query: string) => {
  const params = new URLSearchParams({
    name: query.trim(),
    count: "10",
    language: "en",
    format: "json",
  });

  const response = await axios.get(`${GEOCODING_BASE_URL}/search?${params}`);
  const data = response.data || [];

  return data;
};

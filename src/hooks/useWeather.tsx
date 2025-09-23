import useSWR from "swr";
import { getWeatherData } from "@/lib/weather";

export const useWeather = (lat?: number, lon?: number) => {
  const checkFetch = lat !== undefined && lon !== undefined;

  const { data, isLoading, error } = useSWR(
    checkFetch ? `weather-${lat}-${lon}` : null,
    () => getWeatherData(lat!, lon!),
  );

  return {
    isLoading,
    weather: data,
    isError: error,
  };
};

import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  async fetchLocalization(query: string) {
    try {
      const response = await axios.get(`${environment.nominatimProxyUrl}?q=${query}`);
      return response.data;
    } catch (err) {
      console.error('Error fetching localization data:', err);
      throw err;
    }
  }

  async fetchWeather(lat: number, lon: number) {
    try {
      const response = await axios.get(
        `${environment.openWeatherUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${environment.openWeatherApiKey}`
      );
      return response.data;
    } catch (err) {
      console.error('Error fetching weather data:', err);
      throw err;
    }
  }
}

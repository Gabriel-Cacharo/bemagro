import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapView } from './map-view/map-view';
import { FormsModule } from '@angular/forms';
import axios from 'axios';
import { Header } from './header/header';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { WeatherCard } from './weather-card/weather-card';
import { ToastrService } from 'ngx-toastr';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MapView,
    FormsModule,
    Header,
    MatIcon,
    WeatherCard,
    MatProgressSpinnerModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private toastr: ToastrService, private weatherService: WeatherService) {}

  protected readonly title = signal('projeto-bemagro');

  searchTerm: string = '';
  latSearched: number = -21.1776315;
  lngSearched: number = -47.8100983;
  citySearched: string = '';
  weatherData: any;
  loading = signal(false);
  errors: { searchTerm?: boolean } = {};

  onSearchChange(value: string) {
    this.searchTerm = value;
  }

  async handleSearch() {
    if (!this.searchTerm.trim()) {
      this.toastr.warning('Please enter a valid location', 'Warning');
      this.errors = { searchTerm: true };
      return;
    }

    try {
      this.errors = {};
      this.loading.set(true);

      const responseLocalization = await this.weatherService.fetchLocalization(this.searchTerm);

      this.latSearched = responseLocalization[0]?.lat;
      this.citySearched = responseLocalization[0]?.name;
      this.lngSearched = responseLocalization[0]?.lon;

      const responseWeather = await this.weatherService.fetchWeather(
        this.latSearched,
        this.lngSearched
      );

      this.weatherData = responseWeather;
    } finally {
      this.loading.set(false);
    }
  }
}

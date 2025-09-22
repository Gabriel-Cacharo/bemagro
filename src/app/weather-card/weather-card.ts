import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-weather-card',
  imports: [MatIconModule],
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.css',
})
export class WeatherCard {
  @Input() weatherIcon: string = '';
  @Input() weatherData: any;
  @Input() weatherName: string = '';
  @Input() infoType: string = '';
}

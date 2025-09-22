import { Component, Input, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

@Component({
  selector: 'app-map-view',
  imports: [],
  templateUrl: './map-view.html',
  styleUrl: './map-view.css',
})
export class MapView {
  @Input() lat: number = 0;
  @Input() lng: number = 0;

  private map!: L.Map;
  private marker!: L.Marker;

  private initMap(): void {
    this.map = L.map('map', {
      center: [this.lat, this.lng],
      zoom: 12,
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
    });

    tiles.addTo(this.map);

    this.marker = L.marker([this.lat, this.lng]).addTo(this.map);
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.map && (changes['lat'] || changes['lng'])) {
      const newLat = changes['lat'] ? changes['lat'].currentValue : this.lat;
      const newLng = changes['lng'] ? changes['lng'].currentValue : this.lng;
      this.map.setView([newLat, newLng], this.map.getZoom());

      this.marker.setLatLng([newLat, newLng]);
    }
  }
}

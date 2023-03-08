import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { Icon, MarkerOptions } from 'leaflet';
import { Apiservice } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements AfterViewInit {
  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3,
    });

    const tiles = L.tileLayer(
      'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);

    var myIcon = L.icon({
      iconUrl: '../../assets/airplane.png',
    });

    const marker = L.marker([51.5, -0.09], { icon: myIcon });
    marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();

    marker.addTo(this.map);

    setInterval(() => {
      this.apiService
        .getLatestData()
        .subscribe((response) =>
          marker.setLatLng([
            response.result.latitude,
            response.result.longitude,
          ])
        );
    }, 10000);
  }

  constructor(private apiService: Apiservice) {}

  ngAfterViewInit(): void {
    this.initMap();
  }
}

import { AfterViewInit, Component } from '@angular/core';
// import * as L from 'leaflet';
// import 'leaflet-routing-machine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  // title = 'my-app';
  // private map!: L.Map;
  ngAfterViewInit(): void {
    // this.map = L.map('map');
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '© OpenStreetMap contributors',
    // }).addTo(this.map);

    // this.map.setView([51.505, -0.09], 13);

    // this.map.addEventListener('click', (e) => {
    //   console.log(e.latlng)
    // })
  }


  onSetCenter() {
  }
}

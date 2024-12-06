import { Component, signal, viewChild, viewChildren, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { Location } from '../models/location.model';
import {GoogleMap, MapAdvancedMarker, MapInfoWindow} from '@angular/google-maps';
import { register} from 'swiper/element/bundle';
register();


@Component({
  selector: 'app-borrego',
  standalone: true,
  imports: [GoogleMap, FormsModule, MapAdvancedMarker, MapInfoWindow],
  templateUrl: './borrego.component.html',
  styleUrl: './borrego.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BorregoComponent {
  infoWindowRef = viewChild.required(MapInfoWindow);
  markersRef = viewChildren(MapAdvancedMarker)

  center: google.maps.LatLngLiteral = {lat: 30.9498073, lng: -115.5527787};
  zoom = signal(10);

  $locations = signal<Location[]>([
    {
      id: 0,
      name: "Recepcion Parque Nacional Sierra De San Pedro Martir",
      description: "22797 B.C.",
      latitude: 30.9498073,
      longitude: -115.5527787,
      img: "https://lh5.googleusercontent.com/p/AF1QipPJslw2zxbI9ZOTTfkycIpyDVMEgZhRplIPmaWu=w408-h306-k-no"
    },
    {
      id: 1,
      name: "El Pinacate y Gran Desierto de Altar",
      description: "Carretera Sonoyta-Puerto Peñasco Km 51 Ejido Los Norteños, 83550 Puerto Peñasco, Son.",
      latitude: 31.9026759,
      longitude: -113.8584737,
      img: "https://lh5.googleusercontent.com/p/AF1QipMHTaPpkjHzpBs3TAqXoLxesjDSHgiMI5f0m2ep=w408-h241-k-no"
    },
    {
      id: 2,
      name: "Boquillas del Carmen",
      description: "27518 Coah.",
      latitude: 29.1882516,
      longitude: -102.9346975,
      img: "https://www.elsoldelalaguna.com.mx/circulos/turismo/xv5hjd-boquillas-del-carmen-el-pueblo-de-coahuila-que-sobrevive-a-orillas-del-rio-bravo/ALTERNATES/LANDSCAPE_1140/Boquillas%20del%20Carmen,%20el%20pueblo%20de%20Coahuila%20que%20sobrevive%20a%20orillas%20del%20R%C3%ADo%20Bravo"
    }
  ]);

  openInfoWindow (location: Location, marker: MapAdvancedMarker)
  {
    console.log("MarkerClicked", location);

    const content =`<div style="background-color:#81b540;">
      <center><img src="${location.img}"  style=" width: 400px; height: 200px;     text-align: center; place-content: center;">
      <p style="font-weight: bold; font-size: 30px">${location.name}</p>
      <p style="font-size: 20px"">${location.description}</p>
      </center>
      </div>
      `;

    this.infoWindowRef().open(marker, false, content);
  }

  goToPlace(location: Location, position: number)
  {
    const markers = this.markersRef();
    const markerRef = markers[position];

    this.openInfoWindow(location, markerRef)
  }
}

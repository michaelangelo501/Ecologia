import { Component, signal, viewChild, viewChildren, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { Location } from '../models/location.model';
import {GoogleMap, MapAdvancedMarker, MapInfoWindow} from '@angular/google-maps';
import { register} from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-venado',
  standalone: true,
  imports: [GoogleMap, FormsModule, MapAdvancedMarker, MapInfoWindow],
  templateUrl: './venado.component.html',
  styleUrl: './venado.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VenadoComponent {
  infoWindowRef = viewChild.required(MapInfoWindow);
  markersRef = viewChildren(MapAdvancedMarker)

  center: google.maps.LatLngLiteral = {lat: 21.3449273, lng: -98.0881522};
  zoom = signal(10);

  $locations = signal<Location[]>([
    {
      id: 0,
      name: "ANP SIERRA DE OTONTEPEC",
      description: "92204 Chontla, Ver.",
      latitude: 21.3449273,
      longitude: -98.0881522,
      img: "https://lh5.googleusercontent.com/p/AF1QipO568MgVHwIIXOB9KZ0x9ULkTNxyL8j5k4V5La2=w408-h307-k-no"
    },
    {
      id: 1,
      name: "Cabañas y Posada Don Juanito Capulálpam",
      description: "Independencia 3, Barrio la Asunción, 68760 Capulálpam de Méndez, Oax.",
      latitude: 17.3040634,
      longitude: -96.4807832,
      img: "https://www.hotelesdeoaxaca.com/capulalpam/posadaycabanasdonjuanito/posadaycabanasdonjuanito24.jpg"
    },
    {
      id: 2,
      name: "Calakmul",
      description: "Campeche, Camp.",
      latitude: 18.6112847,
      longitude: -89.5518796,
      img: "https://lh5.googleusercontent.com/p/AF1QipMV-eX73LoXcKjAkLGTRhpcg_57R-H2KerLP8IH=w408-h306-k-no"
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

import { Component, signal, viewChild, viewChildren, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { Location } from '../models/location.model';
import {GoogleMap, MapAdvancedMarker, MapInfoWindow} from '@angular/google-maps';
import { register} from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-berrendo',
  standalone: true,
  imports: [GoogleMap, FormsModule, MapAdvancedMarker, MapInfoWindow],
  templateUrl: './berrendo.component.html',
  styleUrl: './berrendo.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})



export default class BerrendoComponent {

  infoWindowRef = viewChild.required(MapInfoWindow);
  markersRef = viewChildren(MapAdvancedMarker)

  center: google.maps.LatLngLiteral = {lat: 29.5530724, lng: -104.9597772};
  zoom = signal(10);

  $locations = signal<Location[]>([
    {
      id: 0,
      name: "Área Natural Protegida Cañón y Sierra del Pegüis",
      description: "Carretera Federal No. 16 Manuel Ojinaga, Chih.",
      latitude: 29.5530724,
      longitude: -104.9597772,
      img: "https://www.elsoldeparral.com.mx/incoming/flwqu6-canon-de-santa-elena...-foto-sitio-web-gobierno-de-mexico.jpeg/alternates/FREE_640/CA%C3%91ON%20DE%20SANTA%20ELENA...%20Foto%20sitio%20Web%20gobierno%20de%20M%C3%A9xico.jpeg"
    },
    {
      id: 1,
      name: "Reserva de la Biosfera El Vizcaíno",
      description: "Av. Profesor Domingo Carballo Félix, Marcelo Rubio Ruiz S/N, 23940 Guerrero Negro, B.C.S.",
      latitude: 27.4984481,
      longitude: -113.6755884,
      img: "https://mxc.com.mx/wp-content/uploads/2024/08/Reserva-El-Vizcaino-.jpeg-1.jpeg"
    },
    {
      id: 2,
      name: "Reserva de la Biosfera Mapimí",
      description: "Autopista Gomez Palacio Jimenez km. 130 Estación Carrillo Chihuahua. km 42, 35079 Gómez palacio, Dgo.",
      latitude: 26.7792439,
      longitude: -103.5661584,
      img: "https://mexicotravelchannel.com.mx/wp-content/uploads/2021/03/mapimi-mexico-travel.jpg"
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



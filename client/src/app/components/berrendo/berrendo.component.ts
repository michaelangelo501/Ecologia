import { Component, signal } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-berrendo',
  standalone: true,
  imports: [ MatCardModule],
  templateUrl: './berrendo.component.html',
  styleUrl: './berrendo.component.css'
})
export default class BerrendoComponent {
  $locations = signal<Location[]>([]);
}
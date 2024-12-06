import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Asegúrate de que el archivo CSS existe
})

export class HomeComponent {

  constructor (private router:Router){}

  @ViewChild('ecologia', { static: false }) aboutSection!: ElementRef;

  scrollToSection(): void {
    this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  onButtonClick(route:string):void{
    this.router.navigate([route]);
  }

}
import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent {
  
  p: Persona = {
    nome: 'Lautaro',
    cognome: 'Martinez',
  };

  constructor() {}
}

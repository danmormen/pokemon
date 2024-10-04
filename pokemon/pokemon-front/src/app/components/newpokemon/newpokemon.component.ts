import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon, ResponsePokemon} from '../../models/pokemon.models';



@Component({
  selector: 'app-newpokemon',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './newpokemon.component.html',
  styleUrl: './newpokemon.component.scss'
})
export class NewpokemonComponent {

  fg = new FormGroup({
    id: new FormControl<string> (''),
    nombre:new FormControl<string> (''),
    tipo: new FormControl<string> (''),
    generacion: new FormControl<string> ('')
  });
   
constructor(private backend : PokemonService){}

grabar() {
const pokemon = new Pokemon(
  null, 
  this.fg.controls['nombre'].value!, 
  this.fg.controls['tipo'].value!, 
  this.fg.controls['generacion'].value!
);

this.backend.grabarPokemon(pokemon).subscribe(
  (response: ResponsePokemon) => {
    console.log('Respuesta del servidor:', response);

    if (response.errorCode === 0) { 
      alert('Pokemon guardado exitosamente: ' + response.mensaje);
      this.fg.patchValue({nombre: '',tipo: '',generacion: '',});
    } else {  
      alert('Error al guardar el Pokemon: ' + response.mensaje);
      
    }
  },
  error => {
    alert('Paso algo al insertar el pokemon y fallo');
  }
);
}


}

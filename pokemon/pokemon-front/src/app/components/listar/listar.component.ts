import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.models';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.scss'
})
export class ListarComponent implements OnInit {

  listar: Pokemon[] = [];  

  constructor(private backend: PokemonService) {}

  ngOnInit(): void {
    this.backend.obtenerPokemon().subscribe(x => {
      if (x.data != null) {
        this.listar = x.data;  
      }
    });
  }

}

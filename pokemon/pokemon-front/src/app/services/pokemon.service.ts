import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon, ResponsePokemon } from '../models/pokemon.models';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  DOMINIO = "http://localhost:3030";

  constructor(private http: HttpClient) { }

  obtenerPokemon() {
    return this.http.get<ResponsePokemon>(`${this.DOMINIO}/pokemon`, {headers: this.getHeaders()});
  }

  grabarPokemon(pokemon: Pokemon) {
    return this.http.post<ResponsePokemon>(`${this.DOMINIO}/pokemon`, pokemon, { headers: this.getHeaders() });
  }
  

  private getHeaders()
  {
    return  new HttpHeaders().set('Content-Type','application/json');
  }

}

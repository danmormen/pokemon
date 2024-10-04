import { Injectable, model } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Pokemon} from '../models/pokemon.models';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private _listado= new BehaviorSubject<Pokemon[]>([]);
  listado = this._listado.asObservable();
  constructor() { }


  updateListado (pokemon: Pokemon) {
    let list = this._listado.value;
    list.push(pokemon)
    this._listado.next(list);

  }
 
  updateListadoLista (listado: Pokemon[]) {
  this._listado.next(listado);
  }

}

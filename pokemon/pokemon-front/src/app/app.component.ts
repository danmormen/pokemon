import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewpokemonComponent } from "./components/newpokemon/newpokemon.component";
import { ListarComponent } from "./components/listar/listar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewpokemonComponent, ListarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pokemon-front';
}

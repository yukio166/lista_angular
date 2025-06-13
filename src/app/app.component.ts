import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaDeCompras } from "./lista-de-compras/lista-de-compras";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaDeCompras],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lista2';
}

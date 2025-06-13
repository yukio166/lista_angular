import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemlista';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-de-compras',
  imports: [FormsModule,CommonModule],
  templateUrl: './lista-de-compras.html',
  styleUrl: './lista-de-compras.css'
})
export class ListaDeCompras {
  item: string = ""
  lista: ItemLista[]=[]
  adicionarItem(){
    let itemLista = new ItemLista();
    itemLista.id = this.lista.length+1;
    itemLista.item = this.item;
    this.lista.push(itemLista);

    //template string
    console.log('item: ${this.item}');
    console.log(JSON.stringify(this.lista));//tranzforma em texto
  }

  riscaritem(elemento:ItemLista){
    elemento.comprado = !elemento.comprado;
  }

}


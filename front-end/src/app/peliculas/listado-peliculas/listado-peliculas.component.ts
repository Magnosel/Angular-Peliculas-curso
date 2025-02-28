import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor() { }
  @Input()
  peliculas: { titulo: string; fechaLanzamiento: Date; precio: number; }[] | undefined;
  ngOnInit(): void {
  
  }

  remover(indicePelicula: number): void {
    this.peliculas?.splice(indicePelicula, 1);
  }

}

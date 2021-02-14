import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines =  [{
        titulo: 'Spider-Man',
        fechaLanzamiento: new Date(),
        precio: 1400.99
      },
      {
        titulo: 'Moana',
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 300.99
      }]
    }, 30);
  }
  title = 'Al valor que yo quiera';

  peliculasEnCines: { titulo: string; fechaLanzamiento: Date; precio: number; }[] | undefined;
  peliculasProximosEstrenos = [{
    
    titulo: 'Avengers: Endgame',
    fechaLanzamiento: new Date(),
    precio: 1400.99
  },
  {
    titulo: 'Inception',
    fechaLanzamiento: new Date('2016-11-14'),
    precio: 300.99
  },
  {
    titulo: 'Rocky',
    fechaLanzamiento: new Date('2016-11-14'),
    precio: 300.99
  }]
  duplicarNumero(valor: number): number{
    return valor * 2;
  }
}



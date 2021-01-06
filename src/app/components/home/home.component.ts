import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { PeliculaService } from 'src/app/providers/pelicula.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  Peliculas = [];
  colapsado = true;
  text = 'Cartelera';
  loading: boolean;

  constructor(private peliservice: PeliculaService, private router: Router) {
    this.loading = true;
    this.peliservice.getcartelera().subscribe( data => {this.Peliculas = data.results, this.loading = false; });
   }

  ngOnInit(): void {
  }

  ejecutar(name: string): any {
      if (name === 'Cartelera') {
        this.peliservice.getcartelera().subscribe( data => {this.Peliculas = data.results, this.loading = false; });
        this.text = name;
      }else if (name === 'Populares') {
        this.peliservice.getPopulares().subscribe( data => {this.Peliculas = data.results, this.loading = false; });
        this.text = name;
      } else {
        this.peliservice.getPopuPeque().subscribe( data => {this.Peliculas = data.results, this.loading = false; });
        this.text = name;
      }
  }
}

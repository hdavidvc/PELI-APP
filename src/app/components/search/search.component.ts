import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../providers/pelicula.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  loading: boolean;
  peliculas = [];
  img: string;
  buscar: string;
  constructor(private peliService: PeliculaService, private router: Router, private route: ActivatedRoute) {
      this.route.params.subscribe(param => {
          if (param.name != null) {
            this.buscar = param.name;
            this.searchPeli();
          }
      });
   }

  ngOnInit(): void {
  }
  searchPeli(): any {

    if (!this.buscar ) {
      Swal.fire({
      title: 'Error al buscar',
      icon: 'error',
      text: 'Ingresa un nombre valido',
      });
    }else {

      this.loading = true;
      this.peliService.searchMovie(this.buscar).subscribe(pelis => {

        /*pelis.results.forEach(peli => {
          if (peli.backdrop_path === null) {
            peli.backdrop_path = 'assets/img/noimage.png';
          }else{
            peli.backdrop_path = this.peliService.imgUrl + peli.backdrop_path;
          }
        });*/
        if (pelis.results.length === 0) {
          Swal.fire({
            title: 'Pelicula no encontrada',
            icon: 'info',
            text: 'No existen peliculas con este nombre',
            });
          this.loading = false;
        } else {

          this.peliculas = pelis.results;
          this.loading = false;
        }
      });
    }
  }
}

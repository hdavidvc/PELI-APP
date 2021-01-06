import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PeliculaService } from '../providers/pelicula.service';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [
  ]
})
export class PeliculaComponent implements OnInit {

  peli = [];
  loading: boolean;
  back: string;
  constructor(private route: ActivatedRoute, private peliService: PeliculaService) {
    this.route.url.subscribe(url => this.back = url[2].path);
    this.route.params.subscribe( param => {
      if (this.back === 'search') {
      this.back += '/' + param.name;
      }
      this.peliService.getMovie(param.id).subscribe( movie => {this.peli = movie, this.loading = false; });
    });
    this.loading = true;
   }

  ngOnInit(): void {
  }
}

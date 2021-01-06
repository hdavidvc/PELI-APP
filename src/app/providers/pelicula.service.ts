import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor( private http: HttpClient) { }
  apiKey = '59088cf4ae0f7469db5a0acccc6fbd20';
  url    = 'https://api.themoviedb.org/3';

  getQuery(query: string): any {
    return this.http.get(`${this.url}${query}`)
    .pipe(
      map( data => data)
    );
  }

  getcartelera(): any{
   return this.getQuery(`/movie/now_playing?api_key=${this.apiKey}&language=es`); }

  getPopulares(): any {
    return this.getQuery(`/movie/popular?api_key=${this.apiKey}&language=es&page=2`); }

  getPopuPeque(): any {
    return this.getQuery(`/discover/movie?api_key=${this.apiKey}&language=es&region=US&sort_by=popularity.desc&certification_country=US&certification=G&certification.lte=G`); }

  getMovie(id: number): any {
    return this.getQuery(`/movie/${id}?api_key=${this.apiKey}&language=es`); }

  searchMovie(query: string): any {
    return this.getQuery(`/search/movie?api_key=${this.apiKey}&language=es&query=${query}`); }
}

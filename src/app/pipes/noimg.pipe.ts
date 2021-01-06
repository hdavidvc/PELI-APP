import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimg'
})
export class NoimgPipe implements PipeTransform {

  imgUrl = 'https://image.tmdb.org/t/p/w300';

  transform(pelicula: object, detalle: boolean): string {

    // tslint:disable-next-line: no-string-literal
    if (detalle) { return this.imgUrl + pelicula['poster_path']; }
    if ( pelicula['backdrop_path']){

      return this.imgUrl + pelicula['backdrop_path'];
    } else
    {
      return 'assets/img/noimage.png';
    }

    // if (image.length > 0){
    //   return image[0].url;
    // }else{
    //   return 'assets/img/noimage.png';
    // }

  }


}

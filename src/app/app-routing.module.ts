import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PeliculaComponent } from './pelicula/pelicula.component';

const routes: Routes = [
  {path: 'home',  component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'search/:name', component: SearchComponent},
  {path: 'pelicula/:id/home', component: PeliculaComponent},
  {path: 'pelicula/:id/search/:name', component: PeliculaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

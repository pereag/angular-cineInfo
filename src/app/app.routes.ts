import { Routes } from '@angular/router';
import { PopularPageComponent } from './movie/popular-page/popular-page.component';
import { MoviePageComponent } from './movie/movie-page/movie-page.component';
import { PersonDetailsComponent } from './person/person-details/person-details.component';

export const routes: Routes = [
  {
  path: 'movie',
  children: [
  {path: 'popular', component: PopularPageComponent, title: 'Popular page'},
  {path: ':id', component: MoviePageComponent},
  ]
  },
  {
  path: 'person',
  children: [
    {path: ':id', component: PersonDetailsComponent},
  ]
  },
  {path: '**', redirectTo: 'movie/popular', pathMatch: 'full'}
  ];
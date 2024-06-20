import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { PersonDetails } from './person-details/person-details';
import { plainToInstance } from 'class-transformer';
import { Movie } from '../movie/movie';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) {}
  public personDetails(id: number): Observable<PersonDetails> {
    return this.http.get(`/api/person/${id}`).pipe(
      map((json: Object) => plainToInstance(PersonDetails, json)),
      tap((element) => console.log(element))
    );
  }

  public personMovie(id:number): Observable<Movie[]> {
    return this.http.get(`/api/discover/movie?with_cast=${id}`).pipe(
      map((json: any) => json.results),
      tap((popularMovies) => console.log(popularMovies)),
      map((json: Object[]) => plainToInstance(Movie, json)),
      tap((popularMovies) => console.log(popularMovies))
    );
  }
}

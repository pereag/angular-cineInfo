import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Movie } from './movie';
import { plainToInstance } from 'class-transformer';
import { Credits } from  '../movie/movie-credits/credits';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  public popular(): Observable<Movie[]> {
    return this.http.get(`/api/movie/popular`).pipe(
      map((json: any) => json.results),
      tap((movies) => console.log(movies)),
      map((json: Object[]) => plainToInstance(Movie, json)),
      tap((movies) => console.log(movies))
    );
  }

  public movie(id: number): Observable<Movie> {
    return this.http.get(`/api/movie/${id}`).pipe(
      tap((movie: any) => console.log(movie)),
      map((json: Object) => plainToInstance(Movie, json)),
      //tap((movie) => console.log(movie))
    );
  }

  public movieCredit(id: number): Observable<Credits> {
    return this.http.get(`/api/movie/${id}/credits`).pipe(
      tap((movie: any) => console.log(movie)),
      map((json: Object) => plainToInstance(Credits, json)),
      tap((movieCredit) => console.log(movieCredit))
    );
  }
}

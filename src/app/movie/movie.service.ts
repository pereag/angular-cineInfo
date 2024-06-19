import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Movie } from './movie';
import { plainToInstance } from 'class-transformer';
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
}

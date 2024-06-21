import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Movie } from '../movie/movie';
import { debounce, map, tap, timer } from 'rxjs';
import { plainToInstance } from 'class-transformer';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {}
  public movies(value: string): Observable<Movie[]> {
    return this.http.get(`/api/search/movie?query=${value}`).pipe(
      map((json: any) => json.results),
      map((json: Object[]) => plainToInstance(Movie, json)),
      tap((movies) => console.log(movies))
    );
  }
}

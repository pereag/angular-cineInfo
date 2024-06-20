import { Type } from 'class-transformer';
import 'reflect-metadata';
export class Movie {
  title: string = '';
  id: number = 0;
  @Type(() => Date) release_date?: Date;
  poster_path: string = '';
  vote_count: number = 0;
  vote_average: number = 0
  budget: number = 0;
  overview: string = '';

  get poster() {
    return `/api${this.poster_path}`;
  }
}

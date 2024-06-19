import { Type } from 'class-transformer';
import 'reflect-metadata';
export class Movie {
  title: string = '';
  id: number = 0;
  @Type(() => Date) release_date?: Date;
  poster_path: string = '';

  get poster() {
    return `/api${this.poster_path}`;
  }
}

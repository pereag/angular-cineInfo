import { Component, Input } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'imbd-movie-poster',
  standalone: true,
  imports: [],
  templateUrl: './movie-poster.component.html',
  styleUrl: './movie-poster.component.css',
})
export class MoviePosterComponent {
  @Input({ required: true }) public movie!: Movie;
}

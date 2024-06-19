import { Component, OnInit, inject } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { MoviePosterComponent } from '../movie-poster/movie-poster.component';

@Component({
  selector: 'imbd-popular-page',
  standalone: true,
  imports: [MoviePosterComponent],
  templateUrl: './popular-page.component.html',
  styleUrl: './popular-page.component.css',
})
export class PopularPageComponent implements OnInit {
  public movies?: Movie[];
  private movieService = inject(MovieService);

  ngOnInit() {
    this.movieService.popular().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }
}

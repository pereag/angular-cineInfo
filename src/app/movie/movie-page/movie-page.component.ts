import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {switchMap} from 'rxjs/operators';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Credits } from '../movie-credits/credits';
import { MovieCreditsComponent } from "../movie-credits/movie-credits.component";
import { Title } from '@angular/platform-browser';


@Component({
    selector: 'imbd-movie-page',
    standalone: true,
    templateUrl: './movie-page.component.html',
    styleUrl: './movie-page.component.css',
    imports: [CurrencyPipe, DatePipe, MovieCreditsComponent]
})
export class MoviePageComponent implements OnInit {
  public movie?: Movie;
  public movieCredit? : Credits;
  private movieService = inject(MovieService);
  constructor(private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit() {
  this.route.params.pipe(
  switchMap((params: Params) => {
    return this.movieService.movie(params['id'])
  })
  ).subscribe((value) => {
    this.movie = value; 
    this.titleService.setTitle(this.movie.title);
  });

  this.route.params.pipe(
    switchMap((params: Params) => {
      return this.movieService.movieCredit(params['id'])
    })
    ).subscribe((value) => {this.movieCredit = value});

  }
}
